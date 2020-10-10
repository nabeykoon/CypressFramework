/// <reference types="Cypress" />


describe('Mock API Test Suite', () => {

    it('My first test case', () => {

        cy.visit("https://example.cypress.io/commands/network-requests");
        let message = "No comment found to update"
        cy.server();
        cy.route({
            method: 'PUT',
            url: '**/comments/*',
            status: 404,
            response: { error: message },
            delay: 500
        }).as('updateComment')

        cy.get('.network-put').click();
        cy.wait('@updateComment');
        cy.get('.network-put-comment').should('contain', message);
    })
})