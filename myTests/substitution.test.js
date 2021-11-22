// Write your tests here!
const expect = require("chai").expect
const {substitution} = require("../src/substitution.js")
const encode = true;
const decode = false;

describe("substitution()", () => {
    describe("error handling", () => {
        it("should return false if alphabet isn't 26 characters long", () => {
            const message = "hello!"
            const alphabet = "qwertyuiopasdfghjklzxcvbn"; // 25
            const actual = substitution(message, alphabet, encode);

            expect(actual).to.be.false;
        })
        it("should return false if not given an alphabet", () => {
            const message = "hello!"
            const actual = substitution(message);

            expect(actual).to.be.false;
        })
        describe("repeated characters", () => {
            it("should return false, length is 26 and repeated characters", () => {
                const message = "hello!"
                const alphabet = "qwertyuiopasdfghjklzxcvmmb"; // 26, m is repeated
                const actual = substitution(message, alphabet, encode);
    
                expect(actual).to.be.false;
            })
            it("should return false, length is greater than 26 with repeated characters", () => {
                const message = "hello!"
                const alphabet = "qwertyuiopasdfghjklzxcvbnmmm"; // 26, m is repeated
                const actual = substitution(message, alphabet, encode);
    
                expect(actual).to.be.false;
            })
        })
    })
    describe("encoding", () => {
        it("should maintain spaces", () => {
            const message = "hello world!"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet, encode);
            const expected = "itssg vgksr!"

            expect(actual).to.be.equal(expected);
        })
        it("should ignore capital letters", () => {
            const message = "HELLO WORLD!"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet, encode);
            const expected = "itssg vgksr!"

            expect(actual).to.be.equal(expected);
        })
    })
    describe("decoding", () => {
        it("should maintain spaces", () => {
            const message = "itssg vgksr!"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet, decode);
            const expected = "hello world!"

            expect(actual).to.be.equal(expected);
        })
        it("should ignore capital letters", () => {
            const message = "ITSSG VGKSR!"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet, decode);
            const expected = "hello world!"

            expect(actual).to.be.equal(expected);
        })
    })
})