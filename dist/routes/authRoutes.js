"use strict";

var express = require('express');
var authController = require('../controllers/authController');
var router = express.Router();

// Register route - handle user registration
router.post('/register', authController.register);

// Login route - handle user authentication
router.post('/login', authController.login);
module.exports = router;