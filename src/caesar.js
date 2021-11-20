// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// caesar takes an input string, a shift value from -25 to 25
// ignores capital letters
// it wraps around the alphabet
// maintains spaces and other nonalpha symbols
// decoding just inverts the shift value

const caesarModule = (function () {
  
  function caesar(input, shift = 0, encode = true) {
    let lowerInput = input.toLowerCase().split("");
    let shiftValue = encode ? shift : shift *= -1;

    if(shiftValue === 0 || shiftValue > 25 || shiftValue < -25) return false;

    lowerInput = lowerInput.map((char) => {
      let asciiChar = char.charCodeAt();
      if(asciiChar >= 97 && asciiChar <= 122){
        asciiChar += shiftValue;
        if(asciiChar > 122) asciiChar -= 26;
        if(asciiChar < 97) asciiChar += 26;
      }
      return String.fromCharCode(asciiChar);
    })
    return lowerInput.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
