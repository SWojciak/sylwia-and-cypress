it('Test usuwania kilku kolumn', () => {
    cy.visit('http://kanbanboard.pl/')
    cy.get(':nth-child(3) > .btn-delete').click();
    cy.get(':nth-child(2) > .btn-delete').click();
    cy.get(':nth-child(1) > .btn-delete').first().click();
});

it('Test dodawania nowej kolumny', () => {
    cy.visit('http://kanbanboard.pl/');
    cy.get('.create-column').click();

        cy.get('[name="prompt"]').click();
});