const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/me', async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

router.put('/addresses', async (req, res) => {
    const { addressId, userId } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { $push: { addresses: addressId } },
            { new: true, useFindAndModify: false });

        res.json(user);

    } catch (err) {
        res.json({ message: err });
    }
});

router.put('/orders', async (req, res) => {
    const { userId, orderId } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { $push: { orderIds: orderId } },
            { new: true, useFindAndModify: false });

        res.json(user);

    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;