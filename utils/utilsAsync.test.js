const utils = require("./utils");
const expect = require("expect");

it("should async add two numbers", done => {
  utils.asyncAdd(4, 3, sum => {
    expect(sum)
      .toBe(7)
      .toBeA("number");
    done();
  });
});

it("should async square two numbers", done => {
  utils.asyncSquare(4, multi => {
    expect(multi)
      .toBe(16)
      .toBeA("number");
    done();
  });
});
