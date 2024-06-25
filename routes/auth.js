const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/users.js');

const router = express.Router();

const JWT_SECRET = 'your_jwt_secret_key';
const JWT_SECRET_REFRESH = 'your_jwt_secret_key_refresh';

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token.split(' ')[1], JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
};

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Username not found' });
        }

        user.password = bcrypt.hashSync(user.password, 10);
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        // const refreshToken = jwt.sign({ id: user._id }, JWT_SECRET_REFRESH, { expiresIn: '7d' });
        return res.json({ token });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

router.post('/profile', verifyToken, async (req, res) => {
    const { id } = req.user;

    try {
        const user = await User.findById(id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(user);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

module.exports = router;
