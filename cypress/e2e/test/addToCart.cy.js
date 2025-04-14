import { homPage } from "../../pages/homePage";
 const homepageObj= new homPage()

 import loginData from '../../fixtures/lastuserregisterdata.json';
import productDetails from '../../fixtures/addToCartData.json';


 describe("Test Suite : Login with User Details and Adding product to Cart",function(){

    before(function () {
        cy.logintoApp(loginData.email, loginData.password);
      });
      
      

it ('Test Name : add product to cart',function(){
    homepageObj.searchProduct(productDetails.product.productName)
    homepageObj.productAddToCart()
    homepageObj.confirmSuccessMessage().should('contain', productDetails.success.successMessage)

})



 })