const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const db = req.app.get("db");
        const services = await db.get_services();
        res.json(services);
    } catch (err){
        next(err)
    }
});

module.exports = router;