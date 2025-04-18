const { expect } = require("chai");
const { describe } = require("mocha");

describe ('my first test', function() {
    it ('test suite 1', function() {
        //Steps 

        cy.visit("https://csqa6sb1.help.sfdc.sh/s/")
        cy.title().should('eq','Salesforce Help | Home')
        //expect(true).to.equal(true)

    }) 


})