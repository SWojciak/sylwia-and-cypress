it('visits prezydenthotel.pl website' , () => {
    cy.visit('https://prezydenthotel.pl')
    cy.get('.main').should('contain','Spokój na łonie natury')
    cy.get('.slider-video > .site-panel__btn').should('contain','Kup Voucher')

    cy.get('.cookieContent').should('be.visible')
    cy.get('.cookieButton > a').click()
    cy.get('.cookieContent').should('not.be.visible')

    cy.wait(5000)
    cy.get('.booster-app__close').click()


    
    cy.get('.phone').should('contain','601 454 969')      
    cy.get('.gift__link > .icon')

});