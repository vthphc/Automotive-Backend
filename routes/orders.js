const express = require('express');
const router = express.Router();
const Order = require('../models/orders.js');

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;