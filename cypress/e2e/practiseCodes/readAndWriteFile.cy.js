describe('writing file', function(){

    it('method to create file of txt and writing in same file ', function(){
        cy.writeFile("MyTextFile.txt","Hello this is my first content \n")

        cy.writeFile("MyTextFile.txt","Hello this is my second content",{flag:"a+"}); // Adding Content in existing created file

    })

    it('method to create Json file', function(){
        cy.writeFile("demo.json",{data1 : "UsrName", data2 : "password"})


    })

    it('method to create json file under given folder', function(){
        cy.writeFile("cypress/fixtures/userdetail.json",
            {username : "UsrName", pswd : "password"})

    })

    it('method to Read Data from TextFile - TextFile name is Known', function(){
        cy.readFile("MyTextFile.txt").then
        ((data) => {
           cy.log("+++print++", data);
        })

    })

    it('method to Read Data json file from Filepath', function(){
       cy.readFile("cypress/fixtures/userdetail.json").then 
       ((data) =>{
        cy.log("++print++",data)

       })

    })

    it('method for assertion for json file', function () {
        cy.readFile('cypress/fixtures/userdetail.json')
          .should('exist')
          .and((data) => {
            expect(data).to.have.property('pswd');
          });
      })

      it('method for assertion for Text file', function () {
       cy.readFile("MyTextFile.txt").should('exist')
       .and("contain","content")
      });
      

})