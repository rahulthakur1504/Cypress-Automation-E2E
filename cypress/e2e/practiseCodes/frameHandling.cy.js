describe('suite : handling Frames',function(){

    it('Test 1 : enter Text in Textbox present in iframe',function(){
        cy.visit('https://www.hyrtutorials.com/p/basic-controls.html');

        const iframes= cy.get('#frm2')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframes.find('#firstName').type("Iframe Identify")
    })
})