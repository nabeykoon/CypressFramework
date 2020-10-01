export class ShopPage {

    selectProduct(productName) {
        productName.forEach((element) => {
            cy.get('h4.card-title').each(($el, index, $list) => {
                if ($el.text().includes(element)) {
                    cy.get('button.btn.btn-info').eq(index).click();
                }
            })
        });

        return this;
    }

    clickCheckoutLink() {
        const checkoutLink = cy.get('a.nav-link.btn.btn-primary');
        checkoutLink.click();
    }
}