/// <reference types="Cypress" />

describe('UI Control Test suite', () => {
    it('My first test case', () => {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

       //Handling child tab
       //invoke jquery function to remove target attribute from element. In this case Target attribute is responsible for opening given href link in another tab.
       cy.get('#opentab').invoke('removeAttr','target').click();
       cy.url().should('include', 'rahulshettyacademy.com/#/index');
       cy.wait(1000);
       cy.go('back');
       cy.url().should('include', 'https://www.rahulshettyacademy.com/AutomationPractice/');

       //Get the href url 

       cy.get('#opentab').then((elm) => {
           const url = elm.prop('href');
           cy.log(url);
           cy.visit(url);
       })

    })
})