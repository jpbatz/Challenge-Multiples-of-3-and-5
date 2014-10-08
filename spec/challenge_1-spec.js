var challenge_1 = require("../challenge_1");    // Jasmine and Chai

// chai
var chai = require("chai");   // packages
var should = chai.should();   // 

describe("Sum of a Multiple", function() {

  it("should return '0' for n=0", function() {
      var sum = challenge_1.sumOfAMultiple(0);
      sum.should.be.equal(0);
  });

  it("should return '23' for n=10", function() {
      var sum = challenge_1.sumOfAMultiple(10);
      sum.should.be.equal(23);
  });

  it("should return '2318' for n=100", function() {
      var sum = challenge_1.sumOfAMultiple(100);
      sum.should.be.equal(2318);
  });

  it("should return '233168' for n=1000", function() {
      var sum = challenge_1.sumOfAMultiple(1000);
      sum.should.be.equal(233168);
  });

  it("should return '23331668' for n=10000", function() {
      var sum = challenge_1.sumOfAMultiple(10000);
      sum.should.be.equal(23331668);
  });

});  // end describe "Sum of a Multiple"



// Jasmine
/*
describe("Sum of a Multiple", function () {
  

  it("should return '23' for n=10", function () {
    var sum = challenge_1.sumOfAMultiple(10);
    expect(sum).toBe(23);
  });

  it("should return '2318' for n=100", function () {
    var sum = challenge_1.sumOfAMultiple(100);
    expect(sum).toBe(2318);
  });

  // when your tests pass, uncomment the next two and
  // change the expected value to your calculated result
  
  it("should return 'x' for n=1000 (see challenge_1-spec.js)", function () {
    var sum = challenge_1.sumOfAMultiple(1000);
    expect(sum).toBe(233168);
  });

  it("should return 'x' for n=10000 (see challenge_1-spec.js)", function () {
    var sum = challenge_1.sumOfAMultiple(10000);
    expect(sum).toBe(23331668); // you change this value to the correct sum!
  });
  
  
});
*/