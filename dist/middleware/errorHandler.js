"use strict";

var errorHandler = function errorHandler(err, req, res, next) {
  // Log the error stack trace
  console.error('Error:', err.stack);

  // Send error response
  res.status(500).json({
    message: 'Something went wrong!'
  });
};
module.exports = errorHandler;