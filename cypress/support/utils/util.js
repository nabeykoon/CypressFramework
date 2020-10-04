import { CheckoutPage } from '../../support/pageObjects/CheckoutPage';

const checkoutpage = new CheckoutPage();

//Utility to calculate sum (number value) of all checkout products
export const sumOfProducts = () => {
    return new Promise((resolve) => {
        var sum = 0;
        checkoutpage.getAllPriceListValues().each(($el, index, $list) => {
            const amountText = $el.text();
            var number = amountText.split(" ");
            var number = number[1].trim();
            sum = Number(sum) + Number(number);
        }).then(() => {
            resolve(sum);
        })
    })
}

//Utility to create total price (number value) of all checkout products
export const finalTotal = () => {
    return new Promise((resolveTotal) => {
        var total = 0;
        checkoutpage.getTotalPrice().then((element) => {
            const fullText = element.text();
            var number = fullText.split(" ");
            var number = number[1].trim();
            total = Number(number);
        }).then(()=>{
            resolveTotal(total);
        })
        
    })
}