const express = require("express");
const login = require('./login');
const users = require('./users');

const router = express.Router();

router.use('/login', login);
router.use('/users', users);

module.exports = router;
