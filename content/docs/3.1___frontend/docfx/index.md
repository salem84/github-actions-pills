---
title: DocFx site
shortTitle: DocFx
category: frontend
agents: 
  - ubuntu
---

This workflow uses an Ubuntu agent to build a DocFx site and publish content directly to GitHub Pages branch.

## Variables & Secrets

| Type | Name | Description |
|------|------|-------------|
| Secret | GITHUB_TOKEN | Generated automatically |

## Pipeline
`embed:build-publish-ghpages.yaml`

## Publish.ps1
`embed:publish.ps1`