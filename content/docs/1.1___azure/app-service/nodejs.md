---
title: Azure App Service (NodeJs)
shortTitle: App Service (NodeJs)
category: azure
agents: 
  - ubuntu
tags:
  - "build"
  - "deploy"
  - "azure"
  - "nodejs"
  - "npm"
---

## Variables & Secrets

| Type | Name | Description | 
|------|------|-------------|
| _Env_ | AZURE_WEBAPP_NAME | Application's name |
| _Env_ | AZURE_WEBAPP_PACKAGE_PATH | Path to web app project, defaults to the repository root |
| _Env_ | AZURE_WEBAPP_NAME | Node version to use (e.g. 14.x) |
| _Secrets_ | AZURE_WEBAPP_PUBLISH_PROFILE | Azure deployment credentials [(how to generate)](https://docs.microsoft.com/it-it/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)

## Pipeline

```yaml
jobs:
  build-and-deploy:
    name: Build and Deploy
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@main
    - name: Use Node.js ${{ env.NODE_VERSION }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ env.NODE_VERSION }}

    - name: npm install, build, and test
      run: |
        # Build and test the project, then
        # deploy to Azure Web App.
        npm install
        npm run build --if-present
        npm run test --if-present
      working-directory: my-app-path

    - name: 'Deploy to Azure WebApp'
      uses: azure/webapps-deploy@v2
      with: 
        app-name: ${{ env.AZURE_WEBAPP_NAME }}
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
        package: ${{ env.AZURE_WEBAPP_PACKAGE_PATH }}

```
