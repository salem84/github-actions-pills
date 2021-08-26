---
title: Build and Push Docker Image
shortTitle: Docker (Push)
category: k8s
agents:
    - ubuntu
tags:
    - "docker"
    - "container-registry"
---

## Variables & Secrets

| Type | Name | Description | 
|------|------|-------------|
| _Env_ | CR_HOST | FQDN for Container Registry |
| _Env_ | IMAGE_NAME | Container image name |
| _Secrets_ | CR_USERNAME | User name for accessing Container Registry |
| _Secrets_ | CR_PASSWORD | Password for accessing Container Registry |

## Pipeline

```yaml
jobs:
    docker:
    runs-on: ubuntu-latest
    needs: [build]
    steps: 
      - uses: actions/checkout@v2

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1

      - name: Login to Docker Registry
        uses: docker/login-action@v1 
        with:
          registry: ${{ env.CR_HOST }}
          username: ${{ secrets.CR_USERNAME }}
          password: ${{ secrets.CR_TOKEN }}

      - name: Build and push container image to registry
        id: docker_build
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: ${{ env.CR_HOST }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
```