it('visits credit-agricole.pl website' , () => {
    cy.visit('https://credit-agricole.pl')
    cy.get('.nav-client > .link-toggle').should('contain','Klienci indywidualni')


});