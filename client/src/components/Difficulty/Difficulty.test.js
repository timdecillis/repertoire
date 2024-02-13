import { expect } from "chai";

const add = (x, y) => x + y;
const var1 = 5;
const var2 = 4;
const var3 = -30;

describe("Add", () => {
  it("adds positive numbers", () => {
    const result = add(var1, var2);
    expect(result).to.equal(var1 + var2);
  });
  it("adds negative numbers", () => {
    const result = add(var1, var3);
    expect(result).to.equal(var1 + var3);
  });
});
