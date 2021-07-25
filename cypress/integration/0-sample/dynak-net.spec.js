it('visits dynak.net website', () => {
    cy.visit('https://dynak.net')
    cy.get('h1').should('contain','8992703044')
});