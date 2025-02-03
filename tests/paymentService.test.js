const PaymentService = require('../services/PaymentService');

describe('PaymentService', () => {
  describe('createPayment', () => {
    it('should create a payment successfully', async () => {
      const paymentData = { amount: 100, currency: 'USD' };
      const result = await PaymentService.createPayment(paymentData);
      expect(result).toHaveProperty('id');
      expect(result.amount).toBe(paymentData.amount);
    });

    it('should throw an error if payment data is invalid', async () => {
      const paymentData = { amount: -100, currency: 'USD' };
      await expect(PaymentService.createPayment(paymentData)).rejects.toThrow('Invalid payment data');
    });
  });
});
