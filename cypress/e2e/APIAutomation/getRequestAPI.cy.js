describe('Test Suite for Get Request',function(){

    it('Test Name : Get All the user',function(){

        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                authorization:"Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669"
            }

        })
        .then((Response)=>{
            cy.log(JSON.stringify(Response))
            expect(Response.status).to.equal(200)

        })

       
    })

    it('Test Name : Get the specific User details',function(){
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users/7836792",
            headers:{
                authorization:"0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669"
            }
        }) .then((Response)=>{
            cy.log(JSON.stringify(Response))
            expect(Response.status).to.equal(200)
            expect(Response.body.id).to.equal(7836792)
        })

    })

    it('Test Name : Invalid Scenario 404',function(){

        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/7836792",

            headers:{
                 authorization:"0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669"
            } , failOnStatusCode:false
        }).then((Response)=>{
            cy.log(JSON.stringify(Response))
            expect(Response.status).to.equal(404)
        })
    })
})