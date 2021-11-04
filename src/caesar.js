const caesarModule = (function () {

  function caesar(input, shift, encode = true) {    
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1;
    let lowerCaseInput = input.toLowerCase();
    let result = '';
    for (let i = 0; i < lowerCaseInput.length; i++){ 
      let char = lowerCaseInput[i];            
      if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {     
        let codedLetter = lowerCaseInput.charCodeAt(i) + shift;
        if (codedLetter > 122) {
          codedLetter -= 26;
        }        
        if (codedLetter < 97) {
          codedLetter += 26;
        }      
        let newCodedLetter = String.fromCharCode(codedLetter); 
        result += newCodedLetter;
      } else {
        result += char
      }
    }    
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
