const { createPayment } = require('./paymentService');

const SUBSCRIPTION_PRICES = {
  'one-time': 10,
  'monthly': 30,
  'yearly': 300
};

/**
 * Subscribe a user to a plan
 * @param {string} userId 
 * @param {('one-time'|'monthly'|'yearly')} subscriptionType
 * @returns {Promise<PaymentResponse>}
 */
async function subscribeUser(userId, subscriptionType) {
  // Validate inputs
  if (!userId) throw new Error('userId is required');
  if (!subscriptionType) throw new Error('subscriptionType is required');
  if (!SUBSCRIPTION_PRICES[subscriptionType]) {
    throw new Error(`Invalid subscription type: ${subscriptionType}`);
  }

  const amount = SUBSCRIPTION_PRICES[subscriptionType];

  // Create payment with payment service
  const paymentResponse = await createPayment({
    userId,
    amount,
    currency: 'USD',
    description: `${subscriptionType} subscription`
  });

  return paymentResponse;
}

module.exports = {
  subscribeUser,
  SUBSCRIPTION_PRICES
};
