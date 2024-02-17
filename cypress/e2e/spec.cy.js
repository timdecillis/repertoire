describe("App spec", () => {
  it("loads the home page", () => {
    const get = cy.get;
    const contains = cy.contains;
    cy.visit("localhost:3000");
    get(".container").should("be.visible");
    get(".header").should("be.visible");
    get(".banner").should("be.visible");
    cy.title().should("eq", "Repertoire");

    contains("input", "Log In").click();
    get(".error");
    contains("div", "Please enter your email");

    get("#email").type("user@email.com");
    contains("input", "Log In").click();
    contains("div", "Please enter your password");

    get("#password").type("asdfasdfasdf{enter}");

    contains("div", "Songbook");
  });
});
