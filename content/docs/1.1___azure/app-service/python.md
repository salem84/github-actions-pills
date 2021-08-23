---
title: Azure App Service (Python)
shortTitle: App Service (Python)
category: azure
agents: 
  - ubuntu
tags:
  - "build"
  - "deploy"
  - "azure"
  - "python"
---

## Variables & Secrets

| Type | Name | Description | 
|------|------|-------------|
| _Env_ | AZURE_WEBAPP_NAME | Application's name |
| _Env_ | AZURE_WEBAPP_PACKAGE_PATH | Path to web app project, defaults to the repository root |
| _Env_ | PYTHON_VERSION | Python version to use (e.g. 3.x) |
| _Secrets_ | AZURE_WEBAPP_PUBLISH_PROFILE | Azure deployment credentials [how to generate](https://docs.microsoft.com/it-it/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)

## Pipeline

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2

    - name: Set up Python 
      uses: actions/setup-python@v2
      with:
        python-version: ${{ env.PYTHON_VERSION }}

    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt

    - name: Building web app
      uses: azure/appservice-build@v2

    - name: Deploy web App using GH Action azure/webapps-deploy
      uses: azure/webapps-deploy@v2
      with:
        app-name: ${{ env.AZURE_WEBAPP_NAME }}
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
        package: ${{ env.AZURE_WEBAPP_PACKAGE_PATH }}
```
