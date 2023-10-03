it('visits nexo grawer website' , () => {
    cy.visit('http://nexwell.technologpark.net/~webapp/grawer/#/')
    cy.get('.ng-binding').should('contain','Generator WPP/WPP LCD/WPP OLED/WPX grawer')
    cy.get('.ng-binding').should('contain','ZŁÓŻ ZAMÓWIENIE')
    cy.get('h6').should('contain','WPP OLED+')
    cy.get('h6').should('contain','Zapisz')
    cy.get('b').should('contain','Razem 1')
    cy.get('h5').should('contain','UWAGA: Aby zamówienie zostało przyjęte należy kliknąć w przycisk ZŁÓŻ ZAMÓWIENIE, wypełnić formularz i kliknąć w link otrzymany mailem.')
   
    cy.get('[ng-click="project.addWPP(\'black\')"]').click()

});