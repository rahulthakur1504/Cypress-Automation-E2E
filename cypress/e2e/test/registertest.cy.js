import { newUserRegister } from "../../pages/registerPage"
import {generateUser}  from "../../support/Utils/generateUser"

const registerObj= new newUserRegister()

describe('Test Suite : Registeration Flow ',function(){
    const user = new generateUser()

it ('Test Name : Register Flow ', function(){
    registerObj.openURL()
    registerObj.enterFirstName(user.firstName)
    registerObj.enterlastName(user.lastName)
    registerObj.enterEmail(user.email)
    registerObj.enterPhone(user.phone)
    registerObj.enterPswd(user.password)
    registerObj.selectcheckBox()
    registerObj.submitform()


})


})