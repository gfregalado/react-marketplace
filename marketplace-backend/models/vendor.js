// "use strict";

const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  contact: {
    email: {
      type: String,
      lowercase: true,
      trim: true
    },
    countryCode: {
      type: Number,
      required: true,
      trim: true
    },
    phoneNumber: {
      type: Number,
      required: true,
      trim: true
    }
  },
  payment: {
    accountName: {
      type: String,
      trim: true
    },
    iban: {
      type: String,
      trim: true
    },
    swift: {
      type: String,
      trim: true
    },
    bankAddress: {
      type: String,
      trim: true
    },
    bankCountry: {
      type: String,
      trim: true
    }
  }
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
