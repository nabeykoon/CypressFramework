export class PurchasePage {

    enterCountryName(country) {
        const countryTextField = cy.get('#country');
        countryTextField.type(country);
        return this;
    }

    selectCountryfromList(country){
        cy.contains(country).trigger('click');
        return this;
    }

    clickAgreementCheckbox(){
        cy.get('#checkbox2').click({force:true});
        return this;
    }

    clickPurchaseButton(){
        cy.get('input[value=Purchase').click();
        return this;
    }

    getSuccessAlertText(){
        return cy.get('div.alert');
    }
}