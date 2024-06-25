const express = require('express');
const router = express.Router();
const Address = require('../models/addresses.js');

router.get('/', async (req, res) => {
    if (req.query.ids) {
        const ids = req.query.ids.split(',');
        try {
            const addresses = await Address.find({ _id: { $in: ids } });
            res.json(addresses);
        } catch (err) {
            res.json({ message: err });
        }
    } else {
        try {
            const addresses = await Address.find();
            res.json(addresses);
        } catch (err) {
            res.json({ message: err });
        }
    }
});

router.get('/:addressId', async (req, res) => {
    try {
        const address = await Address.findById(req.params.addressId);
        res.json(address);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;