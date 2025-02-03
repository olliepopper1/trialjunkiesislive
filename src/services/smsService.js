const axios = require('axios');

async function sendSMSVerification(phoneNumber, message) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

  const data = new URLSearchParams({
    To: phoneNumber,
    From: fromPhoneNumber,
    Body: message,
  });

  const auth = {
    username: accountSid,
    password: authToken,
  };

  try {
    const response = await axios.post(url, data, { auth });
    return response.data;
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
}

module.exports = { sendSMSVerification };
