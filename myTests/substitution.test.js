// Write your tests here!
const expect = require("chai").expect
const {substitution} = require("../src/substitution.js")
const encode = true;
const decode = false;

describe("substitution()", () => {
    describe("error handling", () => {
        it("should return false if alphabet isn't 26 characters long", () => {

        })
        it("should return false if any of the alphabet has repeated characters", () => {

        })
        it("should return false if not given an alphabet", () => {

        })
    })
    describe("encoding", () => {
        it("should maintain spaces", () => {

        })
        it("should ignore capital letters", () => {
            
        })
    })
    describe("decoding", () => {
        it("should maintain spaces", () => {

        })
        it("should ignore capital letters", () => {

        })
    })
})