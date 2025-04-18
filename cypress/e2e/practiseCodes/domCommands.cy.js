describe('Dom Commands Test Suite',function(){

    it('Command such as get and Select first',function(){
        cy.visit('https://naveenautomationlabs.com/opencart/');
        cy.get('.image').first().click();
        cy.log("Clicked on first element")

    })
    it('Command such as get and Select Last',function(){
        cy.visit('https://naveenautomationlabs.com/opencart/');
        cy.get('.image').last().should('be.visible').click();
        cy.log("Clicked on Last element")

    })

    it('Command to Select based on Index',function(){
        cy.visit('https://naveenautomationlabs.com/opencart/');
        cy.get('.image').eq(2).should('be.visible').click();
        cy.log("Clicked on based on Index")

    })

    it('Command to click using contains',function(){
        cy.visit('https://naveenautomationlabs.com/opencart/');
        cy.get('.image').contains('Apple Cinema 30"').should('be.visible').click();
        cy.log("Clicked by using contains- on Apple cinema ")

    })
})