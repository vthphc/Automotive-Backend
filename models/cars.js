const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    mileage: Number,
    price: Number,
    description: String,
    images: String,
    categories: [String]
}, { versionKey: false });

module.exports = mongoose.model('Car', carSchema, 'cars');