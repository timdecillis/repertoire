const { defineConfig } = require("cypress");

module.exports = defineConfig({
  browsers: [{ name: "chrome" }],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
