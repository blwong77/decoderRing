// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//   1	  2	  3	  4	  5
// 1	A	  B	  C	  D	  E
// 2	F	  G	  H	  I/J	K
// 3	L	  M	  N	  O	  P
// 4	Q	  R	  S	  T	  U
// 5	V	  W	  X	  Y	  Z

// assume only spaces and letters will be given

// input refers to a string to be encoded or decoded
//   encoding refers to turning letters into numbers
//   decoding refers to turning numbers into letters
//     if number string.length is odd return false
// spaces should be maintained
// capital letters can be ignored and should be treated as lowercase
// the letters I/J occupy the same space (42) on the board
//   decoding 42 should return I/J

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // create a polybius array = array with 5 arrays
  function polybius(input, encode = true) {
    const inputArr = input.toLowerCase().split("");
    const outputArr = [];
    const polyArr = [
      ,
      [,'a','f',  'l','q','v'],
      [,'b','g',  'm','r','w'],
      [,'c','h',  'n','s','x'],
      [,'d','i/j','o','t','y'],
      [,'e','k',  'p','u','z']];
    const polyObj = {
      1:{1:'a', 2:'f',   3:'l', 4:'q', 5:'v'},
      2:{1:'b', 2:'g',   3:'m', 4:'r', 5:'w'},
      3:{1:'c', 2:'h',   3:'n', 4:'s', 5:'x'},
      4:{1:'d', 2:'i/j', 3:'o', 4:'t', 5:'y'},
      5:{1:'e', 2:'k',   3:'p', 4:'u', 5:'z'}
  };
    
    
    if(encode){
      for(let first = 1; first < 6; first++){
        for(let second = 1; second < 6; second++){
          if(inputArr[0] === polyArr[first][second]){
            outputArr.push(`${first}${second}`);
            inputArr.shift();
            console.log(inputArr);
            console.log(outputArr);
          }
        }
      }
    }else{
        for(let word of input.split(" ")){
          if((word.length % 2) === 1) return false
          if(input.includes('6') || input.includes('7') || input.includes('8') || input.includes('9')) return false;
    }
  }
}
  console.log(polybius("Hello"))
  console.log(polybius("21 21", false));
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
