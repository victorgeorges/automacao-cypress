describe('Code duplication bad practice - Sample 4', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
  })
 
  it('checks all checkboxes from a specific fieldset', () => {
    //aqui tu ta marcando todos os checkbox de uma vez
    cy.get('fieldset [type="checkbox"]').check()
  })
})
