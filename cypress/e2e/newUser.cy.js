describe("App spec", () => {
  it("handles a new user correctly", () => {
    const { get, contains, visit, title, intercept, wait } = cy;
    // visit("localhost:3000");
    get("#email").type("thisnewuser@email.com");
    contains("input", "Log In").click();
    get("#password").type("asdfasdfasdf{enter}");
    get(".song").should("not.exist");

    contains("span", "+Add Song").click();

    get('input[value="drums"]').click();
    get('input[value="advanced"]').click();

    get(".search-input").type("Aerosmith{enter}");
    get(".choices").should("be.visible");

    intercept("POST", "/addSong").as("addSong");
    get(".choice").first().click();
  });
});
