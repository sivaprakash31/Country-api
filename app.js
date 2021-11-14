require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser')
require('./config/database');
const app = express();

const countryRoutesV1 = require('./routes/v1/country');
const userRoutes = require('./routes/user');
const apiKeyRoutes = require('./routes/api');

app.use(express.json());
app.use(cookieParser());

app.get('/api/v1/testing', (req, res) => {
    res.send('Server is up and running');    
});

app.use('/api/v1/', countryRoutesV1);
app.use('/api/user', userRoutes);
app.use('/api/key', apiKeyRoutes);

module.exports = app;