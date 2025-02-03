import axios from 'axios';
import winston from 'winston';

const createVirtualCard = async (userId, cardType = 'virtual', currency = 'USD') => {
  try {
    const response = await axios.post(
      'https://api.striga.com/v1/cards',
      {
        user_id: userId,
        card_type: cardType,
        currency: currency,
        metadata: {
          created_at: new Date().toISOString()
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.STRIGA_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    winston.info('Virtual card created successfully', {
      userId,
      cardId: response.data.card_id
    });

    return response.data;

  } catch (error) {
    winston.error('Virtual card creation failed', {
      userId,
      error: error.message,
      errorCode: error.response?.status
    });

    throw new Error(`Failed to create virtual card: ${error.message}`);
  }
};

export default createVirtualCard;
