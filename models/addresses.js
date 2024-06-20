const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    userId: String,
    addressLine: String,
    city: String,
    country: String,
}, { versionKey: false });

module.exports = mongoose.model('Address', addressSchema, 'addresses');