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

router.get('/:id', async (req, res) => {
    try {
        const wishlist = await Wishlist.findById(req.params.id);
        res.json(wishlist);
    } catch (err) {
        res.json({ message: err });
    }
});

//Add new car to wishlist
router.put('/:id', async (req, res) => {
    try {
        const updatedWishlist = await Wishlist.updateOne(
            { _id: req.params.id },
            { $push: { cars: req.body.cars } }
        );
        res.json(updatedWishlist);
    } catch (err) {
        res.json({ message: err });
    }
});


router.put('/remove/:id', async (req, res) => {
    try {
        const updatedWishlist = await Wishlist.updateOne(
            { _id: req.params.id },
            { $pull: { cars: req.body.cars } }
        );
        res.json(updatedWishlist);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;