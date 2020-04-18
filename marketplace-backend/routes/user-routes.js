const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Product = require("../models/product");

/* ===================================== Post New User on the Database ===================================== */

router.post("/user", (req, res, next) => {
  const { firstName, lastName, email, avatar, admin, uid, slackHandle, whatsapp, birthday, interests, group } = req.body;
  User.create({
    firstName,
    lastName,
    email,
    avatar,
    admin,
    uid,
    slackHandle,
    whatsapp,
    birthday,
    interests,
    group
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

/* ===================================== Post item in the cart & Get User ===================================== */

// router.post("/addtocart/:id", (req, res, next) => {
//   const product = req.params.id;
//   const { user } = req.body;
//   User.update({ uid: user }, { $push: { cart: { product } } })
//     .then(response => {
//       res.json(response);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// router.get("/user/:id", (req, res, next) => {
//   Product.find({ email: req.params.id })
//     .then(products => {
//       // let userAuthenticated = req.session.currentUser ? true : false;
//       res.json(products);
//       // userAuthenticated
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

module.exports = router;
