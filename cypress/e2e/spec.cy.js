describe("App spec", () => {
  it("loads the home page", () => {
    cy.visit("localhost:3000");
    cy.get(".container").should("be.visible");
    cy.get(".header").should("be.visible");
    cy.get(".banner").should("be.visible");
    cy.title().should('eq', 'Repertoire');

  });
});
