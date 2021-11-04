const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    let doesRepeat = /(.).*\1/.test(alphabet);
    if (doesRepeat) return false;
    
    let subCipher = alphabet.split('');
    let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    function encoder(subCipher, alph) {
      let result = '';
      let lowerCaseInput = input.toLowerCase();
      for (let i = 0; i < lowerCaseInput.length; i++) {
        let char = lowerCaseInput[i];
        if (char.match(/[^ ]/)) {
          let elemIndex = alph.indexOf(char);
          result += subCipher[elemIndex];
        } else {
          result += char;
        }
      }
      return result
    }
    if (encode) {
      let message = encoder(subCipher, alph);
      return message
    } else {
      let message = encoder(alph, subCipher);
      return message
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution};
