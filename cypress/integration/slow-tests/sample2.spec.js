describe('Slow tests bad practice - Sample 2', () => {
//aqui tu ta visitando uma página e clicando nela pra ela ser redirecionada para o Signup
//para otimizar tu já pode visitar a página que tem a URL do signup
  it('does not enable signup on different passwords', () => {
    cy.visit('https://notes-serverless-app.com')

    
    cy.contains('.btn', 'Signup')
      .click()

    cy.get('#email').type('joe@example.com')
    cy.get('#password').type('foobarbaz')
    cy.get('#confirmPassword').type('foobahbaz')

    cy.contains('button', 'Signup')
      .should('be.disabled')
  })
})
