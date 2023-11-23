const express = require("express");
const login = require('./login');
const services = require('./services')
const router = express.Router();

router.use('/login', login);
router.use('/services', services);

module.exports = router;
