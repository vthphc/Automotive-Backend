const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLengeth: 8
    },
    email: String,
    fullName: String,
    phoneNumber: String,
    addresses: [String],
    wishlistId: String,
    orderIds: [String],
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema, 'users');