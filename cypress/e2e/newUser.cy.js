describe("App spec", () => {
  it("handles a new user correctly", () => {
    const { get, contains, visit, title, intercept, wait } = cy;
    visit("localhost:3000");
    get("#email").type("newuser@email.com");
    contains("input", "Log In").click();

  });
});
