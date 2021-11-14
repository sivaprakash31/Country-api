const express = require('express');
const { 
    newApiKey, 
    updateApiKey,
    getApiKey
} = require('../controller/api');
const {
    isSignedIn
} = require('../middleware/auth');
const router = express.Router();

router.post('/', isSignedIn, newApiKey);

router.put('/:ApiKey', isSignedIn, updateApiKey);

router.get('/', isSignedIn, getApiKey);

module.exports = router;