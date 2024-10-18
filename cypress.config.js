const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://165.227.93.41/lojinha-web/v2',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
