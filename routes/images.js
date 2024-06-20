const express = require('express');
const router = express.Router();
const Image = require('../models/images.js');

router.get('/', async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;