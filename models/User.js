const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    lowercase: true,
    unique: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
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

// static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = bcrypt.compare(password, user.password);
    console.log(password, user.password);

    if (auth) {
      return user;
    }

    throw Error("Incorrect password");
  }

  throw Error("Incorrect email");
};

module.exports = mongoose.model("User", userSchema);
