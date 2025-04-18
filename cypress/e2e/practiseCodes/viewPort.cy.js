describe ('Testing view port ',
    
//     {
//  viewportWidth:950,
//     viewportHeight:850
//         }, 
        function()

{
    Cypress.on('uncaught:exception', () => false);

    it('setting view port',function(){
       cy.viewport(990,750);
        cy.visit('https://www.amazon.in');
    })

    it('view port for mobile device',function(){
        cy.viewport('iphone-xr');
        cy.visit('https://www.amazon.in');
    })

    it('view port for Ipad device',function(){
        cy.viewport('ipad-2')
        cy.visit('https://www.amazon.in');
    })
})