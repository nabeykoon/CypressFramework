/// <reference types="Cypress" />

describe('UI Control Test suite', () => {
    it('My first test case', () => {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        //alert message test
        cy.get('input#alertbtn').click();
        cy.get('input#confirmbtn').click();

        //window:alert
        cy.on('window:alert', (str) => {

            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge');

        })

        cy.on('window:confirm', (txt) => {

            //Mocha
            expect(txt).to.equal('Hello , Are you sure you want to confirm?');

        })
        // click cancal on confirm dialogue. Code Need to be verified.
        cy.on('window:confirm', () => {
            return false;
        });
    })
})