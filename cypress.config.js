const { defineConfig } = require('cypress')
const environmentConfig = require('./environment.env.json') // Caminho para o seu arquivo environment.json
const urls = require('./cypress.env.json') // Caminho para o arquivo cypress.env.json (Necessário criar o arquivo na raiz do seu projeto)

module.exports = defineConfig({
  chromeWebSecurity: true,

  e2e: {
    // Padrão de timeout para comandos
    defaultCommandTimeout: 35000,

    // Função para configuração dos eventos
    setupNodeEvents(on, config) {

      // Obtendo a variável de ambiente CYPRESS_STAGE do Cypress.env
      const stage = environmentConfig.CYPRESS_STAGE
      const prodUrl = urls.PROD_URL
      const devUrl = urls.DEV_URL

      // Selecionando o ambiente baseado no valor da variável
      const ambiente = (stage === 'prod') ? prodUrl : devUrl

      config.baseUrl = ambiente
      // Retornando a configuração ajustada
      return config
    },
  },
})
