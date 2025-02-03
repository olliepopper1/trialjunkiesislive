const { subscribeUser: subscribe } = require('../services/subscriptionService');

const subscribeUser = async (req, res) => {
  try {
    // Validate request body
    const { userId, subscriptionType } = req.body;
    if (!userId || !subscriptionType) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: userId and subscriptionType'
      });
    }

    // Call subscription service
    const subscription = await subscribe(userId, subscriptionType);

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Subscription successful',
      data: subscription
    });

  } catch (error) {
    // Handle errors
    console.error('Subscription error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process subscription',
      error: error.message
    });
  }
};

module.exports = {
  subscribeUser
};
