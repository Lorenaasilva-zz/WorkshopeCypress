/// <reference types="cypress"/>

describe('DevFinance', () => {

    it('Adcionar uma nova transação de entrada', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#');
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('PetShop')
        cy.get('input[type*=number]').type('-599.59')
        cy.get('input[type*=date]').type('2021-10-28')

        cy.contains('button', 'Salvar').click()
        /// exclusão de uma saída
        cy.get('img[onclick*=remove]').click()

        cy.get('table tbody tr').should('have.length', 0);

        
    });

});