
describe('Hardcoded assertion bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })


  it('enhanced search ' , ()=>{
    //pega o array que no arquivo e armazena aqui
    const { hits } = require('../../fixtures/stories')
    cy.search('cypress.io')
    cy.wait('@getStories')

    //pega o array la e verifica se os comprimentos são equivalentes
    cy.get('.table-row').should('have.length' , hits.length)

    //faz iterações para verificar cada linha do array
    // verifica se o iterador é igual ao indice e que contem o título
    hits.forEach((hit,index) => {
      cy.get('.table-row').eq(index).should('contain',hit.title)
    });
  })



  /*seria a maneira mais arcaica de fazer 
  it('searches', () => {
    cy.search('cypress.io')
    cy.wait('@getStories')

    cy.get('.table-row')
      .as('tableRows')
      .should('have.length', 2)
    cy.get('@tableRows')
      .eq(0)
      .should('contain', 'Agile Testing')
    cy.get('@tableRows')
      .eq(1)
      .should('contain', 'Clean Code')
  })*/
})
