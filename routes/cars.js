const express = require('express');
const router = express.Router();
const Car = require('../models/cars.js');
const Category = require('../models/categories.js');

router.get('/', async (req, res) => {
    if (req.query.ids) {
        const ids = req.query.ids.split(',');
        try {
            const cars = await Car.find({ _id: { $in: ids } });
            res.json(cars);
        } catch (err) {
            res.json({ message: err });
        }
    } else {
        try {
            const cars = await Car.find();
            res.json(cars);
        } catch (err) {
            res.json({ message: err });
        }
    }
});

router.get('/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.json(car);
    } catch (err) {
        res.json({ message: err });
    }
});


router.get('/exclude/:id', async (req, res) => {
    try {
        const excludeId = req.params.id;
        const cars = await Car.find({ _id: { $ne: excludeId } });
        res.json(cars);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;