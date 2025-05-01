const express = require('express');
const { signup, signin, googleSignIn, googleSignUp, deleteUser } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

router.post('/signin/google', googleSignIn);
router.post('/signup/google', googleSignUp);

router.delete('/:userId', deleteUser);

module.exports = router;