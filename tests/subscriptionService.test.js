
const SubscriptionService = require('../services/SubscriptionService');

describe('SubscriptionService', () => {
  describe('subscribeUser', () => {
    it('should subscribe a user successfully', async () => {
      const userData = { userId: 1, planId: 'basic' };
      const result = await SubscriptionService.subscribeUser(userData);
      expect(result).toHaveProperty('subscriptionId');
      expect(result.userId).toBe(userData.userId);
    });

    it('should throw an error if user data is invalid', async () => {
      const userData = { userId: null, planId: 'basic' };
      await expect(SubscriptionService.subscribeUser(userData)).rejects.toThrow('Invalid user data');
    });
  });
});