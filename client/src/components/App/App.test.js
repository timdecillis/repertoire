import React from 'react';
import { render } from '@testing-library/react';

import App from './App.js';

describe('App Component', () => {
  it('renders without errors', () => {
    render(<App />);
  });
});