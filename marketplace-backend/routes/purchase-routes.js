const express = require("express");
const router = express.Router();

const Purchase = require("../models/purchase");

/* ===================================== Post New Purchase on the Database ===================================== */

router.post("/purchase", (req, res, next) => {
  const { productGroup, user, purchaseDate, quantity, cost, diet } = req.body;
  Purchase.create({
    productGroup,
    user,
    purchaseDate,
    quantity,
    cost,
    diet
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
