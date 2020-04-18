"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment-timezone");

const purchaseSchema = new mongoose.Schema({
  productGroup: { type: Schema.Types.ObjectId, ref: "ProductGroduct" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  purchaseDate: {
    type: String,
    trim: true,
    default: moment()
      .tz("London")
      .format("MMMM Do YYYY, h:mm:ss a")
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
    default: 1
  },
  cost: {
    type: Number,
    required: true,
    trim: true
  },
  diet: {
    type: String,
    required: true,
    trim: true
  }
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
