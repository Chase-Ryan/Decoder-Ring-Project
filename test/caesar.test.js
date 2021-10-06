const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe ("caesar()", () => {
    it ("should return false if shift value is not present", () => {
        let input = "thinkful";
        let shift = undefined;
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.be.false;
    });
    it ("should return false if shift value is equal to 0", () => {
        let input = "thinkful";
        let shift = 0;
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.be.false;
    });
    it ("should return false if shift value is less than -25", () => {
        let input = "thinkful";
        let shift = -26;
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.be.false;
    });
    it ("should return false if shift value is greater than 25", () => {
       let input = "thinkful";
        let shift = 26;
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.be.false;
    });
    it ("should have spaces maintained throughout, as should other non-alphabetic symbols", () => {
        let input = "thinkful ! @ #";
        let shift = 3;
        const expected = "wklqnixo ! @ #"; 
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.equal(expected);
    });
    it ("capital letters can be ignored", () => {
        let input = "THINKFUL";
        let shift = 3;
        const expected = "wklqnixo"; 
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.equal(expected);
    });
    it ("should decode message if encode is set to false", () => {
        let input = "wklqnixo";
        let shift = 3;
        const expected = "thinkful"; 
        const actual = caesar(input, shift, encode = false);
        expect(actual).to.equal(expected);
    });
    it ("If a letter is shifted so that it goes 'off' the end of the alphabet, it should wrap around to the front of the alphabet (e.g. 'z' becomes 'c').", () => {
        let input = "z";
        let shift = 3;
        const expected = "c"; 
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.equal(expected);
    });
    it ("If a letter is shifted so that it goes 'off' the front of the alphabet, it should wrap around to the front of the alphabet (e.g. 'c' becomes 'z').", () => {
        let input = "c";
        let shift = -3;
        const expected = "z"; 
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.equal(expected);
    });
})