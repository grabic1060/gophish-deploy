#!/bin/bash

# Configuration
REGION="ap-northeast-2"
INSTANCE_TYPE="t3.small"
SECURITY_GROUP_NAME="gophish-sg-$(date +%s)"
KEY_NAME="gophish-key"
DOMAIN="gophish.yoonsrv.com"

echo "🚀 Starting automated Gophish deployment with HTTPS (Ubuntu 24.04)..."

# 1. Get the Domain Name from the user
# read -p "🌐 Enter your Phishing Domain (e.g., phish.example.com): " DOMAIN
# if [ -z "$DOMAIN" ]; then
#     echo "❌ Error: Domain name is required for HTTPS automation."
#     exit 1
# fi

# 2. Create a key pair if it doesn't exist
if ! aws ec2 describe-key-pairs --key-names "$KEY_NAME" --region "$REGION" >/dev/null 2>&1; then
    echo "🔑 Creating key pair: $KEY_NAME..."
    aws ec2 create-key-pair --key-name "$KEY_NAME" --query 'KeyMaterial' --output text --region "$REGION" > "${KEY_NAME}.pem"
    chmod 400 "${KEY_NAME}.pem"
    echo "✅ Key saved to ${KEY_NAME}.pem"
else
    echo "ℹ️ Using existing key pair: $KEY_NAME"
fi

# 3. Create Security Group
echo "🛡️ Creating security group: $SECURITY_GROUP_NAME..."
SG_ID=$(aws ec2 create-security-group \
    --group-name "$SECURITY_GROUP_NAME" \
    --description "Security group for Gophish with HTTPS" \
    --region "$REGION" \
    --query 'GroupId' \
    --output text)

# 4. Add Security Group Rules (22, 80, 443, 3333)
echo "🔓 Adding firewall rules (SSH:22, HTTP:80, HTTPS:443, Admin:3333)..."
aws ec2 authorize-security-group-ingress --group-id "$SG_ID" --protocol tcp --port 22 --cidr 0.0.0.0/0 --region "$REGION"
aws ec2 authorize-security-group-ingress --group-id "$SG_ID" --protocol tcp --port 80 --cidr 0.0.0.0/0 --region "$REGION"
aws ec2 authorize-security-group-ingress --group-id "$SG_ID" --protocol tcp --port 443 --cidr 0.0.0.0/0 --region "$REGION"
aws ec2 authorize-security-group-ingress --group-id "$SG_ID" --protocol tcp --port 3333 --cidr 0.0.0.0/0 --region "$REGION"

# 5. Find the latest Ubuntu 24.04 AMI
echo "🔍 Finding latest Ubuntu 24.04 AMI..."
AMI_ID=$(aws ec2 describe-images \
    --owners 099720109477 \
    --filters "Name=name,Values=ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*" \
    --query 'sort_by(Images, &CreationDate)[-1].ImageId' \
    --output text \
    --region "$REGION")

# 6. Define User Data (Cloud-Init) script
USER_DATA=$(cat <<EOF
#!/bin/bash
# Install Docker
apt-get update -y
apt-get install -y docker.io docker-compose-v2
systemctl start docker
systemctl enable docker
usermod -aG docker ubuntu

# Set up Gophish
mkdir -p /home/ubuntu/gophish
cd /home/ubuntu/gophish

# Create Dockerfile
cat <<EOD > Dockerfile
FROM ubuntu:24.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \\
    apt-get install -y --no-install-recommends wget unzip jq ca-certificates && \\
    rm -rf /var/lib/apt/lists/*
WORKDIR /opt/gophish
RUN wget -O gophish.zip https://github.com/gophish/gophish/releases/download/v0.12.1/gophish-v0.12.1-linux-64bit.zip && \\
    unzip gophish.zip && rm gophish.zip && chmod +x gophish
# Configure Gophish to listen on 8080 for Caddy to proxy
RUN jq '.admin_server.listen_url = "0.0.0.0:3333" | .phish_server.listen_url = "0.0.0.0:8080"' config.json > config.json.tmp && \\
    mv config.json.tmp config.json
EXPOSE 3333 8080
CMD ["./gophish"]
EOD

# Create docker-compose.yml with Caddy reverse proxy
cat <<EOD > docker-compose.yml
services:
  gophish:
    build: .
    container_name: gophish
    restart: always
    ports:
      - "3333:3333"

  caddy:
    image: caddy:latest
    container_name: caddy-proxy
    restart: always
    ports:
      - "80:80"
      - "443:443"
    command: caddy reverse-proxy --from ${DOMAIN} --to gophish:8080
    volumes:
      - caddy_data:/data
      - caddy_config:/config

volumes:
  caddy_data:
  caddy_config:
EOD

# Run everything
sleep 10
sudo docker compose up -d --build
EOF
)

# 7. Launch EC2 Instance
echo "🛰️ Launching EC2 instance..."
INSTANCE_ID=$(aws ec2 run-instances \
    --image-id "$AMI_ID" \
    --instance-type "$INSTANCE_TYPE" \
    --key-name "$KEY_NAME" \
    --security-group-ids "$SG_ID" \
    --user-data "$USER_DATA" \
    --region "$REGION" \
    --query 'Instances[0].InstanceId' \
    --output text)

echo "⏳ Waiting for instance to get Public IP..."
sleep 15
PUBLIC_IP=$(aws ec2 describe-instances --instance-ids "$INSTANCE_ID" --region "$REGION" --query 'Reservations[0].Instances[0].PublicIpAddress' --output text)

echo "------------------------------------------------------------"
echo "✅ DEPLOYMENT INITIATED!"
echo "------------------------------------------------------------"
echo "CRITICAL NEXT STEP:"
echo "👉 Go to your DNS provider (Cloudflare, GoDaddy, etc.) and"
echo "   create an 'A' record for: ${DOMAIN}"
echo "   pointing to: ${PUBLIC_IP}"
echo ""
echo "Once DNS is pointed, SSL will activate automatically."
echo "------------------------------------------------------------"
echo "🌐 Phishing URL:    https://${DOMAIN}"
echo "🛡️  Admin Panel:    https://${PUBLIC_IP}:3333"
echo "👤 Username:        admin"
echo ""
echo "🔑 TO GET ADMIN PASSWORD (wait 3 mins):"
echo "   ssh -i ${KEY_NAME}.pem ubuntu@${PUBLIC_IP} 'sudo docker compose -f /home/ubuntu/gophish/docker-compose.yml logs gophish | grep password'"
echo "------------------------------------------------------------"
