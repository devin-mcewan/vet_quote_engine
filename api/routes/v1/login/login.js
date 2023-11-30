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
    const [user] = await db.get_user_by_credentials({ username, password });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
