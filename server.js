const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const databaseURL = process.env.DB_URL;
const corsOrigin = process.env.CORS_ORIGIN;

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: corsOrigin }));

app.options('*', cors({ origin: corsOrigin }));

mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/', require('./routes/index'));
app.use('/cars', require('./routes/cars'));
app.use('/categories', require('./routes/categories'));
app.use('/images', require('./routes/images'));
app.use('/addresses', require('./routes/addresses'));
app.use('/users', require('./routes/users'));
app.use('/wishlists', require('./routes/wishlists'));
app.use('/payments', require('./routes/payments'));
app.use('/orders', require('./routes/orders'));
app.use('/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});