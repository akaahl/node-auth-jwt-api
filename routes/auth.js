const router = require("express").Router();
const User = require("../models/User");
const Joi = require("Joi");

const schema = {
  name: Joi.string().min(6).required(),
  email: Joi.string().email().min(6).email(),
  password: Joi.string().min(6).required(),
};

router.post("/register", async (req, res) => {
  // validate user data

  const validation = schema.validate(req.body);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
