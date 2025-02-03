# API Documentation

## Available Integrations
- [Monero Payments](./monero.md)
- [Striga](./striga.md)
- [Twilio](./twilio.md)

## Environment Setup
Required environment variables:
```env
MONERO_PAYMENTS_API_KEY=
STRIGA_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
JWT_SECRET=
```

## Authentication
API requests require Bearer token authentication:
```
Authorization: Bearer <your-token>
```

## API Endpoints
Detailed documentation for each endpoint available in respective integration files.
