const express = require("express");
const login = require("./login");
const services = require("./services");
const quotes = require("./quotes");
const router = express.Router();

router.use("/login", login);
router.use("/services", services);
router.use("/quotes", quotes);

module.exports = router;
