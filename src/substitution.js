// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    //check if alphabet is there and if is exactly 26 characters
    if (!alphabet || alphabet.length !== 26) return false;
    //test if alphabet repeats
    let doesRepeat = /(.).*\1/.test(alphabet);
    if (doesRepeat) return false;
    
    let subCipher = alphabet.split('');
    let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    function encoder(subCipher, alph) { //take two arrays and encodes one to the other
      let result = ''; //empty string to store encoded/decoded message
      let lowerCaseInput = input.toLowerCase(); //turn input toLowerCase
      for (let i = 0; i < lowerCaseInput.length; i++) {
        let char = lowerCaseInput[i];
        if (char.match(/[^ ]/)) {//testing if char is anything but a space, so it can use special characters
          let elemIndex = alph.indexOf(char);
          result += subCipher[elemIndex];//add letter with matching index
        } else {
          result += char;//return char if its a space
        }
      }
      return result
    }
    if (encode) {//encoding message
      let message = encoder(subCipher, alph);
      return message
    } else {//decoding
      let message = encoder(alph, subCipher);
      return message
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution};
