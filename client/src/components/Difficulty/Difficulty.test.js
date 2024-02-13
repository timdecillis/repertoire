const assert = require('assert');

import Difficulty from './Difficulty.jsx';

describe("Difficulty component", () => {
  it("renders successfully", () => {
    assert.doesNotThrow(() => {
      Difficulty.render();
    });
  });
});