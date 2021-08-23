---
title: Azure App Service (.NET Core)
shortTitle: App Service (.NET Core)
category: azure
agents: 
  - ubuntu
tags:
  - "build"
  - "deploy"
  - "azure"
  - "dotnet"
  - "dotnet-core"
---

## Variables & Secrets

| Type | Name | Description | 
|------|------|-------------|
| _Env_ | AZURE_WEBAPP_NAME | Application's name |
| _Env_ | AZURE_WEBAPP_PACKAGE_PATH | Path to web app project, defaults to the repository root |
| _Env_ | DOTNET_VERSION | .NET version to use (e.g. 3.1.x) |
| _Secrets_ | AZURE_WEBAPP_PUBLISH_PROFILE | Azure deployment credentials [(how to generate)](https://docs.microsoft.com/it-it/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)

## Pipeline

```yaml
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Checkout the repo
      - uses: actions/checkout@main
      
      # Setup .NET Core SDK
      - name: Setup .NET Core
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: ${{ env.DOTNET_VERSION }} 
      
      # Run dotnet build and publish
      - name: dotnet build and publish
        run: |
          dotnet restore
          dotnet build --configuration Release
          dotnet publish -c Release -o '${{ env.AZURE_WEBAPP_PACKAGE_PATH }}/myapp' 
          
      # Deploy to Azure Web apps
      - name: 'Run Azure webapp deploy action using publish profile credentials'
        uses: azure/webapps-deploy@v2
        with: 
          app-name: ${{ env.AZURE_WEBAPP_NAME }} # Replace with your app name
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE  }} # Define secret variable in repository settings as per action documentation
          package: '${{ env.AZURE_WEBAPP_PACKAGE_PATH }}/myapp'
```
