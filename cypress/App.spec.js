describe('Repertoire App', () => {
  it('should load the home page', () => {
    cy.visit('http://localhost:3000');
    cy.get('div.className').should('contain', 'container');
  });

  // it('should navigate to a different page', () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get('a[href="/about"]').click();
  //   cy.url().should('include', '/about');
  // });
});