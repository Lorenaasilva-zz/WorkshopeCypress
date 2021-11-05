/// <reference types="cypress"/>

describe('DevFinance', () => {

    before(() => {

        cy.visit('https://devfinance-agilizei.netlify.app/#');
        
    });

    it('Adcionar uma nova transação de saída', () => {
       
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Salário Mês')
        cy.get('input[type*=number]').type('600')
        cy.get('input[type*=date]').type('2021-10-01')
        cy.contains('button', 'Salvar').click()
        cy.get('table tbody tr').should('have.length', 1);
    });

    it('Adicionar saída', () => {

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('PetShop')
        cy.get('input[type*=number]').type('-599.59')
        cy.get('input[type*=date]').type('2021-10-28')
        cy.contains('button', 'Salvar').click()

    });

    it('Excluir saída', () => {
        
        cy.contains('PetShop').parent().find('img[onclick*=remove]').click()
        cy.get('table tbody tr').should('have.length', 1);

    });

});