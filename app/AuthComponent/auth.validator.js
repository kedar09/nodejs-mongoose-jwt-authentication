const yup = require("yup");
const authController = require("./auth.controller");

exports.loginUser = async function (req, res) {
  const data = req.body;
  try {
    const schema = yup.object({
      email: yup
        .string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "in"] },
        })
        .required(),
      password: yup.string().min(3).max(50).required(),
    });
    await schema.validate(data);
    authController.loginUser(req, res);
  } catch (e) {
    console.log(e.message);
    res.status(400).send({ error: "Bad Request", message: e.message });
  }
};

exports.registerUser = async function (req, res) {
  const data = req.body;
  try {
    const schema = yup.object({
      email: yup
        .string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "in"] },
        })
        .required(),
      password: yup.string().min(3).max(50).required(),
      phoneNumber: yup.number(),
      displayName: yup.string().min(3).max(50),
    });
    await schema.validate(data);
    authController.registerUser(req, res);
  } catch (e) {
    console.log(e.message);
    res.status(400).send({ error: "Bad Request", message: e.message });
  }
};

exports.resetPasswordLink = async function (req, res) {
  const data = req.body;
  const schema = yup.object({
    email: yup
      .string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
  });
  const { error } = await schema.validate(data);
  if (error) {
    res.status(400).send({ error: error.details[0].message });
  } else {
    authController.resetPasswordLink(req, res);
  }
};

exports.updateUserPassword = async function (req, res) {
  const data = req.body;
  const schema = yup.object({
    // userId: Joi.number().integer().min(0).max(1000).required(),
    password: yup.string().min(7).max(50).required(),
  });
  const { error } = await schema.validate(data);
  if (error) {
    res.status(400).send({ error: error.details[0].message });
  } else {
    authController.updateUserPassword(req, res);
  }
};
