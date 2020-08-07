///<reference types="cypress"/>

//var product = require("../fixtures/product")

describe("Search product 1", () => {
    it('Search Cessi product', () => {
        cy.visit('https://qa.fabelio.com/')
        cy.get('[aria-label=Search]').click()
        cy.fixture('product').then((products) => {
            cy.get('.MuiInputBase-input').type(products.product1).type('{enter}')
        })    
    
        cy.wait(10000)
        cy.get(':nth-child(10) > [data-test=product] > .css-1eanzts > .no-highlight > .start > .css-w11x8x').click({force: true})
        
        cy.wait(5000)
        cy.get('#addToCart > .MuiButton-label').click({force: true})

        cy.wait(10000)
        cy.screenshot('Search_Cessi')
        cy.get('.jss37 > .MuiButtonBase-root').click()
    })
});

describe("Search product 2", () => {
    it('Search Kursi product', () => {
        cy.visit('https://qa.fabelio.com/')
        cy.get('[aria-label=Search]').click()
        cy.fixture('product').then((products) => {
            cy.get('.MuiInputBase-input').type(products.product2).type('{enter}')
        })    
    
        cy.wait(10000)
        cy.get('.primary-image > img').click({force: true})
        cy.get('#addToCart > .MuiButton-label').click({force: true})

        cy.wait(10000)
        cy.screenshot('Search_Kursi_Alpha')
        cy.get('.jss37 > .MuiButtonBase-root').click()
        
    })
});