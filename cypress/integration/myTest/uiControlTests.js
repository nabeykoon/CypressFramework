/// <reference types="Cypress" />

describe('UI Control Test suite', () => {
    it('My first test case', () => {

        //Select checkbox

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked');

        //Select multiple checkboxes

        cy.get('input[type=checkbox]').check(['option2', 'option3']);

        //Select value of static dropdown

        cy.get('select#dropdown-class-example').select('option2').should('have.value', 'option2');

        //Dynamic dropdown

        cy.get('input#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === "Indonesia") {
                cy.wrap($el).click();
            }
        })

        cy.get('input#autocomplete').should('have.value', 'Indonesia');

        //Show/Hide display text

        cy.get('input#displayed-text').should('be.visible')
        cy.get('input#hide-textbox').click();
        cy.get('input#displayed-text').should('not.be.visible');
        cy.get('input#show-textbox').click();
        cy.get('input#displayed-text').should('be.visible');

        //Radio button input

        cy.get('input[value=radio2]').check().should('be.checked');
    })
})