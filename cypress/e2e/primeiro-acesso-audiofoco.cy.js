/// <reference types="Cypress"/>

describe('Inserindo data de nascimento', () => {
  it('Deve inserir a data de nascimento ao primeiro acesso da conta', () => {

    cy.guiLogin()

    cy.get('#datepicker').type('072000')

    cy.get('[title="Confirmar"]').click()

    cy.url().should('include', '/smart')


  })

})
