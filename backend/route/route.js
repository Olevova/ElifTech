const express = require('express');
const router = express.Router();
const { getRestoranAndDish} = require('../controlers/controler');

router.get('/', getRestoranAndDish);
// router.post('/send-email', sendEmail);


module.exports = router