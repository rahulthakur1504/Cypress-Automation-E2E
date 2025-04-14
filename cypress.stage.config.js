const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video : true,
  e2e: {
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    experimentalStudio: true
  },
  env: {
    username: "User1234"
  }
});
