const Joi = require("Joi");

const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().email().min(6).email(),
  password: Joi.string().min(6).required(),
});
