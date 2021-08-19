it('visits cmbank.pl website' , () => {
    cy.visit('https://mbank.pl')
    cy.get('#menu-item-1 > :nth-child(1) > .menu-item-href').should('contain','Klienci indywidualni')
    cy.get('#menu-item-2 > :nth-child(1) > .menu-item-href').should('contain','Private banking')
    cy.get('#menu-item-3 > .menu-item-wrapper > .menu-item-href').should('contain','Firmy')




});