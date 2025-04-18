describe('handling shadow DOM',function(){

    it('handling with writting shadow in code directly',function(){
        cy.visit('https://selectorshub.com/xpath-practice-page/');

      cy.get("#userName.jackPart")
        .shadow()
        .find('#app2')
        .shadow()
        .find('#pizza')
        .should('be.visible')
        .type("Shadow DOM identified")
    })
})