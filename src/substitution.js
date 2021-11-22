// input can include special characters
// spaces should be maintained
// capitals can be ignored
const substitutionModule = (function () {
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
