const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');

router.post('/login', controller.login);
router.get('/validate', controller.validateToken);

module.exports = router;
