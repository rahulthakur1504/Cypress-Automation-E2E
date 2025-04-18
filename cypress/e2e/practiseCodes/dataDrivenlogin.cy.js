import loginData from '../fixtures/lastuserregisterdata.json'
describe("Test suite for Data driven Testing",function(){

    it('Test cases : reading Data from Json File present Fixtures',function(){
        // Have already code running for generat Data from Utils -> From there writing back to json file 
        //1. Approach is we can Import the file directly at th tope by command : import loginData from '../fixtures/lastuserregisterdata.json'
        //2. Approach is to use cy.fixtures('login).then((value)=>{})
            //3> We can also write cy.fixtures in describe block 


        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
        cy.get('#input-email').should('be.visible').type(loginData.email);
        cy.get('#input-password').should('be.visible').type(loginData.password);
        cy.get('input[type="submit"]').should('be.visible').click();

    })

    it('Second Approach : where using Fixtures method',function(){
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
        cy.fixture('lastuserregisterdata').then((fixtureData)=>{

        cy.get('#input-email').should('be.visible').type(fixtureData.email);
        cy.get('#input-password').should('be.visible').type(fixtureData.password);
        cy.get('input[type="submit"]').should('be.visible').click();
            
        })
        
    })
})