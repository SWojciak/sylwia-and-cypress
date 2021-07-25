it('zamyka okienko z informacją o wersji', () => {
    cy.visit('http://localhost:8080');
    cy.get('.inner-modal > p').should('contain', 'Aplikacja została zaktualizowana do wersji');
    cy.get('.inner-modal > button').click();
    cy.get('.inner-modal > p').should('not.exist');
    cy.get(':nth-child(1) > ._2ReL9t44eH3UuaK-vHW_2Z').click();
});
