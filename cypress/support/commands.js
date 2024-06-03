// eslint-disable-next-line no-unused-vars
Cypress.Commands.add('forceClick', {prevSubject: 'element'}, (subject, options) => {
  // eslint-disable-next-line cypress/no-force
  cy.wrap(subject).click({force: true})
})

Cypress.Commands.add('evaluationOrRevaluation', () => {
  cy.get('button.Buttons_BtnRound__3C6vy, button.Buttons_BtnRoundSquare__3B9Jm').then($buttons => {
    if ($buttons.length > 0) {
      cy.wrap($buttons).first().click()
    } else {
      cy.log('Nenhum dos botões foi encontrado.')
    }
  })
})

// Ignorar erros não capturados na aplicação
// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retornar false para evitar que o Cypress falhe o teste
  return false
})

Cypress.Commands.add('guiLogin', (
  idEmpresa = Cypress.env('AUDIOFOCO_COMPANY_CODE'),
  idUsername = Cypress.env('AUDIOFOCO_USERNAME'),
  accessCode = Cypress.env('AUDIOFOCO_ACCESS_CODE')
) => {
  cy.intercept('POST', '**/login').as('postUSER')
  cy.visit('/')

  cy.get('form').should('exist').as('formContent')

  // eslint-disable-next-line cypress/unsafe-to-chain-command, cypress/no-force
  cy.get('@formContent').find('input[placeholder="ID Empresa"]')
    .forceClick()
    .type(idEmpresa) // Digita o id da Empresa

  // eslint-disable-next-line cypress/unsafe-to-chain-command, cypress/no-force
  cy.get('@formContent').find('input[placeholder="ID Usuário"]')
    .forceClick()
    .type(idUsername) // Digita o id da Empresa

  // eslint-disable-next-line cypress/unsafe-to-chain-command, cypress/no-force
  cy.get('@formContent').find('input[placeholder="Código Acesso"]')
    .forceClick()
    .type(accessCode) // Digita o id da Empresa



  // eslint-disable-next-line cypress/no-force
  cy.get('@formContent').find('button[title="Pressione para entrar"]').forceClick()
  cy.wait('@postUSER')

  // cy.url().should('include', '/smart')

})

Cypress.Commands.add('sessionLogin', (
  idEmpresa = Cypress.env('AUDIOFOCO_COMPANY_CODE'),
  idUsername = Cypress.env('AUDIOFOCO_USERNAME'),
  accessCode = Cypress.env('AUDIOFOCO_ACCESS_CODE')
) => {
  const login = () => cy.guiLogin(idEmpresa, idUsername, accessCode)

  cy.session(idUsername, login)
  cy.visit('/')

})


