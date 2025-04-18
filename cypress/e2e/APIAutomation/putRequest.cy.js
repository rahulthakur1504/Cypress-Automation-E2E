import payload from '../../config/updatedUser.json'
import postData from '../../config/userDetails.json'

describe('Test Suite: Put Reuqtes',function(){


    it.skip('Test Name: Put Request on Existing data',function(){

        cy.request({

            method:'PUT',
            url: 'https://gorest.co.in/public/v2/users/7838441',
            headers:{
                authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'

            },
            body:{
                "name": "Mr John",
                 "email": "Rahul1503@yopmail.com"
            }
        }).then((Response)=>{
            expect(Response.status).to.be.equal(200)
            expect(Response.body).has.property("name","Mr John")
            expect(Response.body).has.property("email","Rahul1503@yopmail.com")
        })
    })

    it.skip('Test Name: Put Request on Existing data from Fixture File',function(){

        cy.fixture('updateUser').then((objResponse)=>{

            cy.request({

                method:'PUT',
                url: 'https://gorest.co.in/public/v2/users/7838441',
                headers:{
                    authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'
    
                },

                body: objResponse

            }).then((Response)=>{
                expect(Response.status).to.be.equal(200)
                expect(Response.body).has.property("name","Mr Tom")
                expect(Response.body).has.property("email","peakyblinder123@yopmail.com")
            })
        })
        
    })


    it.skip('Test Name: Put Request on Existing data from JSON Config File ',function(){

        cy.request({

            method:'PUT',
            url: 'https://gorest.co.in/public/v2/users/7838441',
            headers:{
                authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'

            },

            body:payload

        }).then((Response)=>{
            expect(Response.status).to.be.equal(200)
            expect(Response.body).has.property("name","newUpdatedName123")
            expect(Response.body).has.property("email","updatedNew123@yopmail.com")

            cy.request({
                method:'GET',
                url :'https://gorest.co.in/public/v2/users/7838441',

                headers:{
                    authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'
                }
            }).then((Response)=>{
                expect(Response.status).to.be.equal(200)
                expect(Response.body).has.property("name","newUpdatedName123")
                expect(Response.body).has.property("email","updatedNew123@yopmail.com")
                
            })
        })
    })


    it('Test Name: E2E testing',function(){
        postData.email='987HelloWorld987@yopmail.com'

       cy.request({
        method:'POST',
        url:'https://gorest.co.in/public/v2/users/',
        headers:{
            authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'
        },
        body:postData
         })
         .then((Response)=>{
            let id=Response.body.id
            cy.log("*** User ID **** "+ id)

            expect(Response.status).to.be.equal(201)

            cy.request({
                method:'PUT',
                url:'https://gorest.co.in/public/v2/users/'+id,
                headers:{
                    authorization:'Bearer 0671fd6a05d83849c578f39fb2ce1e23b4faf3ef4e44c37598157c4aa0e7c669'
                },
                body:payload

            })
            .then((Response)=>{
                expect(Response.status).to.be.equal(200)
                expect(Response.body).has.property('name',payload.name)
                expect(Response.body).has.property('email',payload.email)
            })

         })
        
    })

})

