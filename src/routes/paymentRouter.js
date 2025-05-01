const express = require('express');
const { createOrder, verifyOrder, paypalCreateOrder, paypalPaymentCancel, paypalPaymentSuccess, stripeCreateOrder } = require('../controllers/paymentController');
const { authenticate } = require('../middlewares/auth-middleware');

const router = express.Router();

router.post('/razorpay/createPayment', createOrder);
router.post('/razorpay/verifyPayment', verifyOrder);

router.post('/stripe/createPayment', stripeCreateOrder);
router.post('/stripe/verifyPayment', verifyOrder);

router.get('/paypal/createPayment', authenticate, paypalCreateOrder);
router.get('/paypal/success', authenticate, paypalPaymentSuccess);
router.get('/paypal/cancel', authenticate, paypalPaymentCancel);

module.exports = router;