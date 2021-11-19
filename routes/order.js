const express = require('express');
const { 
    subscribe
} = require('../controller/order');
const { isSignedIn } = require('../middleware/auth');
const router = express.Router();

router.post('/:userId/:apiId',isSignedIn, subscribe);

module.exports = router;