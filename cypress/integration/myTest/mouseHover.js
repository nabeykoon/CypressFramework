/// <reference types="Cypress" />

describe('UI Control Test suite', () => {
    it('My first test case', () => {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        //show hidden element using jquery 
        cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');

        //click on hidden element using cypress 
        cy.contains('Reload').click({ force: true })
        cy.url().should('include', 'AutomationPractice');

    })
})