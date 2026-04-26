# Stage 1: Build Gophish from source
FROM golang:bookworm AS builder

# Install build dependencies
RUN apt-get install -y --no-install-recommends git

WORKDIR /go/src/github.com/gophish/gophish

RUN git clone https://github.com/gophish/gophish.git .

RUN go build -v

# Stage 2: Runtime environment
FROM ubuntu:24.04

# Avoid prompts from apt
ENV DEBIAN_FRONTEND=noninteractive

# Install runtime dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    jq \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/gophish

COPY --from=builder /go/src/github.com/gophish/gophish/ /opt/gophish/

# Modify config.json to listen on all interfaces (0.0.0.0)
RUN jq '.admin_server.listen_url = "0.0.0.0:3333" | .phish_server.listen_url = "0.0.0.0:80"' config.json > config.json.tmp && \
    mv config.json.tmp config.json

# Expose Admin (3333) and Phish (80) ports
EXPOSE 3333 80

CMD ["./gophish"]
