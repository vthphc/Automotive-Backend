const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String
}, { versionKey: false });

module.exports = mongoose.model('Category', categorySchema, 'categories');