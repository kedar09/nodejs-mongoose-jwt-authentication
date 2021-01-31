const authService = require("./auth.service");

exports.loginUser = function (req, res) {
  authService.loginUser(req, function (error, result) {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(result);
    }
  });
};

exports.registerUser = function (req, res) {
  authService.registerUser(req, function (error, result) {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(result);
    }
  });
};

exports.resetPasswordLink = function (req, res) {
  authService.resetPasswordLink(req, function (error, result) {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(result);
    }
  });
};

exports.updateUserPassword = function (req, res) {
  authService.updateUserPassword(req, function (error, result) {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(result);
    }
  });
};
