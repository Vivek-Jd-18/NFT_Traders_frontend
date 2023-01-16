const Joi = require("joi");

const validateAdmin = Joi.object({
  Email: Joi.string().max(50).email().required(),
  PassWord: Joi.string().min(8).required(),
});

module.exports = { validateAdmin };
