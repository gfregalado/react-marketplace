"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: String,
    required: true,
    trim: true
  },
  slackChannel: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 200
  },
  highlights: {
    highlight1: {
      type: String,
      required: true,
      trim: true,
      maxlenght: 30
    },
    highlight2: {
      type: String,
      required: true,
      trim: true,
      maxlenght: 30
    },
    highlight3: {
      type: String,
      required: true,
      trim: true,
      maxlenght: 30
    }
  },
  disclaimer: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 30
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  meetingPoint: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 30
  },
  host: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 200
  },
  downloadURLs: [],
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
    trim: true,
    min: 0
  },
  type: {
    type: String,
    trim: true,
    required: true,
    enum: ["Track", "Experience", "Sidetrip", "Amenitie"]
  },
  price: {
    type: Number,
    trim: true,
    required: true,
    min: 0
  },
  vendor: { type: Schema.Types.ObjectId, ref: "Vendor" },
  comments: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      comment: {
        type: String,
        trim: true
      },
      rate: {
        type: Number,
        trim: true
      }
    }
  ]
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
