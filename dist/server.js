"use strict";

require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

// Initialize express app
var app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('Connected to MongoDB');
})["catch"](function (err) {
  return console.error('MongoDB connection error:', err);
});

// Base route
app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to the API'
  });
});

// Route mounting points (to be implemented)
// app.use('/api/auth', authRoutes);
// app.use('/api/subscriptions', subscriptionRoutes);

// Error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!'
  });
});

// Start server
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT));
});
module.exports = app;