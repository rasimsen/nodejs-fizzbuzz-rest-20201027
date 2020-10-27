const fizzBuzzService = require("./fizzbuzz-service");

const controllers = {
  validation: function (req, res) {
    fizzBuzzService.validationMethod(req, res, function (
      err,
      fizzBuzzLogicResponse
    ) {
      if (err) {
        res.send(err);
      }
      res.json(fizzBuzzLogicResponse);
    });
  },
};

module.exports = controllers;
