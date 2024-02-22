describe("App spec", () => {
  it("handles a new user correctly", () => {
    const { get, contains, visit, title, intercept, wait } = cy;
    visit("localhost:3000");
    get("#email").type("newuser@email.com");
    contains("input", "Log In").click();
    get("#password").type("asdfasdfasdf{enter}");
    get(".song").should("not.exist");

    contains("span", "+Add Song").click();
    // get('input[value="guitar"]').click();
    // get('input[value="beginner"]').click();
    // get(".search-input").type("Aerosmith{enter}");
    // get(".choice").first().click();
    get('input[value="drums"]').click();
    get('input[value="advanced"]').click();
    get(".search-input").type("Van Halen{enter}");
    get(".choices").should("be.visible");

    intercept("POST", "/addSong").as("addSong");
    get(".choice").first().click();
  });
});
