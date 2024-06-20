const express = require('express');
const router = express.Router();
const Payment = require('../models/payments.js');

router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;