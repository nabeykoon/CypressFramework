/// <reference types="Cypress" />


describe('API Test Suite', () => {

    it('My first test case', () => {


        let requestBody = {
            "name": "Learn cypress 23423423",
            "isbn": "BOOK5555",
            "aisle": "2323",
            "author": "Nadeera 345"
        }

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', requestBody)
            .then((response) => {
                expect(response.body).to.have.property('Msg', 'successfully added')
            })
    })
})