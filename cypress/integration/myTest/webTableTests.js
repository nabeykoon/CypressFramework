/// <reference types="Cypress" />

describe('UI Control Test suite', () => {
    it('My first test case', () => {

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        cy.get('table#product tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            if (text.includes("Python")) {
                cy.get('table#product tr td:nth-child(2)').eq(index).next().then((price) => {
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                })
            }

        })
    })
})