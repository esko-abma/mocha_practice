var MyClass = require("../src/myClass");
var myObj = new MyClass();
var assert = require("assert");

describe("Test Suit", function () {
  it("Testing the add method", function () {
    let [actual, expected] = [myObj.add(1, 2), 3];
    assert.deepEqual(actual, expected, "Add method testing failed");
  });
  it("Testing the subtract method", function () {
    let [actual, expected] = [myObj.subtract(2, 1), 1];
    assert.deepEqual(actual, expected, "Add method testing failed");
  });
});