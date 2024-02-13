import { expect } from "chai";

const add = (x, y) => x + y;

describe("Add", () => {
  it("adds positive numbers", () => {
    const var1 = 5;
    const var2 = 4;
    const result = add(var1, var2);
    expect(result).to.equal(var1 + var2);
  });
});
