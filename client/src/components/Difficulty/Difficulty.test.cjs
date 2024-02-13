import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Difficulty from './Difficulty';

describe('Difficulty', () => {
  it('renders with the correct name', () => {
    const wrapper = mount(<Difficulty name="John" />);

    // Using Chai to make assertions on the rendered component
    expect(wrapper.text()).to.equal('Hello, John!');

    // Optional: Clean up after the test to avoid memory leaks
    wrapper.unmount();
  });

  // Add more tests for different scenarios or behaviors of MyComponent
});
