require('dotenv').config();
const express = require('express');
const { processPayment } = require('../controllers/stripeController');

const router = express.Router();

router.post('/payment', processPayment);

module.exports = router;