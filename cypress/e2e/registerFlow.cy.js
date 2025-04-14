import { generateUser } from "../support/Utils/generateUser";
describe("New User Registeration Flow ", function () {

  it("Entering user details for user registration", function () {
    const user = generateUser(); // Method from utility 
    
    cy.writeFile("cypress/fixtures/lastuserregisterdata.json",user);
    cy.visit('');

    cy.get("#input-firstname").should('be.visible').type(user.firstName);
    cy.get("#input-lastname").should('be.visible').type(user.lastName);
    cy.get("#input-email").should('be.visible').type(user.email);
    cy.get("#input-telephone").should('be.visible').type(user.phone);
    cy.get("#input-password").should('be.visible').type(user.password);
    cy.get("#input-confirm").should('be.visible').type(user.password);

    cy.get('input[type="radio"]').should('be.visible').eq(1).check();
    cy.get('input[type="checkbox"]').should('be.visible').check();
    cy.get('input[type="submit"]').should('be.visible').click();
  });

});
