const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    method: String
}, { versionKey: false });

module.exports = mongoose.model('Payment', paymentSchema, 'payments');