"use strict";

var express = require('express');
var subscriptionController = require('../controllers/subscriptionController');
var router = express.Router();

// Subscribe route - handle user subscription
router.post('/subscribe', subscriptionController.subscribeUser);
module.exports = router;