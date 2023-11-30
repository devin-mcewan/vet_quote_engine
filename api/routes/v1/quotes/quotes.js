const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const db = req.app.get("db");
    const { newQuote, selectedServices } = req.body;

    const quote = await db.quotes.insert(newQuote);

    await db.quotes_services.insert(
      selectedServices.map((service_id) => ({
        service_id,
        quote_id: quote.id,
      }))
    );
    res.json(quote);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
