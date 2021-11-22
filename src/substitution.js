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
    if (!alphabet) return false;
    const outputArr = [];
    const cipher = buildCipher(alphabet.toLowerCase(), encode);
    if (!cipher) return false;
    for (let char of input.toLowerCase()) {
      if (char === " " || !cipher[char]) outputArr.push(char);
      outputArr.push(cipher[char]);
    }
    return outputArr.join("");
  }

  // builds the substitution cipher when given an alphabet
  // should return false if a white space is passed in the alphabet
  // returns an object with keys of cipher alphabet and values of std alphabet
  function buildCipher(alphabet, encode) {
    if (
      !alphabet ||
      alphabet.length !== 26 ||
      alphabet.includes(" ") ||
      new Set(alphabet).size !== 26
    )
      return false;
    let asciiKey = 97;
    const cipher = {};

    for (let char of alphabet) {
      if (encode) {
        cipher[String.fromCharCode(asciiKey)] = char;
      } else {
        cipher[char] = String.fromCharCode(asciiKey);
      }
      asciiKey++;
    }
    return cipher;
  }
  return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
