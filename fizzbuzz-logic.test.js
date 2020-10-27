const fizzBuzzLogic = require("./fizzbuzz-logic");

describe("FizzBuzz Problem Tests", () => {
  //   it("Red Phase-error first", () => {
  //     expect(fizzBuzzLogic.validate(1)).toBe("1");
  //   });

  it("Fizz Test", () => {
    expect(fizzBuzzLogic.validate(3)).toBe("Fizz");
    expect(fizzBuzzLogic.validate(9)).toBe("Fizz");
    expect(fizzBuzzLogic.validate(21)).toBe("Fizz");
  });

  it("Buzz Test", () => {
    expect(fizzBuzzLogic.validate(5)).toBe("Buzz");
    expect(fizzBuzzLogic.validate(25)).toBe("Buzz");
    expect(fizzBuzzLogic.validate(10000)).toBe("Buzz");
  });

  it("FizzBuzz Test", () => {
    expect(fizzBuzzLogic.validate(15)).toBe("FizzBuzz");
    expect(fizzBuzzLogic.validate(90000)).toBe("FizzBuzz");
    expect(fizzBuzzLogic.validate(630000)).toBe("FizzBuzz");
  });

  it("Other numbers Test", () => {
    expect(fizzBuzzLogic.validate(2)).toBe("2");
    expect(fizzBuzzLogic.validate(7)).toBe("7");
    expect(fizzBuzzLogic.validate(11)).toBe("11");
  });
});
