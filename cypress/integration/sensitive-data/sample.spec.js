describe('Sensitive data bad practice', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/login')
  })

  it('fills the form with sensitive data', () => {
    //dados sensíveis tu passa como variável de ambiente
    //cy.get('#email').type('joe@example.com') -> e não assim
    cy.get('#email').type(Cypress.env('user_email'))
    //melhor maneira de não expor os dados nem na linha de comando nem no log
    cy.get('#password').type(Cypress.env('user_password') , {log : false})
  })
})
