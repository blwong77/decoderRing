const expect = require("chai").expect
const {caesar} = require("../src/caesar.js")
const encode = true;
const decode = false;

describe("caesar()",() => {

    describe("error handling", () => {
        it("should return false if the shift amount is 0", () => {
          const message = "hello world";
          const shift = 0;
          const actual = caesar(message, shift, encode);
    
          expect(actual).to.be.false;
        });
        it("should return false if the shift amount is above 25", () => {
          const message = "hello world";
          const shift = 26;
          const actual = caesar(message, shift, encode);
    
          expect(actual).to.be.false;
        });
        it("should return false if shift amount is below -25", () => {
            const message = "random car battery";
            const shift = -26;
            const actual = caesar(message, shift, encode);
  
            expect(actual).to.be.false;
        })
        it("should return false if no shift is given", () => {
            const message = "raving rabbids";
            const actual = caesar(message);

            expect(actual).to.be.false;
        })
    })

    describe("Encoding", () => {
        it("should ignore capital letters", () => {
            const messageCap = "HELLOWORLD!";
            const messageLow = "helloworld!";
            const shift = 13;
            const actual = caesar(messageCap, shift, encode);
            const expected = caesar(messageLow, shift, encode);

            expect(actual).to.be.eql(expected);
        })
        it("should ignore special characters",() => {
            const message = "&*)$hello)(* worl@d*%";
            const shift = -22;
            const actual = caesar(message, shift, encode);
            const expected = "&*)$lipps)(* asvp@h*%";

            expect(actual).to.be.eql(expected);
        })
    })

    describe("Decoding",() => {
        it("should ignore capital letters",() => {
            const msgCap = "HELP ME!";
            const msgLow = "help me!";
            const shift = -5;
            const actual = caesar(msgCap, shift, decode);
            const expected = caesar(msgLow, shift, decode);

            expect(actual).to.be.eql(expected);
        })
        it("should ignore special characters",() => {
            const message = "&*)$lipps)(* asvph*%";
            const shift = -22;
            const actual = caesar(message, shift, decode);
            const expected = "&*)$hello)(* world*%";

            expect(actual).to.be.eql(expected);
        })
    })
})