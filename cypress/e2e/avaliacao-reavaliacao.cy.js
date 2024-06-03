/// <reference types="Cypress"/>

describe('Deve realizar os testes no audiofoco', () => {
  beforeEach(() => {

    cy.sessionLogin()
  })

  const clickByTitle = (title) => {
    cy.get(`button[title="${title}"]`).click()
  }

  const clickByTitleAndIndex = (title, index = 0) => {
    cy.get(`button[title="${title}"]`).eq(index).click()
  }

  const clickByClass = (className, index = 0) => {
    cy.get(`.${className}`).eq(index).click()
  }

  it('Deve realizar o teste de Localização sonora', () => {

    cy.evaluationOrRevaluation()

    cy.get('button.Buttons_BtnRound__3C6vy.Buttons_Small__26o7D.undefined').eq(0).click()

    cy.get('button.Test_BtnPlayHuge__2fXZO').click()

    cy.get('button[title="Seguir para exemplos"]').click()

    cy.get('button[title="Play video"]').eq(2).click()

    cy.get('button[title="Começar o teste"]').click()

    cy.get('span.MuiButton-label').eq(1).click()

    // 1 de 10
    clickByTitle('Play video')
    clickByTitle(' Direito')
    clickByTitle('Confirmar')

    // 2 de 10
    clickByTitle('Play video')
    clickByTitle(' Esquerdo')
    clickByTitle('Confirmar')

    // 3 de 10
    clickByTitle('Play video')
    clickByTitle(' Esquerdo')
    clickByTitle('Confirmar')

    // 4 de 10
    clickByTitle('Play video')
    clickByTitle(' Atrás / em cima')
    clickByTitle('Confirmar')

    // 5 de 10
    clickByTitle('Play video')
    clickByTitle(' Direito')
    clickByTitle('Confirmar')

    // 6 de 10
    clickByTitle('Play video')
    clickByTitle(' Direito')
    clickByTitle('Confirmar')

    // 7 de 10
    clickByTitle('Play video')
    clickByTitle(' Atrás / em cima')
    clickByTitle('Confirmar')

    // 8 de 10
    clickByTitle('Play video')
    clickByTitle(' Esquerdo')
    clickByTitle('Confirmar')

    // 9 de 10
    clickByTitle('Play video')
    clickByTitle(' Direito')
    clickByTitle('Confirmar')

    // 10 de 10
    clickByTitle('Play video')
    clickByTitle(' Direito e esquerdo')
    clickByTitle('Confirmar')

    clickByTitle('Salvar')
    cy.get('span.MuiButton-label').eq(1).click()

    cy.get('button[title="Selecionar teste  Localização Sonora"]')
      .should('have.text', 'Teste Concluído')

  })

  it('Deve realizar o teste de Compreensão de Fala distorcida OD', () => {

    cy.evaluationOrRevaluation()

    cy.get('button.Buttons_BtnRound__3C6vy.Buttons_Small__26o7D.undefined').eq(1).click()

    cy.get('button.Test_BtnPlayHuge__2fXZO').click()

    cy.get('button[title="Seguir para exemplos"]').click()

    cy.get('button[title="Play video"]').eq(0).click()

    cy.get('button[title="Começar o teste"]').click()

    cy.get('span.MuiButton-label').eq(1).click()

    // 1 de 10
    clickByTitle('Play video')
    clickByTitle(' armário')
    clickByTitle('Confirmar')

    // 2 de 10
    clickByTitle('Play video')
    clickByTitle(' estrela')
    clickByTitle('Confirmar')

    // 3 de 10
    clickByTitle('Play video')
    clickByTitle(' livro')
    clickByTitle('Confirmar')

    // 4 de 10
    clickByTitle('Play video')
    clickByTitle(' camelo')
    clickByTitle('Confirmar')

    // 5 de 10
    clickByTitle('Play video')
    clickByTitle(' desenho')
    clickByTitle('Confirmar')

    // 6 de 10
    clickByTitle('Play video')
    clickByTitle(' prego')
    clickByTitle('Confirmar')

    // 7 de 10
    clickByTitle('Play video')
    clickByTitle(' estrada')
    clickByTitle('Confirmar')

    // 8 de 10
    clickByTitle('Play video')
    clickByTitle(' poltrona')
    clickByTitle('Confirmar')

    // 9 de 10
    clickByTitle('Play video')
    clickByTitle(' tesoura')
    clickByTitle('Confirmar')

    // 10 de 10
    clickByTitle('Play video')
    clickByTitle(' borboleta')
    clickByTitle('Confirmar')

    clickByTitle('Salvar')
    cy.get('span.MuiButton-label').eq(1).click()

    cy.get('button[title="Selecionar teste  Fechamento OD (orelha direita)"]')
      .should('have.text', 'Teste Concluído')
  })

  it('Deve realizar o teste de Compreensão de Fala distorcida OE', () => {

    cy.evaluationOrRevaluation()

    cy.get('button.Buttons_BtnRound__3C6vy.Buttons_Small__26o7D.undefined').eq(2).click()

    cy.get('button.Test_BtnPlayHuge__2fXZO').click()

    cy.get('button[title="Seguir para exemplos"]').click()

    cy.get('button[title="Play video"]').eq(0).click()

    cy.get('button[title="Começar o teste"]').click()

    cy.get('span.MuiButton-label').eq(1).click()

    // 1 de 10
    clickByTitle('Play video')
    clickByTitle(' azulejo')
    clickByTitle('Confirmar')

    // 2 de 10
    clickByTitle('Play video')
    clickByTitle(' floresta')
    clickByTitle('Confirmar')

    // 3 de 10
    clickByTitle('Play video')
    clickByTitle(' biblioteca')
    clickByTitle('Confirmar')

    // 4 de 10
    clickByTitle('Play video')
    clickByTitle(' lápis')
    clickByTitle('Confirmar')

    // 5 de 10
    clickByTitle('Play video')
    clickByTitle(' camisa')
    clickByTitle('Confirmar')

    // 6 de 10
    clickByTitle('Play video')
    clickByTitle(' dinheiro')
    clickByTitle('Confirmar')

    // 7 de 10
    clickByTitle('Play video')
    clickByTitle(' quadro')
    clickByTitle('Confirmar')

    // 8 de 10
    clickByTitle('Play video')
    clickByTitle(' estante')
    clickByTitle('Confirmar')

    // 9 de 10
    clickByTitle('Play video')
    clickByTitle(' pescoço')
    clickByTitle('Confirmar')

    // 10 de 10
    clickByTitle('Play video')
    clickByTitle(' telhado')
    clickByTitle('Confirmar')

    clickByTitle('Salvar')
    cy.get('span.MuiButton-label').eq(1).click()

    cy.get('button[title="Selecionar teste  Fechamento OE (orelha esquerda)"]')
      .should('have.text', 'Teste Concluído')
  })

  it('Deve realizar o teste de Compreensão de Fala com competição sonora ouvido direito OD', () => {

    cy.evaluationOrRevaluation()

    cy.get('button.Buttons_BtnRound__3C6vy.Buttons_Small__26o7D.undefined').eq(3).click()

    cy.get('button.Test_BtnPlayHuge__2fXZO').click()

    cy.get('button[title="Seguir para exemplos"]').click()

    cy.get('button[title="Play video"]').eq(2).click()

    cy.get('button[title="Começar o teste"]').click()

    cy.get('span.MuiButton-label').eq(1).click()

    // 1 de 10
    clickByTitle('Play video')
    clickByTitle(' tepimo')
    clickByTitle('Confirmar')

    // 2 de 10
    clickByTitle('Play video')
    clickByTitle(' quateiro')
    clickByTitle('Confirmar')

    // 3 de 10
    clickByTitle('Play video')
    clickByTitle(' pradoque')
    clickByTitle('Confirmar')

    // 4 de 10
    clickByTitle('Play video')
    clickByTitle(' sacota')
    clickByTitle('Confirmar')

    // 5 de 10
    clickByTitle('Play video')
    clickByTitle(' tomira')
    clickByTitle('Confirmar')

    // 6 de 10
    clickByTitle('Play video')
    clickByTitle(' mitago')
    clickByTitle('Confirmar')

    // 7 de 10
    clickByTitle('Play video')
    clickByTitle(' tredossa')
    clickByTitle('Confirmar')

    // 8 de 10
    clickByTitle('Play video')
    clickByTitle(' retuva')
    clickByTitle('Confirmar')

    // 9 de 10
    clickByTitle('Play video')
    clickByTitle(' tevaco')
    clickByTitle('Confirmar')

    // 10 de 10
    clickByTitle('Play video')
    clickByTitle(' capeira')
    clickByTitle('Confirmar')

    clickByTitle('Salvar')
    cy.get('span.MuiButton-label').eq(1).click()

    cy.get('button[title="Selecionar teste  Figura Fundo OD (orelha direita)"]')
      .should('have.text', 'Teste Concluído')
  })

  it('Deve realizar o teste de Compreensão de Fala com competição sonora ouvido esquerdo OE', () => {

    cy.evaluationOrRevaluation()

    cy.get('button.Buttons_BtnRound__3C6vy.Buttons_Small__26o7D.undefined').eq(4).click()

    cy.get('button.Test_BtnPlayHuge__2fXZO').click()

    cy.get('button[title="Seguir para exemplos"]').click()

    cy.get('button[title="Play video"]').eq(2).click()

    cy.get('button[title="Começar o teste"]').click()

    cy.get('span.MuiButton-label').eq(1).click()

    // 1 de 10
    clickByTitle('Play video')
    clickByTitle(' copado')
    clickByTitle('Confirmar')

    // 2 de 10
    clickByTitle('Play video')
    clickByTitle(' jolivo')
    clickByTitle('Confirmar')

    // 3 de 10
    clickByTitle('Play video')
    clickByTitle(' chovate')
    clickByTitle('Confirmar')

    // 4 de 10
    clickByTitle('Play video')
    clickByTitle(' crapife')
    clickByTitle('Confirmar')

    // 5 de 10
    clickByTitle('Play video')
    clickByTitle(' trapisco')
    clickByTitle('Confirmar')

    // 6 de 10
    clickByTitle('Play video')
    clickByTitle(' vatezo')
    clickByTitle('Confirmar')

    // 7 de 10
    clickByTitle('Play video')
    clickByTitle(' capeco')
    clickByTitle('Confirmar')

    // 8 de 10
    clickByTitle('Play video')
    clickByTitle(' dotira')
    clickByTitle('Confirmar')

    // 9 de 10
    clickByTitle('Play video')
    clickByTitle(' gavenei')
    clickByTitle('Confirmar')

    // 10 de 10
    clickByTitle('Play video')
    clickByTitle(' jeraca')
    clickByTitle('Confirmar')

    clickByTitle('Salvar')
    cy.get('span.MuiButton-label').eq(1).click()

    cy.get('button[title="Selecionar teste  Figura Fundo OE (orelha esquerda)"]')
      .should('have.text', 'Teste Concluído')
  })

  it('Deve realizar o teste de Resolução Temporal', () => {

    cy.evaluationOrRevaluation()

    cy.get('button.Buttons_BtnRound__3C6vy.Buttons_Small__26o7D.undefined').eq(5).click()

    cy.get('button.Test_BtnPlayHuge__2fXZO').click()

    cy.get('button[title="Seguir para exemplos"]').click()

    cy.get('button[title="Play video"]').eq(2).click()

    cy.get('button[title="Começar o teste"]').click()

    cy.get('span.MuiButton-label').eq(1).click()

    for (let i = 0; i < 10; i++) {
      cy.log(`Iteration ${i + 1} of 10`)

      clickByTitleAndIndex('Play video', 0)
      clickByTitleAndIndex(' 1 beep', 0)

      clickByTitleAndIndex('Play video', 1)
      clickByTitleAndIndex(' 2 beeps', 1)

      clickByTitleAndIndex('Play video', 2)
      clickByTitleAndIndex(' 2 beeps', 2)

      clickByTitleAndIndex('Play video', 3)
      clickByTitleAndIndex(' 2 beeps', 3)

      clickByTitleAndIndex('Play video', 4)
      clickByTitleAndIndex(' 2 beeps', 4)

      clickByTitle('Confirmar')
    }

    clickByTitle('Salvar')

    cy.get('span.MuiButton-label').eq(1).click()
    cy.get('button[title="Selecionar teste  Resolução Temporal"]')
      .should('have.text', 'Teste Concluído')
  })

  it('Deve realizar o teste de Memória Tonal', () => {

    cy.evaluationOrRevaluation()

    cy.get('button.Buttons_BtnRound__3C6vy.Buttons_Small__26o7D.undefined').eq(6).click()

    cy.get('button.Test_BtnPlayHuge__2fXZO').click()

    cy.get('button[title="Seguir para exemplos"]').click()

    cy.get('button[title="Play video"]').eq(2).click()

    cy.get('button[title="Começar o teste"]').click()

    cy.get('span.MuiButton-label').eq(1).click()

    for (let i = 0; i < 10; i++) {
      cy.log(`Iteration ${i + 1} of 10`)

      clickByTitleAndIndex('Play video', 0)

      if (Math.random() < 0.5) {
        clickByTitleAndIndex(' Grosso', 0)
        clickByTitleAndIndex(' Fino', 1)
      } else {
        clickByTitleAndIndex(' Fino', 0)
        clickByTitleAndIndex(' Grosso', 1)
      }

      clickByTitleAndIndex(' Fino', 2)
      clickByTitle('Confirmar')
    }

    clickByTitle('Salvar')

    cy.get('span.MuiButton-label').eq(1).click()
    cy.get('button[title="Selecionar teste  Ordenação Temporal"]')
      .should('have.text', 'Teste Concluído')
  })

  it('Deve realizar o teste de Identificação de Palavras', () => {

    cy.evaluationOrRevaluation()

    clickByTitle('Selecionar teste  Dicótico Sequencial')

    cy.get('button.Test_BtnPlayHuge__2fXZO').click()

    cy.get('button[title="Seguir para exemplos"]').click()

    cy.get('button[title="Play video"]').eq(0).click()

    cy.get('button[title="Começar o teste"]').click()

    cy.get('span.MuiButton-label').eq(1).click()

    for (let i = 0; i < 10; i++) {
      cy.log(`Iteration ${i + 1} of 10`)

      clickByTitleAndIndex('Play video', 0)

      let indices = []
      while (indices.length < 4) {
        let randomIndex = Math.floor(Math.random() * 20)
        if (!indices.includes(randomIndex)) {
          indices.push(randomIndex)
        }
      }

      indices.forEach(index => {
        clickByClass('Test_BtnOption__9bkIp', index)
      })

      clickByTitle('Confirmar')
    }

    clickByTitle('Salvar')

    cy.get('span.MuiButton-label').eq(1).click()
    cy.get('button[title="Selecionar teste  Dicótico Sequencial"]')
      .should('have.text', 'Teste Concluído')
  })

  it('Deve realizar o teste de Identificação de Palavras Números - Ouvido Direito', () => {

    cy.evaluationOrRevaluation()

    clickByTitle('Selecionar teste  Dicótico OD (orelha direita)')

    cy.get('button.Test_BtnPlayHuge__2fXZO').click()

    cy.get('button[title="Seguir para exemplos"]').click()

    cy.get('button[title="Play video"]').eq(0).click()

    cy.get('button[title="Começar o teste"]').click()

    cy.get('span.MuiButton-label').eq(1).click()

    for (let i = 0; i < 10; i++) {
      cy.log(`Iteration ${i + 1} of 10`)

      clickByTitleAndIndex('Play video', 0)

      let validNumbers = [4, 5, 7, 8, 9]
      let selectedNumbers = []
      while (selectedNumbers.length < 2) {
        let randomNumber = validNumbers[Math.floor(Math.random() * validNumbers.length)]
        if (!selectedNumbers.includes(randomNumber)) {
          selectedNumbers.push(randomNumber)
        }
      }

      selectedNumbers.forEach(number => {
        clickByTitle(` ${number}`)
      })

      clickByTitle('Confirmar')
    }
    clickByTitle('Salvar')

    cy.get('span.MuiButton-label').eq(1).click()
    cy.get('button[title="Selecionar teste  Dicótico OD (orelha direita)"]')
      .should('have.text', 'Teste Concluído')
  })

  it('Deve realizar o teste de Identificação de Palavras Números - Ouvido Esquerdo', () => {

    cy.evaluationOrRevaluation()

    clickByTitle('Selecionar teste  Dicótico OE (orelha esquerda)')

    cy.get('button.Test_BtnPlayHuge__2fXZO').click()

    cy.get('button[title="Seguir para exemplos"]').click()

    cy.get('button[title="Play video"]').eq(0).click()

    cy.get('button[title="Começar o teste"]').click()

    cy.get('span.MuiButton-label').eq(1).click()

    for (let i = 0; i < 10; i++) {
      cy.log(`Iteration ${i + 1} of 10`)

      clickByTitleAndIndex('Play video', 0)

      let validNumbers = [4, 5, 7, 8, 9]
      let selectedNumbers = []
      while (selectedNumbers.length < 2) {
        let randomNumber = validNumbers[Math.floor(Math.random() * validNumbers.length)]
        if (!selectedNumbers.includes(randomNumber)) {
          selectedNumbers.push(randomNumber)
        }
      }

      selectedNumbers.forEach(number => {
        clickByTitle(` ${number}`)
      })

      clickByTitle('Confirmar')
    }
    clickByTitle('Salvar')

    cy.get('span.MuiButton-label').eq(1).click()
    cy.url().should('include', '/smart')

  })
})



