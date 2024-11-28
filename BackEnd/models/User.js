// backend/models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    profilePicture: { type: String, required: true },  // URL to profile picture
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
