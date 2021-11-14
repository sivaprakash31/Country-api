const express = require('express');
const { 
    getAllCountries,
    getCountryByCountryCode,
    getCountries,
    getCountriesPagination
} = require('../../controller/v1/country');
const { isAuthorized } = require('../../middleware/auth');
const router = express.Router();

router.get('/country/all', isAuthorized, getAllCountries);

router.get('/country/:countryCode', isAuthorized, getCountryByCountryCode);

router.post('/country', isAuthorized, getCountries);

router.get('/country/', isAuthorized, getCountriesPagination);

module.exports = router;