const utils = require("./utils");
const expect = require("expect");
it("add 2 numbers", () => {
  let res = utils.add(1, 2);
  expect(res)
    .toBe(3)
    .toBeA("number");
});

it("multiply 2 values", () => {
  let num = 2;
  let res = utils.square(num);
  expect(res)
    .toBe(4)
    .toBeA("number");
});

it("expect some values", () => {
  //! It will be failed because two objects are not the same even the properties are the same
  // expect({ name: "Yoshi" }).toBe({ name: "Yoshi" });
  expect({ name: "Yoshi" }).toEqual({ name: "Yoshi" });
  // expect(12).toNotBe(11);
  // expect([2, 3, 4]).toExclude(1);
});

it("expect one of the properties of two objects are the same ", () => {
  expect({
    name: "Yoshi",
    age: 23
  }).toInclude({
    age: 23
  });
});

it("expect firstName and lastName would be Yoshinori and Fuji", () => {
  let obj = {
    location: "Japan",
    city: "Aizuwakamatsu"
  };
  let res = utils.setName(obj, "Yoshinori Fuji");
  expect(res).toInclude({
    firstName: "Yoshinori",
    lastName: "Fuji"
  });
});
