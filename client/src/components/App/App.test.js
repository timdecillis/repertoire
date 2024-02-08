import React from 'react';
import { render } from '@testing-library/react';

import App from './App.jsx';

describe('App Component', () => {
  it('includes the container, banner, and header', () => {
    render(<App />);
    expect(document.getElementsByClassName('container', 'banner', 'header')).toBeTruthy();
  });
});