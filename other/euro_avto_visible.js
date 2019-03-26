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
var close_edit = '.popup__close'//Закрыть окно ред.
//Подтверждаем деталь
var checkbox_all_detail = 'div.collectionTable__wrapper > div > div > table > thead > tr > th:nth-child(2) > label > div'//Чекбокс в приходных деталях
var submit_detail = '[actions="confirmActions"] > .btn'//Кнопка пдтвердить в приходной накладной
//Оцениваем деталь
var price_menu = ':nth-child(2) > .nav > :nth-child(2) > .ng-binding'//Неоценненые
var car_type = '#filter-type'//Поле грузовые-легковые
var car_content = '#content'//Поля марка модель и номер авто (поиск тоже).Так же все поля в предзаказе(имя телефон)
var success = '.pull-right > .btn-success'//Кнопка применить (поиск тоже)
var details = '.collectionTable__container'//Область с найденными деталями (поиск тоже)
var detail_profile = '.app__content'//Профиль детали
var set_price = 'p.ng-scope > span.ng-scope > [ng-click="click(0)"]'//Кнопка оценить в профиле детали
var selling_price = '#form-sellingPrice'//Цена продажи
var purchase_price = '#form-purchasePrice'//Цена покупки
var save = '.form__input > .btn'//Кнопка сохранить в окне оценить деталь
var info_detail = '.partsView__info'//Информация в профиле о детали

//Предзаказ
var preorder_menu = ':nth-child(16) > .nav > :nth-child(1) > .ng-binding'//Меню предзаказа
var create = '#content > div > ui-view > div > div > div > div > div > div > form > div.form__row.ng-scope > div.form__input > button'//Создать предзаказ
var name = '#form-name'//Поле имя в предзаказе
var source = 'div.fields > div:nth-child(3) > div > div:nth-child(1) > div'//Поле источник
var phone = '#form-phoneNumber'//Поле для ввода телефона
var quick_search = '#quickSearch'//Быстрый поиск
var content_quick_search = '.partsQuickSearch__content'//Быстрый поиск открыт
//var pick_car_quick = '.partsQuickSearch__content'//Поле машина в быстром поиске
var para = ':nth-child(15) > :nth-child(2) > a'

describe('Create an order', function() {
   beforeEach('cookie', function() {
      cy.clearCookies()
      cy.setCookie('guid-1', '%7B1A56F728-E62E-2AA6-9659-EAAE1FB5D74B%7D')
      cy.server();
      cy.route('GET', 'https://api.apgrup.ru/app_dev.php/v1/*')
          .as('ww')

  })

    it('visit apgrup', function() {
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
          .contains('РУССКАЯ ДЕРЕВНЯ')

})

    it('preorder', function() {
      cy.get('.sidebar__menu')
          .contains('Добавить предзаказ')
          .click()
      cy.get(create)
          .contains('Создать')
          .click()
      cy.get('.fields > :nth-child(1)')//Уведомление под полем ввода имя
          .contains('Поле обязательно для')
          .should('be.visible')
      cy.get(name)
          .click()
          .clear()
          .type('Roman')
          .should('value', 'Roman')
      cy.get('.fields > :nth-child(3)')//Уведомление по полем ввода источника
          .contains('Поле обязательно для')
          .should('be.visible')
      cy.get(source)
          .click()
      cy.get('div.inputPopup.ng-scope > div > div > ul > li:nth-child(1)')//Другое
          .click()
      cy.get(create)
          .click()
      cy.get(phone)
          .click()
          .clear()
          .type('79992070525')
          .should('value', '+79992070525')
      cy.get(create)
          .click()
        cy.wait(5000)
      cy.get(car_content)
          .contains('Предзаказ №')
          .should('be.visible')
          cy.wait(3000)
      cy.get('.callView__form > .panel > .panel-body')//Поле имя
          .contains('Roman')
          .should('be.visible')
      cy.get('#form-description')//Поле сообщение*
          .click()
          .type('test')

})

//Поиск и добавление детали
      it('Search and add detail', function() {
      cy.get(quick_search)
          .click()
      cy.get(content_quick_search)
          .contains('Свернуть')
          .should('be.visible')
      cy.get(':nth-child(1) > .row > :nth-child(1) > div.ng-scope > .form-control')
         .click()
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div')//Список марок в поле поиска
          .contains('Audi')
          .should('be.visible')
          .click( {force:true} )
      cy.get('.modal-body')
          .contains('A8')
          .should('be.visible')
          .click()
      cy.get('.modal-body')
          .contains('A8 [D4] 2010-2017')
          .should('be.visible')
          .click()
      cy.get('#content > div > ui-view > div:nth-child(4) > div > div > div.draggableWindow__content > ng-transclude > div')
          .contains('Audi')
          .should('be.visible')
      cy.get('[style="margin-bottom: 20px"] > :nth-child(1) > .row > :nth-child(2) > div.ng-scope > .form-control')//Поле наименование
          .click( {force:true} )
      cy.get('.modal-body')
          .contains('Система охлаждения')
          .click( {force:true} )
      cy.get('.modal-body')
          .contains('Патрубок')
          .click( {force:true} )
      cy.get('[style="margin-bottom: 20px"] > :nth-child(1) > .row > :nth-child(2) > [field="field"] > .form-control')
          .contains('Система охлаждения')
      cy.get('.pull-right > .btn-success')//Кнопка применить во всплывающем поиске
          .click( {force:true} )
          cy.wait(5000)
      cy.get('#content > div > ui-view > div:nth-child(4) > div > div > div.draggableWindow__content > ng-transclude > div > div:nth-child(2) > div.collection__footer')
          .contains('Всего: 0')
          .should('be.visible')
      cy.get('#content > div > ui-view > div:nth-child(4) > div > div > div.draggableWindow__content > ng-transclude > div')
          .contains('Добавить')
          .click( {force:true} )
      cy.get('.draggableWindow__close')
          .click( {force:true} )
      cy.get('.app__content')
          .contains('Патрубок')
          .should('be.visible')
  })
})
