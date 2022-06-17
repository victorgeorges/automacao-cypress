//nesse teste tu interceptor e verificou se o primeiro link que tu recebe é aquele mesmo
//e há o campo que tu espera la no segundo it
// não é recomendavél testar o browser e sim a aplicação
describe('Browser testing bad practice', () => {
  beforeEach(() => {
    //pra tu separar o backend do frontend é bom tu intercepta tua requisição
    //tu passa tua fixture como parâmetro simulando o que tu recebe do backend
    //tu sobreescreve o que ta dentro do arquivo, com um arquivo estático com o nome stories
    // { fixture: 'stories'})
    cy.intercept('GET','**/search**',{fixture: 'stories' }).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('tests a browser feature instead of an app feature', () => {
    cy.get('.table-row a').first()
    .should('have.attr' , 'href', 'https://example.com/lc-jg')
    .and('have.attr' , 'target' , '_blank' )

    // Assert that a new tab was opened in the correct URL
  })
})
