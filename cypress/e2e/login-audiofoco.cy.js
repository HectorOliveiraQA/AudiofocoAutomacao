/// <reference types="Cypress"/>

describe('Teste funcional de Login em ambiente DEV', () => {
  it('Deve realizar o Login com sucesso!', () => {

    cy.guiLogin()

    cy.url().should('include', '/smart')

  })

})
