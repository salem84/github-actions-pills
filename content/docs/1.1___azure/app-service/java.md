---
title: Azure App Service (Java Spring)
shortTitle: App Service (Java)
category: azure
agents: 
  - ubuntu
tags:
  - "build"
  - "deploy"
  - "azure"
  - "java"
  - "maven"
  - "spring"
---

## Variables & Secrets

| Type | Name | Description | 
|------|------|-------------|
| _Env_ | AZURE_WEBAPP_NAME | Application's name |
| _Env_ | JDK_VERSION | Java version (e.g. 1.8) |
| _Secrets_ | AZURE_WEBAPP_PUBLISH_PROFILE | Azure deployment credentials [(how to generate)](https://docs.microsoft.com/it-it/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)

## Pipeline

```yaml
jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Set up JDK 
      uses: actions/setup-java@v1
      with:
        java-version: ${{ env.JDK_VERSION}}

    - name: Build with Maven
      run: mvn -B package --file pom.xml
      working-directory: my-app-path
      
    - name: Azure WebApp
      uses: Azure/webapps-deploy@v2
      with:
        app-name: ${{ env.AZURE_WEBAPP_NAME }}
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
        package: my/target/*.jar
```
