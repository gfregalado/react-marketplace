"use strict";

const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  startDate: {
    type: String,
    required: true,
    trim: true
  },
  endDate: {
    type: String,
    required: true,
    trim: true
  },
  programType: {
    type: String,
    required: true,
    trim: true
  },
  itinerary: {
    month1: {
      type: String,
      trim: true
    },
    month2: {
      type: String,
      trim: true
    },
    month3: {
      type: String,
      trim: true
    },
    month4: {
      type: String,
      trim: true
    },
    month5: {
      type: String,
      trim: true
    },
    month6: {
      type: String,
      trim: true
    },
    month7: {
      type: String,
      trim: true
    },
    month8: {
      type: String,
      trim: true
    },
    month9: {
      type: String,
      trim: true
    },
    month10: {
      type: String,
      trim: true
    },
    month11: {
      type: String,
      trim: true
    },
    month12: {
      type: String,
      trim: true
    }
  }
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
