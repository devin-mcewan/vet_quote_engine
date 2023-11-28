const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const db = req.app.get("db");
    const {
      newQuote,
      selectedServices,
    } = req.body;

    const quote = await db.quotes.insert({
        newQuote,
        selectedServices
    });
    await db.quotes_services.insert(
      selectedServices.map((service) => ({
        service_id: service.id,
        quote_id: quote.id,
      }))
    );
    res.json(quote);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
