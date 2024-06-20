const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fullName: String,
    phoneNumber: String,
    address: [String],
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema, 'users');