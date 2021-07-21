const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

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

// fire a function after the user has been saved to db
userSchema.post("save", function (doc, next) {
  console.log("A new user has been created", doc);
  next();
});

// fire a function before a user is saved to db
userSchema.pre("save", async function (next) {
  console.log("A user is about to be created and saved", this);

  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", userSchema);
