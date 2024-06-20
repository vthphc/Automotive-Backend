const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: String,
    orderDate: Date,
    status: String,
    cars: [String],
    paymentId: String,
    total: Number,
    paymentDate: Date,
}, { versionKey: false });

module.exports = mongoose.model('Order', orderSchema, 'orders');