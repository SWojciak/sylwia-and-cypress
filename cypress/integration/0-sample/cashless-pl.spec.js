it('visits cashless.pl website', () => {
    cy.visit('https://www.cashless.pl')
    cy.get('.col-sm-2 > .modal-btns > .search').should('contain','SZUKAJ')
});