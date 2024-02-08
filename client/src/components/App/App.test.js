import React from 'react';
import { render } from '@testing-library/react';

import App from './App.jsx';

describe('App Component', () => {
  it('renders without errors', () => {
    render(<App />);
  });
  it('renders the header', () => {
    render(<App />);
    expect(document.getElementsByClassName('container', 'banner', 'header')).toBeTruthy();
  });
});