it('visits credit-agricole.pl website' , () => {
    cy.visit('https://credit-agricole.pl')
    cy.get('.nav-client > .link-toggle').should('contain','Klienci indywidualni')
    cy.get('.nav-info > .link-toggle').should('contain','więcej')
    cy.get(':nth-child(2) > .section-title > a').should('contain','konta')
});