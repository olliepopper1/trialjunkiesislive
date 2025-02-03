# My Node API

## Description

This is a Node.js API project using Express, Mongoose, and TypeScript.

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file based on the `.env.example` file
4. Run `npm run dev` to start the development server

## Scripts

- `npm start`: Start the server
- `npm run dev`: Start the server with nodemon
- `npm test`: Run tests with Jest

## Environment Variables

- `DATABASE_URL`: Your MongoDB connection string
- `MONERO_PAYMENTS_API_KEY`: Your Monero Payments API key
- `JWT_SECRET`: Your JWT secret for authentication

## Project Setup

### Initialize React Project

To initialize a new React project in the `client` directory, run the following command:

```sh
npx create-react-app client
```

## Deployment Guide

### Running the Backend

To run the backend server, use the following command:

```sh
node src/server.js
```

### Starting the React App

To start the React application, navigate to the `client` directory and run:

```sh
cd client && npm start
```

### Configuring Production Environment Variables

Ensure you set up the following environment variables in your production environment:

- `DATABASE_URL`: Your MongoDB connection string
- `MONERO_PAYMENTS_API_KEY`: Your Monero Payments API key
- `STRIGA_API_KEY`: Your Striga API key
- `TWILIO_ACCOUNT_SID`: Your Twilio Account SID
- `TWILIO_AUTH_TOKEN`: Your Twilio Auth Token
- `JWT_SECRET`: Your JWT secret for authentication

### Deploying via GitHub Actions

To deploy the project using GitHub Actions, create a workflow file in `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Build project
      run: npm run build

    - name: Deploy to server
      run: |
        scp -r . user@your-server:/path/to/deploy
        ssh user@your-server 'cd /path/to/deploy && npm install && pm2 restart all'
```

### Deploying via Docker

To deploy the project using Docker, follow these steps:

1. Build the Docker image:

    ```sh
    docker build -t my-node-api .
    ```

2. Run the Docker container:

    ```sh
    docker run -d -p 3000:3000 --env-file .env my-node-api
    ```

## Additional Resources

For more information on creating a VSCode Notebook Renderer with React, you can refer to this [GitHub sample project](https://github.com/microsoft/vscode-extension-samples/tree/main/notebook-renderer-react-sample).

## External API Integrations

### Monero Payments API

- **Endpoint**: `https://api.moneropayments.com/v1/payments`
- **Required headers**:
  - `Authorization`: Bearer token
  - `Content-Type`: application/json
- **Request body**:

  ```json
  {
    "amount": "number",
    "currency": "string",
    "subscription_type": "string",
    "user_id": "string"
  }
  ```

- **Documentation**: [Monero Payments API](https://moneropayments.com/docs)

### Striga API for Virtual Card Creation

- **Endpoint**: `https://api.striga.com/v1/cards`
- **Required headers and request format**: Refer to their documentation.
- **Documentation**: [Striga API](https://striga.com/api/card-issuing)

### Twilio API for SMS Verification

- **Endpoint**: `https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Messages.json`
- **Authentication**: Using Account SID and Auth Token.
- **Documentation**: [Twilio API](https://www.twilio.com/docs/usage/api)

### Email Generator API (Texta/Quackr)

- **Documentation**: [Texta AI Email Generator](https://texta.ai/ai-tools/free-ai-email-address-generator)

## Environment Variables for API Keys and Tokens

Ensure you set up the following environment variables in your `.env` file:

- `MONERO_PAYMENTS_API_KEY`: Your Monero Payments API key
- `STRIGA_API_KEY`: Your Striga API key
- `TWILIO_ACCOUNT_SID`: Your Twilio Account SID
- `TWILIO_AUTH_TOKEN`: Your Twilio Auth Token

## Committing Changes

To commit all changes, use the following commit message:

```git
Initial project setup and configuration

- Add development environment configuration (.env, .eslintrc, .prettierrc)
- Setup GitHub Actions workflows for CI/CD
- Initialize client application with React TypeScript
- Update project documentation

This commit establishes the foundational structure and tooling for the project.
```

To commit, run:

```bash
git commit -m "Initial project setup and configuration

- Add development environment configuration (.env, .eslintrc, .prettierrc)
- Setup GitHub Actions workflows for CI/CD
- Initialize client application with React TypeScript
- Update project documentation

This commit establishes the foundational structure and tooling for the project."
```

## Troubleshooting Tips

- Ensure all required environment variables are set correctly.
- Check the API documentation for the correct request format and required headers.
- Use tools like Postman to test API endpoints and verify responses.

## Known Issues and Areas for Future Improvement

1. **External API Integrations**:
   - Ensure all API integrations are tested in a sandbox environment before going live.
   - Improve error handling to provide more meaningful log information.

2. **Error Handling**:
   - Review and enhance error handling across all functions to ensure graceful degradation.

3. **Documentation**:
   - Add more detailed documentation for API endpoints and their expected responses.
   - Include examples of common error scenarios and how to handle them.

4. **Code Quality**:
   - Refactor code to improve readability and maintainability.
   - Implement additional unit tests to cover edge cases.

5. **Performance**:
   - Optimize performance for high-traffic scenarios.
   - Monitor and address any bottlenecks identified during load testing.

## 🚀 Power Features

TrialJunkies is a robust platform designed to revolutionize trial management and legal operations. Our system leverages cutting-edge technology to provide:

- **Real-time Case Tracking**: Monitor multiple cases simultaneously with live updates
- **AI-Powered Analytics**: Predictive analytics for case outcomes and resource allocation
- **Secure Document Management**: Enterprise-grade encryption for sensitive legal documents
- **Automated Workflows**: Streamlined processes for common legal procedures
- **Integration Capabilities**: Seamless connection with popular legal tools and databases
- **Custom Reporting**: Generate detailed insights and performance metrics

## 📊 Subscription Plans

Choose the plan that fits your practice:

### 🔷 Basic Tier - $49/month
- Up to 5 active cases
- Basic document management
- Standard support
- Core analytics features
- Single user license

### 🔶 Professional Tier - $99/month
- Up to 25 active cases
- Advanced document management
- Priority support
- Enhanced analytics
- 5 user licenses
- Custom workflow templates
- API access

### 💎 Enterprise Tier - $299/month
- Unlimited active cases
- Enterprise document management
- 24/7 dedicated support
- Advanced AI analytics
- Unlimited user licenses
- Custom integrations
- White-label options
- On-premise deployment available

### 🎯 Custom Solutions
Contact our sales team for tailored solutions including:
- Custom feature development
- Dedicated hosting
- Enhanced security measures
- Corporate training
- Volume licensing

All plans include:
- SSL encryption
- Daily backups
- Regular updates
- 99.9% uptime guarantee

*Prices listed are based on annual billing. Monthly billing available at slightly higher rates.

## 🤝 Partner Program

Join our partner program to receive:
- Commission on referrals
- Early access to new features
- Partner-exclusive training
- Co-marketing opportunities

Contact: partners@trialjunkies.com
