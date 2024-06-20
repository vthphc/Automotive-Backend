const express = require('express');
const router = express.Router();
const Wishlist = require('../models/wishlists.js');

router.get('/', async (req, res) => {
    try {
        const wishlists = await Wishlist.find();
        res.json(wishlists);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;