it('visits dynak.com website' , () => {
    cy.visit('https://dynak.com')
    cy.get(':nth-child(1) > .styles_customNavlink__3pPFQ > .nav-link').should('contain','home')
    cy.get(':nth-child(2) > .styles_customNavlink__3pPFQ > .nav-link').should('contain','o nas')
    cy.get(':nth-child(3) > .styles_customNavlink__3pPFQ > .nav-link').should('contain','projekty')
    cy.get(':nth-child(4) > .styles_customNavlink__3pPFQ > .nav-link').should('contain','kontakt')
    cy.get('.styles_websiteTitle__5IGDV').should('contain','dynak.com')
    cy.get('.styles_mainPageContainer__382i6 > .text-center').should('contain','Zabieramy ludziom pracę!')
    cy.get('.styles_rodo__3wP3E').should('contain' ,'RODO')
});