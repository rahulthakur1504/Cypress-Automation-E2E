describe('Test Suite for Broken Links',function(){

    it('Testing all broken links',function(){
        cy.visit('https://ecommerce-playground.lambdatest.io/');

        let brokenLinks=0;
        let activeLinks=0;

        cy.get('a').each(($links, index)=>{
            const href=$links.attr('href');
            if(href)
            {
                cy.request({url:href, failOnStatusCode:false}).then((response) =>{
                    if(response.status>=400){
                        cy.log(`**** Link number ${index+1} is Broken Links ${href}`);
                        brokenLinks++;

                    }
                    else{
                        cy.log(`*** Link number ${index+1} is ACtive links ${href}`);
                        activeLinks++;
                    }
                })
            }

        }).then(($links)=>{
            const totalLinks= $links;
            cy.log(`***** Total Number of link on page is **** ${totalLinks}`)
            cy.log(`***** Total Number of Active link on page is **** ${brokenLinks}`)

            cy.log(`***** Total Number of Broken link on page is **** ${activeLinks}`)

        })
    })
})