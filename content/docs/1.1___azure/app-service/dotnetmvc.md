---
title: Azure App Service (ASP.NET MVC)
shortTitle: App Service (.NET)
category: azure
agents: 
  - windows
tags:
  - "build"
  - "deploy"
  - "azure"
  - "dotnet"
  - "aspnet"
---

## Variables & Secrets

| Type | Name | Description | 
|------|------|-------------|
| _Env_ | AZURE_WEBAPP_NAME | Application's name |
| _Env_ | AZURE_WEBAPP_PACKAGE_PATH | Path to web app project, defaults to the repository root |
| _Env_ | NUGET_VERSION | NuGet Version to restore dependencies (e.g. 5.3.x) |
| _Secrets_ | AZURE_WEBAPP_PUBLISH_PROFILE | Azure deployment credentials [(how to generate)](https://docs.microsoft.com/it-it/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)
s
## Pipeline

```yaml
jobs:
  build-and-deploy:
    runs-on: windows-latest
    steps:

    - uses: actions/checkout@main  
    
    - name: Install Nuget
      uses: nuget/setup-nuget@v1
      with:
        nuget-version: ${{ env.NUGET_VERSION}}
    - name: NuGet to restore dependencies as well as project-specific tools that are specified in the project file
      run: nuget restore
  
    - name: Add msbuild to PATH
      uses: microsoft/setup-msbuild@v1.0.2

    - name: Run MSBuild
      run: msbuild .\SampleWebApplication.sln
       
    - name: 'Run Azure webapp deploy action using publish profile credentials'
      uses: azure/webapps-deploy@v2
      with: 
        app-name: ${{ env.AZURE_WEBAPP_NAME }} 
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE  }} 
        package: '${{ env.AZURE_WEBAPP_PACKAGE_PATH }}/SampleWebApplication/'
```
