var expect = require('chai').expect;

describe("A spec (with setup and tear-down)", function() {
  it("is just a function, so it can contain any code", function() {
    expect(1).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(1).toEqual(1);
    expect(true).toEqual(true);
  });

  
});