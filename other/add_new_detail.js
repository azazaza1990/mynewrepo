//Главная страница, авторизация
var mail = '#form-email'
var pass = '#form-password'
var enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'
//Добавляем новую деталь
var prihod_menu = '.sidebar__menu > :nth-child(4) > :nth-child(1) > .ng-binding'//Приходные накладные
var add_prihod = 'span.ng-scope > .btn'//Кнопка добавить приходную накладную
var add_detail = 'header.ng-scope > span.ng-scope > .btn'//Кнопка Добавить деталь в приходной
var edit_detail = '.modal-body'//Окно редактирования детали
var group = 'div:nth-child(1) > div.fields > div:nth-child(1) > div > div:nth-child(1) > div'//Поле группа в окне ред.
var nomination = 'div.fields > div:nth-child(2) > div > div:nth-child(1) > div'//Поле наименование в окне ред.
var amount = '#form-quantity'//Поле количества деталей
var add_edit_detail = '.col-sm-9 > .btn'//Кнопка добавить деталь в окне ред.
//Список моделей в окне ред.
var pick_car = 'div:nth-child(2) > div.panel-body.ng-scope > div > form > div:nth-child(1) > div:nth-child(2) > div'//Выбор марки авто в окне ред.
var pick_model = 'div > form > div:nth-child(1) > div:nth-child(3)'//Выбор модели в окне ред.
var pick_number = 'div:nth-child(2) > div.panel-body.ng-scope > div > form > div:nth-child(2) > div.col-sm-8 > div'//Выбор номера модели в окне ред.
var add_car = ':nth-child(2) > .col-sm-4 > .btn'//Кнопка добавить в списке выбора авто в окне ред.
//Поле дефект
var defect = 'div.panel.panel-default.ng-scope.ng-binding > div.panel-body.ng-scope > form > div > div.col-sm-8 > div'//Поле выбора дефекта в окне ред.
var add_defect = '.panel-body > form.ng-valid > .row > .col-sm-4 > .btn'//Кнопка добавить дефект в окне ред.
var close_edit = '.popup__close'//Закрыть окно ред.fdf
//Подтверждаем деталь
var checkbox_all_detail = 'div.collectionTable__wrapper > div > div > table > thead > tr > th:nth-child(2) > label > div'//Чекбокс в приходных деталях
var submit_detail = '[actions="confirmActions"] > .btn'//Кнопка пдтвердить в приходной накладной
//Оцениваем деталь
var price_menu = ':nth-child(2) > .nav > :nth-child(2) > .ng-binding'//Неоценне
var car_type = '#filter-type'//Поле грузовые-легковые
var car_content = '#content'//Поля марка модель и номер авто (поиск тоже)ds5454
var success = '.pull-right > .btn-success'//Кнопка применить (поиск тоже)
var details = '.collectionTable__container'//Область с найденными деталями (поиск тоже)
var detail_profile = '.app__content'//Профиль детали
var set_price = 'p.ng-scope > span.ng-scope > [ng-click="click(0)"]'//Кнопка оценить в профиле детали
var selling_price = '#form-sellingPrice'//Цена продажи
var purchase_price = '#form-purchasePrice'//Цена покупки
var save = '.form__input > .btn'//Кнопка сохранить в окне оценить деталь
var info_detail = '.partsView__info'//Информация в профиле о деталицукцууцкц

var magaz_detail = 'https://magaz.apgrup.ru/cars/audi/a3/a3-8pa-2004-2013/dvigatel/absorber-filtr-ugolnyy/00022112180012/'

describe("добавление детали в систему", function() {
   before('cookie', function() {
      cy.setCookie('guid-1', '%7BF297B6FE-1AA5-EB18-DA2F-5F9037E08528%7D')
      cy.server();
      cy.route('GET', 'https://api.apgrup.ru/app_dev.php/v1/*')
          .as('ww')

  })

    it("visit apgrup", function() {
      cy.visit("https://apgrup.ru")

      cy.get(mail)
          .click()
          .clear()
          .type('ra-nt-office@yandex.ru')
      cy.get(pass)
          .click()
          .clear()
          .type('123456')
      cy.get(enter)
          .click()
           cy.wait('@ww')
           cy.wait('@ww')

 })

    it('pick ruusian village', function(){
      cy.get('#storageSelect')
          .select('РУССКАЯ ДЕРЕВНЯ')

})

    it('add new detail', function() {
      cy.get('body > div.app > div > div.sidebar.ng-scope.sidebar--active > div.sidebar__content')
          .contains('Приходные накладные')
          .click({force:true})
      cy.get(add_prihod)
          .click()
      cy.get(add_detail)
          .click()
      cy.get(edit_detail)
          .contains('Информация о детали')
          .should('be.visible')
      cy.get(group)
          .click()
          .contains('Двигатель')
          .click()
      cy.get(nomination)
          .click()
          .contains('Абсорбер')
          .click()
      cy.get(amount)
          .click()
          .type('1')
          .should('value', '1')
      cy.get(add_edit_detail)
          .click()

})

    it('add new car', function() {
      cy.get(pick_car)
          .click()
          .contains('Audi')
          .click()
          cy.get(pick_model)
          .click()
          .contains('A3')
          .click()
      cy.get(pick_number)
          .click()
          .contains('A3 [8PA] 2004-2013')
          .click()
      cy.get(add_car)
          .click()
      cy.get('tbody > tr.ng-scope > :nth-child(3)')// область для прокерки поколения авто на видимость после добавления к детали в окне ред.
          .contains('A3 [8PA] 2004-2013')
          .should('be.visible')

})

    it('add defeсt', function() {
      cy.get(defect)
          .click()
          .contains('Дефект корпуса')
          .click()
      cy.get(add_defect)
          .click()
      cy.get('.panel.ng-binding > .table > tbody > tr.ng-scope > .ng-binding')//Область с названием добавленного дефекта в коне ред.
          .contains('Дефект корпуса')
          .should('be.visible')
      cy.get(close_edit)
          .click()
          cy.wait(4000)

})

    it('submit detail', function() {
      cy.get(checkbox_all_detail)
          .click()
      cy.get(submit_detail)
          .click( {force:true} )

})

    it('add price', function() {
      cy.get('#content > div')
          .contains('Абсорбер')
          .click()
          cy.wait(4000)
      cy.get('.app__content')
        .contains('Оценить')
        .click()
      cy.get('#form-purchasePrice')
          .click()
          .type('777')
      cy.get('#form-sellingPrice')
          .click()
          .type('777')
      cy.get('body > div.popup_stack.popup_stack--opened > div.modal.popup_stack__wrapper.fade.ng-scope.ng-isolate-scope.in > div > div')
          .contains('Сохранить')
          .click()
          cy.wait(4000)
      cy.get('#content > div > ui-view > div.partsView__wrapper.ng-scope')
          .contains('Открыть в магазине')
          .click()
})

    /*it('go to magaz', function() {
      cy.visit(magaz_detail)
      cy.get('#search-page > div > div._2OVU > div._444m > div.awAG')
          .contains('777')
          .should('be.visible')
      cy.get('#search-page > div > div._2OVU > div._444m > div.awAG')
          .contains('Купить')
          .should('be.visible')

    })*/

})
