const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe ("substitution()", () => {
    it ("The input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
        let input = 'y&ii$r&';
        let expected = 'message'; 
        let alphabet = '$wae&zrdxtfcygvuhbijnokmpl'
        let actual = substitution(input, alphabet, encode = false);
        expect(actual).to.equal(expected);
    });
    it ("Spaces should be maintained throughout.", () => {
        let input = 'You are an excellent spy';
        let expected = 'elp xhm xf mbymwwmfj dne';
        let alphabet = 'xoyqmcgrukswaflnthdjpzibev'
        let actual = substitution(input, alphabet, encode = true);
        expect(actual).to.equal(expected);
    });
    it ("Capital letters can be ignored.", () => {
        let input = 'Thinkful';
        let expected = 'jrufscpw';
        let alphabet = 'xoyqmcgrukswaflnthdjpzibev'
        let actual = substitution(input, alphabet, encode = true);
        expect(actual).to.equal(expected);
    });
    it ("The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.", () => {
        let input = 'thinkful';
        let alphabet = 'short';
        let actual = substitution(input, alphabet, encode = true);
        expect(actual).to.be.false;
    });
    it ("All the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
        let input = 'thinkful';
        let alphabet = 'abcabcabcabcabcabcabcabcyz';
        let actual = substitution(input, alphabet, encode = true);
        expect(actual).to.be.false;
    });
})