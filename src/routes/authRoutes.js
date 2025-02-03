
const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// Register route - handle user registration
router.post('/register', authController.register);

// Login route - handle user authentication
router.post('/login', authController.login);

module.exports = router;