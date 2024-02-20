describe("App spec", () => {
  it("loads the home page", () => {
    const { get, contains, visit, title, intercept, wait } = cy;
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

    contains("span", "+Add Song").click();
    get(".dashboard");

    get('input[value="drums"]').click();
    get('input[value="advanced"]').click();
    get(".search-input").type("Van Halen{enter}");
    get(".choices").should("be.visible");

    intercept("POST", "/addSong").as("addSong");
    get(".choice").first().click();
    // wait("@addSong").then((interception) => {
    //   let song = interception.request.body.song;
    //   let newSong = get("div").contains(song);
    //   newSong.get(".song-name-check").should("not.exist");
    //   newSong.click();
    //   contains("button", "Delete").click();
    //   contains("div", song).should("not.exist");
    // });
    const firstSong = get(".song").first();
    firstSong.get(".song-name-check").should("exist");
    firstSong.click();
    // firstSong.get("button").contains("Mark Uncompleted").click();
    // firstSong.get("button").contains("Back").click();
    // firstSong.get("div").contains(".song-name-check").should("not.exist");

    // firstSong.get(".song-name-content").first().click();
    // firstSong.get("button").contains("Mark Completed").click();
    // firstSong.get("button").contains("Back").click();
    // firstSong.get(".song-name-check").should("exist");
  });
});
