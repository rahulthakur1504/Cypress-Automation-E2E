describe('Test suite for Browser Navigation',function(){

    it('Test cases for browser navigation - backward and forward',function(){

        cy.visit('https://naveenautomationlabs.com/opencart/');
        cy.contains("Software").should('be.visible').click();
        cy.contains("There are no products to list in this category.").should('be.visible');
        cy.go("back");
        cy.log("navigating to back");
       // cy.get('img[title="naveenopencart"]').should('be.visible');
        cy.get('div').find('>a>img[title="naveenopencart"]').should('be.visible');
        cy.go("forward");
        cy.contains("There are no products to list in this category.").should('be.visible');


    })
})