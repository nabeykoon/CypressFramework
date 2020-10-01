/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('iFrames Test suite', () => {
    it('My first iFrame test', () => {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded('#courses-iframe');

        //select first element to click on Mentorship tab

        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        // Verify no of packages
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2);


    })
})