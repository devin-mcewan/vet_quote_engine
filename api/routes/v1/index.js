const express = require("express");
const login = require("./login");
const services = require("./services");
const quotes = require("./quotes");
const quotes_services = require('./quotes_services')
const router = express.Router();


router.use("/login", login);
router.use("/services", services);
router.use("/quotes", quotes);
// router.use('/quotes_services', quotes_services)

module.exports = router;
