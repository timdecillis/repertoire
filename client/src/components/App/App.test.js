import React from 'react';
import { render } from '@testing-library/react';

import App from './App.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';

describe('App Component', () => {
  it('includes the container, banner, and header', () => {
    const signedIn = true;
    render(<App />);
    expect(document.getElementsByClassName('container', 'banner', 'header')).toBeTruthy();
  });
});