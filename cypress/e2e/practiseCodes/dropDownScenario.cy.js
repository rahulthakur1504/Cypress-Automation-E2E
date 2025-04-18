describe.skip('Test suite for Drop down Testing', function () {

    beforeEach(() => {
        cy.on('uncaught:exception', () => false);
    });


    it('Select dropdown with Value AND Index',function(){
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
        cy.get('#select-demo').should('be.visible').select('Monday').should('have.value','Monday');
        cy.log("Selected by Value");
        cy.get('#select-demo').should('be.visible').select(4).should('have.value','Wednesday');
        cy.log("Selected by Index");

    })
});

describe('Test suite Suggestive Search Testing', function () {

    beforeEach(() => {
        cy.on('uncaught:exception', () => false);
    });


    it('Suggestive search No Select Tag is present',function(){
        cy.visit('https://www.amazon.com/');
        cy.get('input#twotabsearchtextbox').should('be.visible').type('Iphone 15');

        cy.get('.two-pane-results-container').contains('[aria-label]', 'iphone 15 pro case').click({ force: true });

       

    })
});
