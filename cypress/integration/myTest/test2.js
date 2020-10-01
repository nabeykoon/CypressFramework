/// <reference types="Cypress" />

describe('My second Test', () => {
    it('My first test case', () => {

        cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').as('productsLocator');
       
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                $el.find('button').trigger("click");

            }
        })

        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    })
})