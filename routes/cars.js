const express = require('express');
const router = express.Router();
const Car = require('../models/cars.js');

router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;