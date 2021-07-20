module.exports.signup_get = (req, res) => {
  res.render("signup", { title: "Sign Up" });
};

module.exports.login_get = (req, res) => {
  res.render("login", { title: "Log In" });
};
