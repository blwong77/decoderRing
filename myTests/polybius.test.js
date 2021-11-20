//      1  2  3	  4	  5
// 1	A  B  C	  D	  E
// 2	F  G  H	  I/J K
// 3	L  M  N	  O	  P
// 4	Q  R  S	  T	  U
// 5	V  W  X	  Y	  Z

// assume only spaces and letters will be given
// takes an input and encode value polybius(input, encode)

// input refers to a string to be encoded or decoded
//   encoding refers to turning letters into numbers
//   decoding refers to turning numbers into letters
//     if number string.length is odd return false
// spaces should be maintained
// capital letters can be ignored and should be treated as lowercase
// the letters I/J occupy the same space (42) on the board
//   decoding 42 should return I/J

const expect = require("chai").expect;
const { polybius } = require("../src/polybius.js");
const encode = true;
const decode = false;


describe("Polybius Square", () => {
    describe("Error Handling", () => {
        it("should return false if decoding a odd length string", () => {
            let message = "123";
            const actual = polybius(message, decode);

            expect(actual).to.be.false;
        })
        it("should return false if when decoding there are numbers 6 in the string", () => {
            let message = "66";
            const actual = polybius(message, decode);

            expect(actual).to.be.false;
        })
        it("should return false if when decoding there are numbers 7 in the string", () => {
            let message = "77";
            const actual = polybius(message, decode);

            expect(actual).to.be.false;
        })
        it("should return false if when decoding there are numbers 8 in the string", () => {
            let message = "88";
            const actual = polybius(message, decode);

            expect(actual).to.be.false;
        })
        it("should return false if when decoding there are numbers 9 in the string", () => {
            let message = "99";
            const actual = polybius(message, decode);

            expect(actual).to.be.false;
        })
        it("should ignore capital letters and treat them as lowercase", () => {
            let message = "HELLO";
            const actual = polybius(message);
            const expected = polybius("hello");

            expect(actual).to.be.equal(expected);
        })
    })
    describe("Encoding", () => {
        it("should default to encoding if no argument is given", () => {
            let message = "encoding is fun";
            const actual = polybius(message);
            const expected = "5133314341423322 4234 125433";

            expect(actual).to.be.equal(expected);
        })
        it("should maintain spaces when encoding", () => {
            let message = "hello world";
            const acutal = polybius(message, encode);
            const expected = "3251131343 2543241341"

            expect(acutal).to.be.equal(expected);
        })
    })
    describe("Decoding", () => {
        it("should maintain spaces when decoding", () => {
            let message = "3251131343 2543241341";
            const actual = polybius(message, decode);

            expect(actual).to.be.equal("hello world")
        })
    })
})