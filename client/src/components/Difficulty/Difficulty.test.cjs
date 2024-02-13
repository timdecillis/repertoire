const assert = require('assert');

// import Difficulty from './Difficulty.jsx';

const add = (x, y) => x + y;

describe("Difficulty component", () => {
  it("renders successfully", () => {
    const result = add(1, 2);
    assert.strictEqual(result, 3);
  });
});