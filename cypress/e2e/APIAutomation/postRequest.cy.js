
import paylodData from '/Users/thakur.r/Documents/CypressAutomation/cypress/config/userDetails.json'
describe('Test Suite for Post request',function(){

    function generateEmail()
    {
        const randString= Math.random().toString(36).substring(2,10);
        const email = randString+"@yopmail.com";
        return email;

    }

    it('Test Name : Post request for Adding users',function(){
     let emailAddress = generateEmail();
     cy.log("***Email address : " +emailAddress )
     let payload ={
                "name": "NewUserDemo1",
                "email": emailAddress,
                "gender": "female",
                "status": "active"  
     }

     cy.request({
        method:"POST",
        url: "https://gorest.co.in/public/v2/users",

        headers :{
            authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'
        },

        body: payload

     }).then((Response)=>{
        expect(Response.status).to.equal(201)
        expect(Response.body).has.property("name", "NewUserDemo1")
        expect(Response.body).has.property("gender", "female")
        expect(Response.body).has.property("status", "active")
        expect(Response.body).to.not.to.be.null
     })

    })

    it('Test Name: Reading JSON from Fixture file',function(){
        cy.fixture('newUserCreation').then((responseObject)=>{
            responseObject.email=generateEmail()

            cy.request({
                method:"POST",
                url: "https://gorest.co.in/public/v2/users",
        
                headers :{
                    authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'
                },
        
                body: responseObject
        
             }).then((Response)=>{
                expect(Response.status).to.equal(201)
                expect(Response.body).has.property("name", "NewUserDemo1")
                expect(Response.body).has.property("gender", "female")
                expect(Response.body).has.property("status", "active")
                expect(Response.body).to.not.to.be.null
             })
        })
    })

    it('Test Name: Reading JSON from Config file',function(){
        paylodData.email=generateEmail()
        
            cy.request({
                method:"POST",
                url: "https://gorest.co.in/public/v2/users",
        
                headers :{
                    authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'
                },
        
                body: paylodData
        
             }).then((Response)=>{
                expect(Response.status).to.equal(201)
                expect(Response.body).has.property("name", "NewUserDemo1")
                expect(Response.body).has.property("gender", "female")
                expect(Response.body).has.property("status", "active")
                expect(Response.body).to.not.to.be.null

                let id=Response.body.id

                cy.request({
                    method:"GET",
                    url: "https://gorest.co.in/public/v2/users/" +id,
        
                headers :{
                    authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'
                },
                }).then((Response)=>{
                expect(Response.status).to.equal(200)
                expect(Response.body).has.property("name", "NewUserDemo1")
                expect(Response.body).has.property("gender", "female")
                expect(Response.body).has.property("status", "active")
                expect(Response.body).to.not.to.be.null
                })
             })
        
    })


    it('Test Name: Negative Case || Wrong Header',function(){
        paylodData.email=generateEmail()
        
            cy.request({
                method:"POST",
                url: "https://gorest.co.in/public/v2/users",
        
                headers :{
                    authorization:'Bearer '
                } , failOnStatusCode:false,
        
                body: paylodData
        
             }).then((Response)=>{
                expect(Response.status).to.equal(401)
             })
        
    })

    it('Test Name: Negative Case || Not Passing Email which is mandatory',function(){
        paylodData.email=null
        
            cy.request({
                method:"POST",
                url: "https://gorest.co.in/public/v2/users",
        
                headers :{
                    authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'
                } , failOnStatusCode:false,
        
                body: paylodData
        
             }).then((Response)=>{
                expect(Response.status).to.equal(422)
             })
        
    })

    it('Test Name: Negative Case || Duplicate Email ID ',function(){
        paylodData.email="test123@yopmail.com"
        
            cy.request({
                method:"POST",
                url: "https://gorest.co.in/public/v2/users",
        
                headers :{
                    authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'
                } , failOnStatusCode:false,
        
                body: paylodData
        
             }).then((Response)=>{
                expect(Response.status).to.equal(422)
             })
        
    })



})