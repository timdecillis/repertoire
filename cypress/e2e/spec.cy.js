import App from '../../client/src/components/App/App.jsx';

describe('App spec', () => {
  it('loads the home page', () => {
    cy.visit('https://localhost:3000');
  });
});