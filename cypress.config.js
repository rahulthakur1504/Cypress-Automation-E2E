const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config){
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  },

  // viewportWidth:800,
  // viewportHeight:650,

  

  "includeShadowDom":true,
  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});