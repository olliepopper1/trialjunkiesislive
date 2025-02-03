import { Model } from '../../src/models';

describe('Models', () => {
  test('should export Model interface', () => {
    const testModel: Model = {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    expect(testModel).toBeDefined();
    expect(testModel.id).toBeDefined();
  });
});
