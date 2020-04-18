const express = require("express");
const router = express.Router();

const Group = require("../models/group");

/* ===================================== Post New Group on the Database ===================================== */

router.post("/group", (req, res, next) => {
  const {
    name,
    startDate,
    endDate,
    programType,
    month1,
    month2,
    month3,
    month4,
    month5,
    month6,
    month7,
    month8,
    month9,
    month10,
    month11,
    month12
  } = req.body;

  Group.create({
    name,
    startDate,
    endDate,
    programType,
    itinerary: {
      month1,
      month2,
      month3,
      month4,
      month5,
      month6,
      month7,
      month8,
      month9,
      month10,
      month11,
      month12
    }
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

/* ===================================== Get groups from the Database ===================================== */

router.get("/group", (req, res, next) => {
  Group.find()
    .then(groups => {
      // let userAuthenticated = req.session.currentUser ? true : false;
      res.json(groups);
      // userAuthenticated
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
