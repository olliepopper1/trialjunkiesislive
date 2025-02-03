const { expect } = require('chai');
const { searchFunction } = require('../src/search.cjs');

describe('Search Functionality Tests', () => {
  it('should return results for valid search terms', async () => {
    const results = await searchFunction('test term');
    expect(results).to.be.an('array');
  });

  it('should handle empty search terms', async () => {
    const results = await searchFunction('');
    expect(results).to.be.an('array');
    expect(results).to.have.lengthOf(0);
  });
});
