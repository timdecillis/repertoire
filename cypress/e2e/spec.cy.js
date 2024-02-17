describe("App spec", () => {
  it("loads the home page", () => {
    const { get, contains, visit, title, intercept } = cy;
    visit("localhost:3000");
    get(".container").should("be.visible");
    get(".header").should("be.visible");
    get(".banner").should("be.visible");
    title().should("eq", "Repertoire");

    contains("input", "Log In").click();
    get(".error");
    contains("div", "Please enter your email");

    get("#email").type("user@email.com");
    contains("input", "Log In").click();
    contains("div", "Please enter your password");
    get("#email").clear();

    get("#password").type("asdfasdfasdf{enter}");
    contains("div", "Please enter your email");
    get("#password").clear();

    get("#email").type("user@email.com");
    get("#password").type("asdfasdfasdf{enter}");
    contains("div", "Songbook");

    contains("span", '+Add Song').click();
    get('.dashboard');

    get('input[value="drums"]').click();
    get('input[value="advanced"]').click();
    get(".search-input").type("Van Halen{enter}");
    intercept('GET', '/api/data').as('getData');
    get('.choice[key="1"]').should('be.visible').click();


  });
});
