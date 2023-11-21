const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const db = req.app.get("db");

    const { username, password } = req.body;

    if (!username) {
      next(new Error("you should provide a username"));
    }
    if (!password) {
      next(new Error("you should provide a password"));
    }
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
