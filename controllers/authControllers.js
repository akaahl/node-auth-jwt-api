const User = require("../models/User");

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
    console.log(err);
  }
};

module.exports.login_get = (req, res) => {
  res.render("login", { title: "Log In" });
};
