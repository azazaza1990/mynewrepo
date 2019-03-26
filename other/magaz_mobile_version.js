/*var бургер;
бургер = ':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP'*/

describe('mobile version magaz', function() {

    it('visit', function() {
    cy.clearCookies()
    cy.visit('https://magaz.apgrup.ru/')


//Переход на мобильную версию, убеждаемся что бургер отображается
      cy.get('._1rlq').contains('Мобильная версия')
          .click()
      cy.get(':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
          .should('be.visible')


//Идем в раздел личный кабинет и восстанавливаем пароль, проверка регистрации.
      cy.get (':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
          .click()
      cy.get('._3w0n > :nth-child(1)')
          .contains('Личный кабинет')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('Вход')
          .should('be.visible')
      cy.get('[data-reactroot=""]')
          .contains('Войти')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('Введите эл. почту')
          .should('be.visible')
      cy.get('[data-reactroot=""]')
          .contains('Введите пароль')
          .should('be.visible')
      cy.get('[data-reactroot=""]')
          .contains('Забыли пароль?')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('Восстановление пароля')
          .should('be.visible')
      cy.get('.wQHd > .cNzu > ._2l3F')
          .click()
          .type('xikefa@cliptik.net')
    /*cy.get('form > ._3Zzt')
          .contains('Восстановить')
          .click() // КАПЧА!!!!
      cy.get('html')
          .contains('На ваш почтовый ящик было отправлено письмо')
          .should('be.visible')*/


//Регистрация
      cy.get (':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
          .click()
      cy.get('._3w0n > :nth-child(1)')
          .contains('Личный кабинет')
          .click()
      cy.get('[href="/register"]')
          .contains('Регистрация')
          .click()
      cy.get('._1VYP > :nth-child(1)')
          .contains('Эл.почта')
          .should('be.visible')
      cy.get('form > :nth-child(1) > .cNzu > ._2l3F')
          .click()
          .type('gg@ya.ru')
          .should('value', 'gg@ya.ru')
      cy.get('._1VYP > :nth-child(1)')
          .contains('Пароль*')
          .should('be.visible')
      cy.get(':nth-child(2) > .cNzu > ._2l3F')
          .click()
          .type('111111')
          .should('value', '111111')
      cy.get('form > ._3Zzt')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('Вы не согласились с пользовательским соглашением')
          .should('be.visible')
    /*cy.get('._3b2P')
        .contains('checkbox')*/ // хз как поставить галочку в чекбокс


//Гуляем по разделам
      cy.get(':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
        .click()
      cy.get('._3w0n > :nth-child(1)')
          .contains('Корзина')
          .click()
      cy.get('html')
          .contains('Корзина пуста')
          .should('be.visible')
      cy.get(':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
        .click()
      cy.get('[href="/check_order"]')
          .contains('Что с моим заказом?')
          .click()
          cy.wait(2000)
      cy.get('._1VYP > :nth-child(1)')
          .contains('Введите номер заказа')
          .should('be.visible')
      cy.get('._3pmE > ._3Zzt')
          .click()
      cy.get('.tT7l')
          .contains('Введите номер заказа')
          .should('be.visible')
      cy.get('._2a4O > .cNzu > ._2l3F')
          .click()
          .type('1234567890')
          .should('value', '1234567890')
    /*cy.get('._3pmE > ._3Zzt')
        .click()//КАПЧА!!! при проверке статуса заказа
      cy.get('.tT7l')
        .contains('Заказ с таким номером не найден')
        .should('be.visible')*/


// бургер-главная страница-все марки
      cy.get(':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
          .click()
      cy.get('._3w0n > :nth-child(1)')
          .contains('Главная страница')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('Все марки')
          .should('be.visible')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('ZX')
          .should('be.visible')
      cy.get('[data-reactroot=""]')
          .contains('Грузовые')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('MAN')
          .should('be.visible')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('Neoplan')
          .should('be.visible')
      cy.get(':nth-child(1) > ._2WQY > span')
          .contains('Главная')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('Легковые')
          .click()
     cy.get('[data-reactroot=""]')
          .contains('Audi')
          .should('be.visible')
          .click()
     cy.get('[data-reactroot=""]')
          .contains('A3')
          .should('be.visible')


// О компании
     cy.get(':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
          .click()
     cy.get('._3w0n > :nth-child(1)')
          .contains('О компании')
          .click()
     cy.get('[data-reactroot=""]')
          .contains('Мы рады приветствовать вас')


// Доставка
          .should('be.visible')
     cy.get(':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
          .click()
     cy.get('._3w0n > :nth-child(1)')
          .contains('Доставка')
          .click()
     cy.get('[data-reactroot=""]')
          .contains('AlfaDetali осуществляет доставку Товара:')
          .should('be.visible')


// Как купить?
      cy.get(':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
          .click()
      cy.get('._3w0n > :nth-child(1)')
          .contains('Как купить?')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('Процедура покупки товара в интернет-магазине')
          .should('be.visible')


// Контактная информация
      cy.get(':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
          .click()
      cy.get('._3w0n > :nth-child(1)')
          .contains('Контактная информация')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('Адрес: Россия, 198095, Санкт-Петербург')
          .should('be.visible')


// Возврат и гарантия
      cy.get(':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
          .click()
      cy.get('._3w0n > :nth-child(1)')
          .contains('Возврат и гарантия')
          .click()
      cy.get('[data-reactroot=""]')
          .contains('Правила возврата Товара')
          .should('be.visible')


// Переход на полную версию сайта
      cy.get(':nth-child(2) > ._1WjC > label > ._3Zzt > .tysP')
          .click()
      cy.get('._3w0n > :nth-child(1)')
          .contains('Полная версия сайта')
          .click()
      cy.get('._1rlq')
          .contains('Вся информация, представленная на сайте alfadetali.ru')
          .should('be.visible')
    })
})
