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
        required: true
    },
    email: String,
    fullName: String,
    phoneNumber: String,
    addresses: [String],
    wishlistId: String,
}, { versionKey: false });

userSchema.pre('save', async function (next) {
    console.log('Pre-save middleware triggered');
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashedPassword = await bcrypt.hashSync(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (error) {
        console.error('Error hashing password:', error);
        return next(error);
    }
});

module.exports = mongoose.model('User', userSchema, 'users');