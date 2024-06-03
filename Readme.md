<h1>Automação de Testes com Cypress <strong>Audiofoco</strong></h1>
<p> Sejam bem-vindos ao projeto de automação do Audiofoco </strong></a>.<br>

<h2>💻 Objetivo do Projeto</h2>
<p>Devido as novas implementações e ajustes no Audiofoco, se faz necessário otimizar o avanço do usuário que se encontra em status de <strong>Avaliação</strong> e <strong>Reavaliação</strong>. Para isso, um <strong>Teste Automatizado</strong> foi desenvolvido utilizando o cypress. Desta forma conseguimos garantir a funcionalidade dos 10 testes que o usuário deve realizar, além de acelerar o processo de testes em fases de <strong>Treino</strong> e <strong>Fim de Jornada</strong>.</p>

<h2>
⚠️ Pré-requistos ⚠️
</h2>

- [x] Node instalado em sua máquina (no mínimo versão 12)

- [x] IDE ( VsCode, InteliJ )

<h2> 🚦 Guia </h2>

<ol>
    <li> Clone o repositório ou realize o download do projeto </li>
    <li> Caso realizado o download será necessário extrair os arquivos e abrir a sua IDE na raiz do seu projeto</li>
    <li> Realize o comando <code>npm install</code> para instalar as dependencias utilizadas no projeto.</li>
    <li> Escolha o ambiente que o teste será executado, alterando o valor da variável <code>CYPRESS_STAGE</code>  entre "dev" e "prod" no arquivo: <strong> <code>environment.env.json</code></strong> que está localizado na raiz do seu projeto.</li>
    <li> Renomeie o arquivo <strong> <code>cypress.env.example.json</code></strong> com o seguinte nome: <strong><code>cypress.env.json</code></strong></li>
    <li> Dentro do arquivo cypress.env.json você irá encontrar as variáveis: <br/>
<code>{
  "PROD_URL": "Url do Audiofoco em Produção",
  "DEV_URL": "Url do Audiofoco em Dev",
  "AUDIOFOCO_COMPANY_CODE": "Código da Empresa",
  "AUDIOFOCO_USERNAME": "Id do usuário",
  "AUDIOFOCO_ACCESS_CODE": "Código de acesso"
}</code> <p><strong>Basta inserir as urls de produção e desenvolvimento dentro das aspas duplas exemplo: <code>"link do audiofoco"</code> onde se encontra respectivamente seu campo. E alterar os valores das outras variáveis com os dados da conta que você deseja realizar os testes, exemplo: <code>"AUDIOFOCO_USERNAME": "HectorOliveira",</code></strong></p></li>
   <li> Feito as configurações já podemos iniciar nossos testes, nosso projeto de automação conta com 3 testes diferentes (3 arquivos diferentes de testes). Dessa forma irei explicar o que cada um faz.</li>
       <ul> <br/>
            <li><strong><code>avaliacao-reavaliacao.cy.js</code></strong> é o teste responsável por simular um usuário realizando os 10 testes do audiofoco, ele funciona tanto para usuários em status de <strong>Avaliação</strong> e 
             <strong>Reavaliação</strong>. Para executar esse teste podemos rodar o comando <code>npx cypress open</code> dessa forma uma interface do cypress irá abrir e poderemos acompanhar visualmente o andamento dos testes. Caso você queira 
             rodar o teste em "segundo plano" você pode utilizar o comando <code>npx cypress run --spec cypress/e2e/avaliacao-reavaliacao.cy.js</code></li></br>
            <li><strong><code>login-audiofoco.cy.js</code></strong> é o teste responsável por simular um usuário logando na plataforma. Para executar o teste basta realizar o seguinte comando no seu terminal: 
            <code>npx cypress run --spec login- audiofoco.cy.js</code> ou utilizar o comando <code>npx cypress open</code> dessa forma uma interface do cypress irá abrir e poderemos acompanhar visualmente o andamento dos testes. </li></br>
            <li><strong><code>primeiro-acesso-audiofoco.cy.js</code></strong> é o teste responsável por inserir uma data de nascimento para contas novas, dessa forma ao criar um usuário novo, você apenas insere os dados da conta no arquivo 
            cypress.env.json e esse teste irá inserir uma data de nascimento para que seja possível avançar para a etapa de avaliação, dessa forma em contas novas esse deverá ser o primeiro teste a ser <strong>executado!!</strong> Podemos 
            rodar esse teste 
            através da interface criada pelo cypress ao utilizar o comando <code>npx cypress open</code> ou rodando em segundo plano utilizando o comando <code>cypress run --spec primeiro-acesso-audiofoco.cy.js</code></li> </br>
       </ul>
</ol>

<h2>🔰 Tecnologias Utilizadas</h2>

<ul>
    <li>Vscode</li>
    <li>Javascript</li>
    <li>Cypress</li>
    <li>Eslint</li>
</ul>

<h2>🔗 Links Úteis</h2>
<ul>
    <li><a href="https://www.youtube.com/watch?v=-jft_9PlffQ">Instalação do NodeJs</a></li>
    <li><a href="https://www.youtube.com/watch?v=FWnZBah0WLc">Instalação do VsCode</a></li>

</ul>

<h2> 🤝 Contribuindo </h2>

Este repositório foi criado para fins de otimizar o fluxo de testes na plataforma Audiofoco e garantir a qualidade dos processos.

Se possível:

⭐️ Star o projeto

🐛 Encontrar e relatar issues

---

Disponibilizado com 💙 por 👨‍🎓 [Hector-Bonilhaa](https://www.linkedin.com/in/hector-oliveira-8235951a3/ "Hector Oliveira").
