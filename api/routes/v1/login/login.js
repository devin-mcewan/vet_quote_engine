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
    if (user) {
      res.json(user);
    } else (next(new Error("not a user")));

  } catch (err) {
    next(err);
  }
});

module.exports = router;
