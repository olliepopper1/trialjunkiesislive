const axios = require('axios');
const winston = require('winston');

// Configure winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

const MONTERO_API_KEY = process.env.MONTERO_API_KEY;
const MONTERO_API_URL = 'https://api.montero.com/v1/payments';

async function createPayment({ amount, currency, subscriptionType, userId }) {
  try {
    // Validate required fields
    if (!amount || !currency || !subscriptionType || !userId) {
      throw new Error('Missing required payment parameters');
    }

    // Make API request
    const response = await axios.post(
      MONTERO_API_URL,
      {
        amount,
        currency,
        subscription_type: subscriptionType,
        user_id: userId
      },
      {
        headers: {
          'Authorization': `Bearer ${MONTERO_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    logger.info('Payment created successfully', {
      userId,
      amount,
      currency,
      paymentId: response.data.id // Log payment ID
    });

    return response.data;

  } catch (error) {
    logger.error('Payment creation failed', {
      error: error.message,
      userId,
      amount
    });
    throw error;
  }
}

async function refundPayment({ paymentId, amount, userId }) {
  try {
    // Validate required fields
    if (!paymentId || !amount || !userId) {
      throw new Error('Missing required refund parameters');
    }

    // Make API request
    const response = await axios.post(
      `${MONTERO_API_URL}/${paymentId}/refund`,
      {
        amount
      },
      {
        headers: {
          'Authorization': `Bearer ${MONTERO_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    logger.info('Payment refunded successfully', {
      userId,
      paymentId,
      amount
    });

    return response.data;

  } catch (error) {
    logger.error('Payment refund failed', {
      error: error.message,
      userId,
      paymentId,
      amount
    });
    throw error;
  }
}

module.exports = {
  createPayment,
  refundPayment
};
