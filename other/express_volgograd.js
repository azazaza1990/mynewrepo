describe('Экспресс Волгоград', function() {
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
          .type('votevitaku@providier.com')
          .should('value', 'votevitaku@providier.com')
      cy.get('#app > div._wrapper_owfcp_1 > div > form > div:nth-child(2) > input')
          .click()
          .type('123456')
      cy.get('#app > div._wrapper_owfcp_1 > div > form > p > button')
          .click()
})

//Цена город компания
   it('gorod and company', function() {
      cy.get('._container_1k0mk_7 > :nth-child(3)')
          .contains(',00')
          .should('be.visible')
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

//Оформить заказ
   it('add and order', function() {
     cy.get(':nth-child(1) > [style="width: 8rem;"] > .btn')//Положить в корзину
         .click( {waitForAnimations: false} )
     cy.get('div:nth-child(10) > button.btn.btn-success._callButton_909cd_25')//Кнопка звонка
         .should('not.be.visible')
     cy.get('._cart_lp3qm_1 > ._icon_saydd_1')//Корзина в шапке
         .click( {waitForAnimations: false} )
     cy.get('._container_1k0mk_7')
         .contains('товары на сумму')
         .should('be.visible')
     cy.get('._container_1k0mk_7')
         .contains('Оформить заказ')
         .click( {waitForAnimations: false} )
     cy.wait('@ee')
     cy.get('._code_1frsw_25 > div > .form-control')//Поле телефон
         .click()
         .type('1234567891')
         .should('value', '+7 (123) 456-78-91')
     cy.get('body')
         .contains('Отправить смс с кодом подтверждения')
         .click()
     cy.get('#order-code')
         .click()
         .type('123456')
     cy.get('body')
         .contains('Отправить код подтверждения')
         .click()
     cy.get('body')
         .contains('Заказ оформлен, спасибо!')
         .should('be.visible')
})

//История заказов
   it('history', function() {
     cy.get('._wrapper_1k0mk_1')
         .contains('votevitaku@providier.com')
         .click()
     cy.get('._modal_v4kgj_21')
         .contains('История заказов')
         .click()
     cy.get('._container_1k0mk_7')
         .contains('Новый')
         .should('be.visible')
})

//Смена пароля
   it('change password', function() {
     cy.get('._wrapper_1k0mk_1')
         .contains('votevitaku@providier.com')
         .click()
     cy.get('[placeholder="Новый пароль (не менее 6 символов)"]')
         .click()
         .type('123456')
     cy.get('[placeholder="Повтор нового пароля"]')
         .click()
         .type('123456')
     cy.get('._modal_v4kgj_21')
         .contains('Сохранить')
         .click()
     cy.get('._modal_v4kgj_21')
         .contains('Пароль успешно изменен')
         .should('be.visible')
})

})


