it ('visits santander.pl webiste' , () => {
    cy.visit('https://santander.pl')
    cy.get('#privacy-prompt-controls-button-accept').click();
    cy.get('.header__segments > .list > .item_1').should('contain','Klient indywidualny')
    cy.get('.header__logo--desktop').should('exist')
    cy.get('.has_second_level_component').should('contain','Oferta')
    cy.get('.header__navigation-element > :nth-child(1) > :nth-child(2) > .acn-ga-link > span').should('contain','Promocje')
    cy.get('.top_visual_with_description__apla-badge').should('contain','Promocje')




});