import axios from 'axios';
import winston from 'winston';

const generateTemporaryEmail = async () => {
  try {
    const response = await axios.post(
      'https://api.texta.ai/v1/email/generate',
      {},
      {
        headers: {
          'Authorization': `Bearer ${process.env.TEXTA_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const email = response.data.email;
    winston.info('Temporary email generated successfully', { email });

    return email;

  } catch (error) {
    winston.error('Temporary email generation failed', {
      error: error.message,
      errorCode: error.response?.status
    });

    throw new Error(`Failed to generate temporary email: ${error.message}`);
  }
};

export default generateTemporaryEmail;
