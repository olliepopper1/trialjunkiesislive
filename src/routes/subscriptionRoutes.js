
const express = require('express');
const subscriptionController = require('../controllers/subscriptionController');
const router = express.Router();

// Subscribe route - handle user subscription
router.post('/subscribe', subscriptionController.subscribeUser);

module.exports = router;