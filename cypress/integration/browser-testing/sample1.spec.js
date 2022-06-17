describe('Browser testing bad practice - Sample 1', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com')
  })

  it('directs the user to the login page when clicking the login link', () => {
    //uma possibilidade =>     cy.contains('.nav a', 'Login').click().should('have.attr', 'href', '/login')
    //outra possibilidade 
    //(aqui tu ta falando pra ele verifica que não há o atributo de target que é a mudança de página)
    cy.contains('.nav a', 'Login').should('have.attr', 'href', '/login')
    .and('not.have.attr' , 'target')
  })
})
