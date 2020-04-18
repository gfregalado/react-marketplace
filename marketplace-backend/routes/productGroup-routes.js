const express = require("express");
const router = express.Router();

const ProductGroup = require("../models/productgroup");
const Product = require("../models/product");
const Group = require("../models/group");

/* ===================================== Post New Product/Group on the Database ===================================== */

router.post("/productgroup", (req, res, next) => {
  const { product, group, date, time, quantity, type } = req.body;
  ProductGroup.create({
    product,
    group,
    date,
    time,
    quantity,
    type
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

/* ===================================== Get Product/Groups with tag Experiences from the Database ===================================== */

// router.get("/experiences", (req, res, next) => {
//   ProductGroup.find({ type: "experiences" })
//     .populate("product group")
//     .sort({ date: 1 })
//     .limit(3)
//     .then(experiences => {
//       // let userAuthenticated = req.session.currentUser ? true : false;
//       res.json(experiences);
//       // userAuthenticated
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// /* ===================================== Get Product/Groups with tag Experiences from the Database ===================================== */

// router.get("/sidetrips", (req, res, next) => {
//   ProductGroup.find({ type: "sidetrips" })
//     .populate("product group")
//     .sort({ date: 1 })
//     .limit(3)
//     .then(sidetrips => {
//       // let userAuthenticated = req.session.currentUser ? true : false;
//       res.json(sidetrips);
//       // userAuthenticated
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// module.exports = router;

// /* ===================================== Get Product/Groups with tag Amenities from the Database ===================================== */

// router.get("/amenities", (req, res, next) => {
//   ProductGroup.find({ type: "amenities" })
//     .populate("product group")
//     .sort({ date: 1 })
//     .limit(3)
//     .then(amenities => {
//       // let userAuthenticated = req.session.currentUser ? true : false;
//       res.json(amenities);
//       // userAuthenticated
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

module.exports = router;
