// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// input can include special characters
// spaces should be maintained
// capitals can be ignored
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const cipher = buildCipher(alphabet);
    console.log(Object.keys(cipher).length);
    if(!cipher || Object.keys(cipher).length !== 26) return false;
    for(let char of input){}
  }

  // builds the substitution cipher when given an alphabet
  // returns an object with keys of cipher alphabet and values of std alphabet
  function buildCipher(alphabet){
    if(!alphabet) return false;
    let asciiKey = 97;
    const cipher = {};

    for(let char of alphabet){
      cipher[char] = String.fromCharCode(asciiKey);
      asciiKey++;
    }
    return cipher;
  }

console.log(substitution("hello", "zxcvbnmasdfghjkl!@#tyuiopq"))
  return {
    substitution,
  };  
})();
module.exports = { substitution: substitutionModule.substitution };
