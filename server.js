const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb+srv://thinphcv5:dSj5Z2sitHEySrCL@cluster0.u5rccyd.mongodb.net/automotive?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/cars', require('./routes/cars'));
app.use('/categories', require('./routes/categories'));
app.use('/images', require('./routes/images'));
app.use('/addresses', require('./routes/addresses'));
app.use('/users', require('./routes/users'));
app.use('/wishlists', require('./routes/wishlists'));
app.use('/payments', require('./routes/payments'));
app.use('/orders', require('./routes/orders'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});