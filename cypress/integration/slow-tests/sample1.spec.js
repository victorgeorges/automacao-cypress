describe('Slow tests bad practice - Sample 1', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
       /*tu passando esse parÂmetro fixture, tu otimiza a performance,
        já que tu ta interceptando o que está retornando do backend 
        quando tu cria {}, quer dizer que tu ta criando um objeto fixtures que recebe stories*/
       { fixture : 'stories'}
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear()
  })

  it('searches by typing and hitting enter', () => {
    //aqui tu ta fazendo a requisição dos stories para dentro da constante desse código chamada hits
    const {hits} = require('../../fixtures/stories.json')
    cy.get('@searchField')
    //essa parte aqui ele digita testing e aperta enter
      .type('frontend testing{enter}')

    cy.wait('@getStories')

    cy.get('.table-row').should('have.length' , hits.length)
    //aqui ele ta contando que tem 100 stories .should('have.length', 100)
  })
})
