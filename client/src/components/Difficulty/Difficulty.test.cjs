import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import Difficulty from "./Difficulty";

describe("Difficulty", () => {
  it("renders with the correct name", () => {
    const wrapper = mount(<Difficulty />);

    // expect(wrapper.text()).to.equal('Hello, John!');

    wrapper.unmount();
  });
});
