describe('Экспресс новый юзер', function() {
  beforeEach('cookie', function() {
  cy.server()
      cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v2/partnames/existing')
          .as('ww')
      cy.route('GET', 'https://api-express.apgrup.ru/app_dev.php/v1/checkspam/sms?type=alfadetali')
          .as('ee')
})

      it('visit', function() {
      cy.clearCookies()
      cy.visit('https://express.apgrup.ru')
})

//Авторизация
   it('auth', function() {
      cy.get('#app > div._wrapper_owfcp_1 > div > form > div:nth-child(1) > input')
          .click()
          .type('nokenivune@datasoma.com')
          .should('value', 'nokenivune@datasoma.com')
      cy.get('#app > div._wrapper_owfcp_1 > div > form > div:nth-child(2) > input')
          .click()
          .type('123456')
      cy.get('#app > div._wrapper_owfcp_1 > div > form > p > button')
          .click()
})

//Цена город компания
   it('gorod and company', function() {
      cy.get(':nth-child(1) > [style="width: 8rem;"] > div > .btn')
          .click( {force:true} )
      cy.get('._total_lp3qm_11')
          .contains('0')
          .should('be.visible')
      cy.get('._container_1k0mk_7 > :nth-child(3)')
          .contains(',00')
          .should('not.be.visible')
      cy.get(':nth-child(1) > [style="width: 164px;"] > .link')
          .click( {force:true} )
      cy.get('._modal_v4kgj_21')
          .contains('Компания')
          .should('not.be.visible')
      cy.get('._modal_v4kgj_21')
          .contains('Город')
          .should('not.be.visible')
      cy.get('._modal_v4kgj_21')
          .contains('Показать телефон')
          .should('not.be.visible')
      cy.get('.clear')
          .click()
})

})
