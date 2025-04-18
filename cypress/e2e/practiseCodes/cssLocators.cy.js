import 'cypress-shadow-dom';

describe('Interact with Agentforce input with shadow DOM login click', () => {
  Cypress.on('uncaught:exception', () => false); // Ignore app-side JS errors

  it('Clicks login button inside nested shadow DOM', () => {
    cy.visit('');
  
    cy.get('[search-hub="HTCommunity"]', { timeout: 10000 })
      .shadow()
      .find('hgf-c360login')
      .shadow()
      .find('hgf-button')
      .shadow()
      .find('button.hgf-button')
      .first()
      .click({ force: true });
  });
  
});
