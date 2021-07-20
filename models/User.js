const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email."],
    lowercase: true,
    unique: true,
    validate: [isEmail, "Please enter a valid email address."],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [6, "Password must be atleast 6 characters long."],
  },
});

module.exports = mongoose.model("User", userSchema);
