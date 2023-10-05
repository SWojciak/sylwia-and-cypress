describe('visits nexo grawer website', () => {
    it('check initial state', () => {
        cy.visit('http://nexwell.technologpark.net/~webapp/grawer/#/')
        cy.get('.ng-binding').should('contain', 'Generator WPP/WPP LCD/WPP OLED/WPX grawer')
        cy.get('.ng-binding').should('contain', 'ZŁÓŻ ZAMÓWIENIE')
        cy.get('h6').should('contain', 'WPP OLED+')
        cy.get('h6').should('contain', 'Zapisz')
        cy.get('b').should('contain', 'Razem 1')
        cy.get('h5').should('contain', 'UWAGA: Aby zamówienie zostało przyjęte należy kliknąć w przycisk ZŁÓŻ ZAMÓWIENIE, wypełnić formularz i kliknąć w link otrzymany mailem.')
    });
    it('add WPP LCD', () => {
        cy.get('[ng-click="project.addWPPLCD(\'black\')"]').click()
        cy.get('[ng-view] > ul > li').should('have.length', 2)
        cy.get('.ng-binding.ng-scope > .ng-binding').should('contain', 'Razem 2')
        cy.get('.ng-binding.ng-scope').should('contain', 'lość urządzeń: WPP: 1 | WPP LCD: 1 | WPP OLED: 0 | WPP OLED+: 0 | WPX: 0')
    });
    it('remove WPP LCD', () => {
        cy.get('[ng-view] li:nth-of-type(2) [src=\'img/bin.png\']').click()
        cy.get('[ng-view] > ul > li').should('have.length', 1)
        cy.get('.ng-binding.ng-scope > .ng-binding').should('contain', 'Razem 1')
        cy.get('.ng-binding.ng-scope').should('contain', 'lość urządzeń: WPP: 1 | WPP LCD: 0 | WPP OLED: 0 | WPP OLED+: 0 | WPX: 0')
    });
    it('copy WPP', () => {
        cy.get('[ng-view] li:nth-of-type(1) [src=\'img/copy-wpp.png\']').click()
        cy.get('[ng-view] > ul > li').should('have.length', 2)
        cy.get('.ng-binding.ng-scope > .ng-binding').should('contain', 'Razem 2')
        cy.get('.ng-binding.ng-scope').should('contain', 'lość urządzeń: WPP: 2 | WPP LCD: 0 | WPP OLED: 0 | WPP OLED+: 0 | WPX: 0')
    });
    it('remove WPP', () => {
        cy.get('[ng-view] li:nth-of-type(2) [src=\'img/bin.png\']').click()
        cy.get('[ng-view] > ul > li').should('have.length', 1)
        cy.get('.ng-binding.ng-scope > .ng-binding').should('contain', 'Razem 1')
        cy.get('.ng-binding.ng-scope').should('contain', 'lość urządzeń: WPP: 1 | WPP LCD: 0 | WPP OLED: 0 | WPP OLED+: 0 | WPX: 0')
    });
    it('change colour', () => {
        cy.get('[ng-view] li:nth-of-type(1) [src=\'img/wpp_white.png\']').should('exist')
        cy.get('[ng-view] li:nth-of-type(1) [src=\'img/wpp_black.png\']').should('not.exist')
        cy.get('[ng-view] li:nth-of-type(1) [src=\'img/change-wpp.png\']').click()
        cy.get('[ng-view] li:nth-of-type(1) [src=\'img/wpp_white.png\']').should('not.exist')
        cy.get('[ng-view] li:nth-of-type(1) [src=\'img/wpp_black.png\']').should('exist')
    });
    it('change pattern', () => {
        cy.get('[href=\'#/edit/0/icon/0\'] > [src=\'icons/2x1/lighting-001.svg\']').should('exist')
        cy.get('[href=\'#/edit/0/icon/0\'] > [src=\'icons/2x1/symbols-005.svg\']').should('not.exist')
        cy.get('[ng-view] li:nth-of-type(1) [src=\'img/pattern-wpp.png\']').click()
        cy.get('[ng-view] li:nth-of-type(1) [ng-click=\'project.setPattern(device,\\\'dots\\\')\'] > a').click()
        cy.get('[href=\'#/edit/0/icon/0\'] > [src=\'icons/2x1/lighting-001.svg\']').should('not.exist')
        cy.get('[href=\'#/edit/0/icon/0\'] > [src=\'icons/2x1/symbols-005.svg\']').should('exist')
    });
    it('change icon', () => {
        cy.get('[href=\'#/edit/0/icon/0\'] > [src=\'icons/2x1/symbols-005.svg\']').should('exist')
        cy.get('[href=\'#/edit/0/icon/0\'] > [src=\'icons/2x1/symbols-005.svg\']').click()
        cy.get('[ng-src=\'icons/2x1/alarm-001.svg\']').click()
        cy.get('[href=\'#/edit/0/icon/0\'] > [src=\'icons/2x1/alarm-001.svg\']').should('exist')
    });
    
    it('download project', () =>{
        cy.get('#save > img').click()
    })
    it.skip('upload project', () => {
        cy.get("#upload").selectFile('cypress.json')
    });
});