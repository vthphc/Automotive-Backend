const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    userId: String,
    cars: [String],
}, { versionKey: false });

module.exports = mongoose.model('Wishlist', wishlistSchema, 'wishlists');