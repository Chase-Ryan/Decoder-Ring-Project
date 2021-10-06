const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius()", () => {
  it("You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.", () => {
    let input = "Hello world";
    let expected = "3251131343 2543241341";
    let actual = polybius(input, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("When encoding, output should still be a string", () => {
    let input = "thinkful";
    let expected = "4432423352125413";
    let actual = polybius(input, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.", () => {
    let input = "44324233521254134";
    let actual = polybius(input, (encode = false));
    expect(actual).to.be.false;
  });
  it("Spaces should be maintained throughout.", () => {
    let input = "Hello world";
    let expected = "3251131343 2543241341";
    let actual = polybius(input, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("Capital letters can be ignored.", () => {
    let input = "Hello world";
    let expected = "3251131343 2543241341";
    let actual = polybius(input, (encode = true));
    expect(actual).to.equal(expected);
  });
  it('The letters "I" and "J" share a space. When encoding, both letters can be converted to 42', () => {
    let input = "ij";
    let expected = "4242";
    let actual = polybius(input, (encode = true));
    expect(actual).to.equal(expected);
  });
  it('The letters "I" and "J" share a space. When decoding, both letters should somehow be shown.', () => {
    let input = "4432423352125413";
    let expected = "th(i/j)nkful";
    let actual = polybius(input, (encode = false));
    expect(actual).to.equal(expected);
  });
});
