const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.json({ message: 'Welcome to Automotive API' });
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;