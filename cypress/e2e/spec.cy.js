describe("App spec", () => {
  it("loads the home page", () => {
    const get = cy.get;
    cy.visit("localhost:3000");
    get(".container").should("be.visible");
    get(".header").should("be.visible");
    get(".banner").should("be.visible");
    cy.title().should("eq", "Repertoire");

    cy.contains("input", "Log In").click();
    get(".error");
    cy.contains("div", "Please enter your email");
    cy.get("#email").type("user@email.com");
  });
});
