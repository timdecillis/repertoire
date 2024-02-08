import React from 'react';
import { render } from '@testing-library/react';

import App from './App.jsx';

describe('App Component', () => {
  it('renders without errors', () => {
    render(<App />);
  });
  it('renders the header', () => {
    render(<App />);
    expect(document.getElementsByClassName('container')).toBeTruthy();
    expect(document.getElementsByClassName('banner')).toBeTruthy();
    expect(document.getElementsByClassName('header')).toBeTruthy();
  });
});