const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/product");
const Vendor = require("../models/vendor");

/* ===================================== Post New Product on the Database ===================================== */

router.post("/product", (req, res, next) => {
  const {
    name,
    city,
    duration,
    slackChannel,
    description,
    highlight1,
    highlight2,
    highlight3,
    disclaimer,
    location,
    meetingPoint,
    host,
    vendor,
    comment,
    user,
    rate,
    downloadURLs,
    date,
    time,
    quantity,
    type,
    price
  } = req.body;

  Product.create({
    name,
    city,
    duration,
    slackChannel,
    description,
    highlights: { highlight1, highlight2, highlight3 },
    disclaimer,
    location,
    meetingPoint,
    host,
    vendor,
    downloadURLs,
    date,
    time,
    quantity,
    type,
    price,
    comments: [{ user, comment, rate }]
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

/* ===================================== Get All Vendors from the Database ===================================== */

router.get("/products", (req, res, next) => {
  Product.find()
    .sort({ date: -1 })
    .then(products => {
      // let userAuthenticated = req.session.currentUser ? true : false;
      res.json(products);
      // userAuthenticated
    })
    .catch(err => {
      res.json(err);
    });
});

/* ===================================== Get Specific Product from the Database ===================================== */

router.get("/products/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Product.findById(req.params.id)
    .populate("Vendor")
    .then(product => {
      res.status(200).json(product);
    })
    .catch(error => {
      res.json(error);
    });
});

/* ===================================== Get Specific Products: Just Experiences from the Database ===================================== */

router.get("/experiences", (req, res, next) => {
  Product.find({ type: "Experience" })
    .sort({ date: -1 })
    .then(products => {
      // let userAuthenticated = req.session.currentUser ? true : false;
      res.json(products);
      // userAuthenticated
    })
    .catch(err => {
      res.json(err);
    });
});

/* ===================================== Get Specific Products: Just Tracks from the Database ===================================== */

router.get("/tracks", (req, res, next) => {
  Product.find({ type: "Track" })
    .sort({ date: -1 })
    .then(products => {
      // let userAuthenticated = req.session.currentUser ? true : false;
      res.json(products);
      // userAuthenticated
    })
    .catch(err => {
      res.json(err);
    });
});

/* ===================================== Get Specific Products: Just Side Trips from the Database ===================================== */

router.get("/sidetrips", (req, res, next) => {
  Product.find({ type: "Sidetrip" })
    .sort({ date: -1 })
    .then(products => {
      // let userAuthenticated = req.session.currentUser ? true : false;
      res.json(products);
      // userAuthenticated
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
