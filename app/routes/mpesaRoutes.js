const express = require('express');
const router = express.Router();

const mpesa = require('../controllers/mpesaController');

//lipa na mpesa online (trigger payment processing to safaricom)
router.post('/pay', mpesa.lipaNaMpesa);

//lipa na mpesa online callback (save payment results to database)
router.post('/mpesa_callback', mpesa.lipaNaMpesaCallback);

//get all payments
router.get('/payments', mpesa.getAllPayments);

//get payment by id
router.get('/payments/:id', mpesa.getOnePayment);


module.exports = router;