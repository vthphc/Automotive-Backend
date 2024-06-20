const express = require('express');
const router = express.Router();
const Address = require('../models/addresses.js');

router.get('/', async (req, res) => {
    try {
        const addresses = await Address.find();
        res.json(addresses);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;