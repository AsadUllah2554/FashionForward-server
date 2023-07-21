const Order = require('../models/orderModel');

const createOrder = async (req, res) => {
  const { user, products } = req.body;

  try {
    const order = await Order.create({ user, products });
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createOrder, getOrders };
