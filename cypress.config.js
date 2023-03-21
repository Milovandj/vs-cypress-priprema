const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cypress.vivifyscrum-stage.com",
    env: {
      apiUrl: "https://cypress-api.vivifyscrum-stage.com/api",
      testUserEmail: "milovandjuric996@gmail.com",
      testUserPassword: "junior96",
    },
  },
});
