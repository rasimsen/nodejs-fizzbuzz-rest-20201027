const fizzBuzzLogic = require("./fizzbuzz-logic");

module.exports = {
  validationMethod: function (req, res, next) {
    console.log("in a service class");
    const clientVariable = req.params.number;
    console.log("clientVariable:" + clientVariable);
    const fizzBuzzLogicResponse = fizzBuzzLogic.validate(clientVariable);

    res.send({
      clientVariable,
      result: fizzBuzzLogicResponse,
    });
  },
};
