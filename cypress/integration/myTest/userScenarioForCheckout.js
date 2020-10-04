/// <reference types="Cypress" />

//Import page objects
import { ShopPage } from '../../support/pageObjects/ShopPage';
import { CheckoutPage } from '../../support/pageObjects/CheckoutPage';
import { PurchasePage } from '../../support/pageObjects/PurshasePage';
import { Homepage } from '../../support/pageObjects/HomePage';

//Import utilities
import { sumOfProducts } from '../../support/utils/util'
import { finalTotal } from '../../support/utils/util'

describe('Home page Test suite', () => {

    //override defaultCommandTimeout for only this test suite
    Cypress.config('defaultCommandTimeout', 7000);

    before(() => {
        // runs once before all tests in the block
        cy.fixture('Test8FrameworkData').then(function (data) {
            this.data = data;
        })
    })

    it('My first test case', function () {

        const homePage = new Homepage();
        const shopPage = new ShopPage();
        const checkoutpage = new CheckoutPage();
        const purchasePage = new PurchasePage();

        homePage.visit()
        homePage.getNameTextField()
            .should('have.attr', 'minlength', "2");
        homePage.getEntrepreneur()
            .should('be.disabled');
        homePage.enterNameTextField(this.data.name)
            .selectGender(this.data.gender)
        homePage.getvalueOfTwoWayDataBinding()
            .should('have.value', this.data.name);
        homePage.submit();
        //cy.wait(1000);
        //if you want to pause the test here
        //cy.pause();
        homePage.goToShop();
        //Read array of product Names from JSON and pass it to the cypress custom method written in commands.js
        //this.data.productName.forEach((element) => {
        //    cy.selectProduct(element);
        //});
        shopPage.selectProduct(this.data.productName)
            .clickCheckoutLink();
        // get sum of all products using util.js   

        /*  (async function () {
                var sum = await sumOfProducts();
                cy.log(sum)
               // var total = await finalTotal();
                //expect(sum).to.equal(total);
            })(); */

            sumOfProducts().then((sum) => {
                cy.log(sum);
            })


        checkoutpage
            .clickCheckoutButton();
        purchasePage.enterCountryName('ind')
            .selectCountryfromList(this.data.country)
            .clickAgreementCheckbox()
            .clickPurchaseButton()
            .getSuccessAlertText().should('include.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    })
})