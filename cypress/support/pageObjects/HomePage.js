import { Header } from "./Header";


export class Homepage {

    constructor() {
        this.header = new Header();
    }

    visit() {
        cy.visit(Cypress.env('homePage_url'));
    }

    getNameTextField() {
        return cy.get('input[name="name"]:nth-child(2)');
    }

    enterNameTextField(name) {
        const nameTextField = this.getNameTextField();
        nameTextField.clear();
        nameTextField.type(name);
        return this;
    }

    getvalueOfTwoWayDataBinding() {
        return cy.get('input[name="name"]:nth-child(1)');
    }

    getGenderDDL() {
        return cy.get('select#exampleFormControlSelect1')
    }

    selectGender(gender) {
        const genderDDL = this.getGenderDDL();
        genderDDL.select(gender);
        return this;
    }

    getEntrepreneur() {
        return cy.get('#inlineRadio3');
    }

    goToShop() {
        const link = this.header.getShop();
        link.click();
    }

    submit() {
        const button = cy.get('input.btn.btn-success');
        button.click();
    }

}