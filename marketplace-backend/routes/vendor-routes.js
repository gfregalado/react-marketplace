const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Vendor = require("../models/vendor");

/* ===================================== Post New Vendor on the Database ===================================== */

router.post("/vendor", (req, res, next) => {
  const { name, email, countryCode, phoneNumber, accountName, iban, swift, bankAddress, bankCountry } = req.body;

  Vendor.create({
    name,
    contact: { email, countryCode, phoneNumber },
    payment: { accountName, iban, swift, bankAddress, bankCountry }
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

/* ===================================== Get All Vendors from the Database ===================================== */

router.get("/vendors", (req, res, next) => {
  Vendor.find()
    .sort({ name: 1 })
    .then(vendors => {
      // let userAuthenticated = req.session.currentUser ? true : false;
      res.json(vendors);
      // userAuthenticated
    })
    .catch(err => {
      res.json(err);
    });
});

/* ===================================== Get Specific Vendor from the Database ===================================== */

router.get("/vendors/:id", (req, res, next) => {
  console.log(req.params.id);
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Vendor.findById(req.params.id)

    .then(vendor => {
      res.status(200).json(vendor);
    })
    .catch(error => {
      res.json(error);
    });
});

module.exports = router;
