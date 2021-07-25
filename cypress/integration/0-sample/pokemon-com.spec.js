it('visits pokemon.com website', () => {
    cy.visit('https://www.pokemon.com/uk/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('.active > .title').should('contain','Home')
    cy.get('.game > a').should('contain','News')



});