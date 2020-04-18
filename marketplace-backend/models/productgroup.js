"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//MISSING TO ADD THE DROPDOWN OPTIONS TO EVENT TYPES SO USERS CANT OVERRIDE IT//

const productGroupSchema = new mongoose.Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  group: { type: Schema.Types.ObjectId, ref: "Group" },
  date: {
    type: Date,
    required: true,
    trim: true
  },
  time: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    trim: true
  },
  type: {
    type: String,
    trim: true,
    required: true
  }
});

const ProductGroup = mongoose.model("ProductGroup", productGroupSchema);

module.exports = ProductGroup;
