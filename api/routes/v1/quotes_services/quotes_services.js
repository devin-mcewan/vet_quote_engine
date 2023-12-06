const express = require("express");
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const { id } = req.body
        const db = req.app.get('db');
        const quotes_services = await db.get_services_by_quote({id});
        res.json(quotes_services);
    } catch (err) {
        next(err)
    }
})

module.exports = router;
