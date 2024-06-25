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

router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.json(category);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;