module.exports = {
  validate: function (variable) {
    const FIZZBUZZ = "FizzBuzz";

    if (variable % 15 === 0) {
      return FIZZBUZZ;
    } else if (variable % 3 === 0) {
      return "Fizz";
    } else if (variable % 5 === 0) {
      return "Buzz";
    }

    return variable + "";
  },
};
