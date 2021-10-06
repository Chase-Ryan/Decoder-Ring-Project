// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {    
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false; //if statements if shift is not present, equal to 0, less than -25, or greater than 25    
    if (!encode) shift *= -1; //reverse shift if decoding   
    let lowerCaseInput = input.toLowerCase();  //turn input to toLowerCase
    let result = '';//empty string to store result   
    for (let i = 0; i < lowerCaseInput.length; i++){ //convert input to numbers with .charCodeAt
      let char = lowerCaseInput[i];            
      if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {//check to see if letter is in alphabet        
        let codedLetter = lowerCaseInput.charCodeAt(i) + shift;//shift the input using ascii code        
        if (codedLetter > 122) {//wrap letter around alphabet if it shifts over
          codedLetter -= 26;
        }        
        if (codedLetter < 97) {//wrap letter around alphabet if it shifts under
          codedLetter += 26;
        }      
        let newCodedLetter = String.fromCharCode(codedLetter); //get letter back from ascii char code
        result += newCodedLetter;
      } else {
        result += char
      }
    }    
    return result;//return encoded/decoded message
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
