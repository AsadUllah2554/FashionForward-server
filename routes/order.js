const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');

const router = express.Router();

router.post('/create', createOrder);
router.get('/all', getOrders);

module.exports = router;
