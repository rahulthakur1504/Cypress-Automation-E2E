export class newUserRegister {
    weblocators ={

        firstName : '#input-firstname',
        lastName: '#input-lastname',
        email : '#input-email',
        telephone : '#input-telephone',
        password :'#input-password',
        confirmPassword: '#input-confirm',
        wantsToSubscribe :'input[type="radio"]',
        policycheckbox:'input[type="checkbox"]',
        submitBtn: 'input[type="submit"]'


    }

    //Methods

    openURL()
    {
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(Fname)
        {
            cy.get(this.weblocators.firstName).type(Fname)

        }
        enterlastName(lName)
        {
            cy.get(this.weblocators.lastName).type(lName)

        }
        enterPhone(phoneNum)
        {
            cy.get(this.weblocators.telephone).type(phoneNum)

        }
        enterEmail(emailId)
        {
            cy.get(this.weblocators.email).type(emailId)

        }
        enterPswd(pswd)
        {
            cy.get(this.weblocators.password).type(pswd)
            cy.get(this.weblocators.confirmPassword).type(pswd)

        }
        selectcheckBox()
        {
            cy.get(this.weblocators.policycheckbox).check();
        }

        submitform()
        {
            cy.get(this.weblocators.submitBtn).click();
        }
    
}