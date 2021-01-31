const User = require("../../models/user.model");

const jwt = require("jsonwebtoken");
const JWTPrivateKey = require("../../config/JWTPrivateKey");
const bcrypt = require("bcrypt");

exports.registerUser = function (req, result) {
  User.create(req.body, function (error, resultOfQuery) {
    if (error) {
      result(error, null);
    } else {
      let payloadData = {
        email: req.body.email,
        userId: resultOfQuery._id,
      };
      //   console.log(resultOfQuery);
      let token = jwt.sign({ payloadData }, JWTPrivateKey.privateKey, {
        expiresIn: "1d",
      });
      let resultRegisterUser = {
        message: "User register successfully",
        token: token,
        displayName: resultOfQuery.displayName,
        userId: resultOfQuery._id,
      };
      result(null, resultRegisterUser);
    }
  });
};

exports.resetPasswordLink = function (req, result, userId) {
  let payload = {
    email: req.body.email,
  };

  let token = jwt.sign({ payload }, JWTPrivateKey.privateKey, {
    expiresIn: "1d",
  });
  resetPassworSendMailLink(req, token, result, userId);
};

async function resetPassworSendMailLink(req, token, result, userId) {
  let transporter = nodemailer.createTransport({
    service: nodemailerDetails.service,
    auth: {
      user: nodemailerDetails.user, // generated ethereal user
      pass: nodemailerDetails.pass, // generated ethereal password
    },
  });

  try {
    // send mail with defined transport object
    await transporter.sendMail({
      from: nodemailerDetails.user, // sender mail id
      to: req.body.email, // Receiver mail id
      subject: "Reset Password Link", // Subject of mail
      text: `Reset Password Link 'http://localhost:3000/set-new-password?${token}?${userId}`, // text body
    });

    let resultResetPasswordLink = {
      message: "Reset password link send!",
      userId: userId,
    };
    result(null, resultResetPasswordLink);
  } catch (e) {
    console.log(e);
    let resultResetPasswordLink = { message: "Something went wrong!" };
    result(null, resultResetPasswordLink);
  }
}

exports.findUpdateUserPassword = function (req, result) {
  let password = (req.body.password = bcrypt.hashSync(req.body.password, 10));
  User.findByIdAndUpdate(
    req.body.userId,
    { password: password },
    function (error, resultOfQuery) {
      if (error) {
        console.log(error);
        result(error, null);
      } else {
        if (resultOfQuery === null) {
          let resultUpdateUserPassword = { message: "User not found!" };
          result(null, resultUpdateUserPassword);
        } else {
          let resultUpdateUserPassword = {
            message: "Password Updated Successfully!",
          };
          result(null, resultUpdateUserPassword);
        }
      }
    }
  );
};
