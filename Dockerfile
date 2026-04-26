FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

# Install runtime dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    jq \
    ca-certificates \
    wget \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/gophish

RUN wget "https://github.com/grabic1060/gophish/releases/download/v0.12.1/gophish-v0.12.1-linux-arm64.zip" && \
    unzip gophish*.zip && rm gophish*.zip

RUN jq '.admin_server.listen_url = "0.0.0.0:3333" | .phish_server.listen_url = "0.0.0.0:8080" | .admin_server.use_tls = false' config.json > config.json.tmp && \
    mv config.json.tmp config.json

EXPOSE 3333 8080

CMD ["./gophish"]
