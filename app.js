require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser')
require('./config/database');
require('./auto/cronjobs');
const app = express();

const countryRoutesV1 = require('./routes/v1/country');
const userRoutes = require('./routes/user');
const apiKeyRoutes = require('./routes/api');
const orderRoutes = require('./routes/order');

app.use(express.json());
app.use(cookieParser());

app.get('/api', (req, res) => {
    return res.send('Server is up and running');    
});

app.use('/api/v1/', countryRoutesV1);
app.use('/api/app/user', userRoutes);
app.use('/api/app/key', apiKeyRoutes);
app.use('/api/app/order', orderRoutes);

module.exports = app;