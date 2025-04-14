const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  e2e: {
    baseUrl: "https://csqa6sb1.help.sfdc.sh", // optional, for cleaner code
    experimentalStudio: true, // ✅ this enables Studio
    
  },
  env:{
        username:"User1234"
  }

  // viewportWidth:800,
  // viewportHeight:650,

  //"includeShadowDom":true
})