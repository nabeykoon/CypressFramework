/// <reference types="Cypress" />

describe('My First Test', () => {
    it('My first test case', () => {

        cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');

        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);

        console.log('Logging will be done immediately');
        // parent child chaining
        //use alias to reuse '.products' elements later
        cy.get('.products').as('productsLocator');

        cy.get('@productsLocator').find('.product').should('have.length', 4);

        //Select 2nd product
        cy.get('@productsLocator').find('.product').eq(1).contains('ADD TO CART').click();
        //Select 3rd product and then print log
        cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click().then(() => {
            console.log('log this after adding 3rd product');
        })

        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                $el.find('button').trigger("click");

            }
        })

        //Assert if logo text is correct
        cy.get('.brand').should('have.text', 'GREENKART');

        //This is to log brand logo text
        cy.get('.brand').then((logoElement) => {
            //Shows log in the Cypress Testrunner UI
            cy.log(logoElement.text());
        })


    })
})