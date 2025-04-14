export class homPage
{
    weblocators = {
        searchInput : 'input[name="search"]',
        serchBtn : '.input-group-btn',
        addToCart : 'button[onclick*="cart.add"]',
        successMessage : '.alert.alert-success.alert-dismissible'

    }

    searchProduct(productName)
    {
        cy.get(this.weblocators.searchInput).type(productName)
        cy.get(this.weblocators.serchBtn).click()

    }

    productAddToCart()
    {
        cy.get(this.weblocators.addToCart).first().click();
    }

    confirmSuccessMessage()
    {
        return cy.get(this.weblocators.successMessage)
    }

}