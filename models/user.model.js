const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
