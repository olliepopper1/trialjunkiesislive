# API Documentation

## Endpoints

### GET /api/example
- Description: Example endpoint
- Response: `200 OK`

### POST /api/example
- Description: Example POST endpoint
- Request Body: `{ "example": "data" }`
- Response: `201 Created`

## External API Integrations

### Montero Payments API
- **Endpoint**: `https://api.montero.com/v1/payments`
- **Required Headers**:
  - `Authorization`: `Bearer <MONTERO_API_KEY>`
  - `Content-Type`: `application/json`
- **Request Body**:
  ```json
  {
    "amount": 100,
    "currency": "USD",
    "subscription_type": "monthly",
    "user_id": "user123"
  }
  ```
- **Reference**: [Montero API Documentation](https://montero.com/docs) (if available)

### Monero Payments API
- **Endpoint**: `https://api.moneropayments.com/v1/payments`
- **Required Headers**:
  - `Authorization`: `Bearer <MONERO_PAYMENTS_API_KEY>`
  - `Content-Type`: `application/json`

### Striga API for Virtual Card Creation
- **Endpoint**: `https://api.striga.com/v1/cards`
- **Required Headers**:
  - `Authorization`: `Bearer <STRIGA_API_KEY>`
  - `Content-Type`: `application/json`
- **Request Body**:
  ```json
  {
    "user_id": "user123",
    "cardholder_name": "John Doe",
    "card_type": "virtual",
    "currency": "USD",
    "spending_limit": 5000
  }
  ```
- **Reference**: [Striga API Documentation](https://striga.com/api/card-issuing)

### Twilio API for SMS Verification
- **Endpoint**: `https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Messages.json`
- **Required Headers**:
  - `Authorization`: `Basic <Base64(AccountSid:AuthToken)>`
  - `Content-Type`: `application/x-www-form-urlencoded`
- **Request Body**:
  ```json
  {
    "To": "+1234567890",
    "From": "+0987654321",
    "Body": "Your verification code is 123456"
  }
  ```
- **Reference**: [Twilio API Documentation](https://www.twilio.com/docs/usage/api)

### Email Generator API (Texta/Quackr)
- **Endpoint**: `https://api.texta.ai/v1/email-generator`
- **Required Headers**:
  - `Authorization`: `Bearer <TEXTA_API_KEY>`
  - `Content-Type`: `application/json`
- **Reference**: [Texta Email Generator Documentation](https://texta.ai/ai-tools/free-ai-email-address-generator)

## Environment Variables Setup
Ensure the following environment variables are set in your `.env` file:
```
MONTERO_API_KEY=your_montero_api_key
MONERO_PAYMENTS_API_KEY=your_monero_payments_api_key
STRIGA_API_KEY=your_striga_api_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
TEXTA_API_KEY=your_texta_api_key
```

## Troubleshooting Tips
- **Invalid API Key**: Ensure your API keys are correctly set in the environment variables.
- **Network Issues**: Check your network connection and API endpoint URLs.
- **Error Responses**: Log error messages for detailed information and refer to the respective API documentation for troubleshooting.

## Sample Request/Response Formats
- **Montero Payments API**:
  - **Request**:
    ```json
    {
      "amount": 100,
      "currency": "USD",
      "subscription_type": "monthly",
      "user_id": "user123"
    }
    ```
  - **Response**:
    ```json
    {
      "id": "payment123",
      "status": "success",
      "amount": 100,
      "currency": "USD"
    }
    ```

- **Monero Payments API**:
  - **Request**:
    ```json
    {
      "amount": 100,
      "currency": "USD",
      "subscription_type": "monthly",
      "user_id": "user123"
    }
    ```

- **Striga API**:
  - **Request**:
    ```json
    {
      "user_id": "user123",
      "cardholder_name": "John Doe",
      "card_type": "virtual",
      "currency": "USD",
      "spending_limit": 5000
    }
    ```
  - **Response**:
    ```json
    {
      "card_id": "card123",
      "status": "active",
      "card_type": "virtual"
    }
    ```

- **Twilio API**:
  - **Request**:
    ```json
    {
      "To": "+1234567890",
      "From": "+0987654321",
      "Body": "Your verification code is 123456"
    }
    ```
  - **Response**:
    ```json
    {
      "sid": "SM1234567890",
      "status": "sent"
    }
    ```

- **Email Generator API**:
  - **Request**:
    ```json
    {}
    ```
  - **Response**:
    ```json
    {
      "email": "temp123@texta.ai",
      "mailbox_id": "mailbox123"
    }
    ```