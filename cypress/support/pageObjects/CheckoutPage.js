export class CheckoutPage {

    clickCheckoutButton() {
        const checkoutButton = cy.get(':nth-child(4) > :nth-child(5) > .btn');
        checkoutButton.click();
    }

    getAllPriceListValues() {
        return cy.get('tr td:nth-child(4) strong');
    }

    getTotalPrice() {
        return cy.get('td.text-right h3 strong');
    }
}
