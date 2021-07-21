const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  // handle if email already exists
  if (err.code === 11000) {
    errors.email = "That email has already been registered";
    return errors;
  }
};

module.exports.signup_get = (req, res) => {
  res.render("signup", { title: "Sign Up" });
};

module.exports.signup_post = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const user = await User.create({ email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_get = (req, res) => {
  res.render("login", { title: "Log In" });
};
