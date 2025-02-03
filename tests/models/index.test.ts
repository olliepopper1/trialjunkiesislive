import { Model } from '../../src/models';

describe('Models', () => {
  test('should create valid Model instance', () => {
    const model = new Model('test');
    expect(model).toHaveProperty('id');
    expect(model).toHaveProperty('name', 'test');
    expect(model).toHaveProperty('createdAt');
    expect(model).toHaveProperty('updatedAt');
    expect(typeof model.getData).toBe('function');
  });

  test('getData should return correct object structure', () => {
    const model = new Model('test');
    const data = model.getData();
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('name', 'test');
    expect(data).toHaveProperty('createdAt');
    expect(data).toHaveProperty('updatedAt');
  });
});
