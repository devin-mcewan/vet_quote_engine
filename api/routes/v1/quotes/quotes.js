const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const db = req.app.get("db");
    const quotes = await db.get_quotes();
    res.json(quotes);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const db = req.app.get("db");
    const { id } = req.params;
    console.log(id)
    const [quote] = await db.get_quote_by_id({ id });
    const quoteServices = await db.get_services_by_quote({id});
    res.json({...quote, quoteServices});
    // res.json(quoteServices);

  } catch (err) {
    next(err);
  }
});

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
