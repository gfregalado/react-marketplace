"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  avatar: {
    type: String,
    trim: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  uid: {
    type: String,
    trim: true,
    required: true
  },
  slackHandle: {
    type: String,
    trim: true
  },
  whatsapp: {
    type: String,
    trim: true
  },
  birthday: {
    type: String,
    trim: true
  },
  interests: {
    type: String,
    trim: true
  },
  // // cart: [
  // //   {
  // //     type: mongoose.Schema.Types.ObjectId,
  // //     ref: "Product"
  // //   }
  // ],
  group: { type: Schema.Types.ObjectId, ref: "Group" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
