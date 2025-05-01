const express = require('express');
const { getCredits, removeCredits } = require('../controllers/creditsController');
const { authenticate } = require('../middlewares/auth-middleware');

const router = express.Router();

router.post('/', authenticate, removeCredits);
router.get('/:id', authenticate, getCredits);

module.exports = router;