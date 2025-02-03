const searchFunction = async (term, options = {}) => {
  if (!term) return [];
  
  // Mock implementation for testing
  return [{
    id: 1,
    title: 'Test result',
    content: 'This is a test result'
  }];
};

module.exports = {
  searchFunction
};
