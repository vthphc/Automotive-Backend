const express = require('express');
const router = express.Router();
const Order = require('../models/orders.js');

router.get('/', async (req, res) => {
    if (req.query.ids) {
        const ids = req.query.ids.split(',');
        try {
            const orders = await Order.find({ _id: { $in: ids } });
            res.json(orders);
        } catch (err) {
            res.json({ message: err });
        }
    } else {
        try {
            const orders = await Order.find();
            res.json(orders);
        } catch (err) {
            res.json({ message: err });
        }
    }
});

router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.json(order);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const order = new Order({
        userId: req.body.userId,
        orderDate: req.body.orderDate,
        status: req.body.status,
        cars: req.body.cars,
        paymentId: req.body.paymentId,
        total: req.body.total,
        paymentDate: req.body.paymentDate
    });
    try {
        const savedOrder = await order.save();
        res.json(savedOrder);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;