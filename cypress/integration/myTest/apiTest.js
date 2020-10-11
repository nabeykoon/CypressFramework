/// <reference types="Cypress" />


describe('API Test Suite', () => {

    it('My first test case', () => {


        let requestBody = {
            "name": "Learn cypress 666666",
            "isbn": "BOOK8888",
            "aisle": "8545",
            "author": "Nadeera 987"
        }

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', requestBody)
            .then((response) => {
                expect(response.body).to.have.property('Msg', 'successfully added')
            })
    })
})