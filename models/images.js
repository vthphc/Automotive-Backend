const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    carId: String,
    previewImage: String,
    images: [String]
}, { versionKey: false });

module.exports = mongoose.model('Image', imageSchema, 'images');