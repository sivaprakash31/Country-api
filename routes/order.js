const express = require('express');
const { 
    createOrder
} = require('../controller/order');
const { isSignedIn } = require('../middleware/auth');
const router = express.Router();

router.post('/:apiId',isSignedIn, createOrder);

module.exports = router;