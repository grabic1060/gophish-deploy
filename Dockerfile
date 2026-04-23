FROM ubuntu:24.04

# Avoid prompts from apt
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    wget \
    unzip \
    jq \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/gophish

# Download and install Gophish v0.12.1 (AMD64 Linux Prebuild)
RUN wget -O gophish.zip https://github.com/gophish/gophish/releases/download/v0.12.1/gophish-v0.12.1-linux-64bit.zip && \
    unzip gophish.zip && \
    rm gophish.zip && \
    chmod +x gophish

# Modify config.json to listen on all interfaces (0.0.0.0)
RUN jq '.admin_server.listen_url = "0.0.0.0:3333" | .phish_server.listen_url = "0.0.0.0:80"' config.json > config.json.tmp && \
    mv config.json.tmp config.json

# Expose Admin (3333) and Phish (80) ports
EXPOSE 3333 80

# Start Gophish
CMD ["./gophish"]
