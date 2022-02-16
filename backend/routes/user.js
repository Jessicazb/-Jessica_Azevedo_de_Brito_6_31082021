const express = require('express');
const router = express.Router();
const validatePassword = require ('../middleware/password');

const userCtrl = require('../controllers/user');

router.post('/signup', validatePassword, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;