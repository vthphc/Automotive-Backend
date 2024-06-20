const express = require('express');
const router = express.Router();
const Category = require('../models/categories.js');

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;