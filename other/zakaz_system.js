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
      cy.setCookie('guid-1', '%7BF297B6FE-1AA5-EB18-DA2F-5F9037E08528%7D')
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
      cy.get(preorder_menu)
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
          .contains('Honda')
          .should('be.visible')
          .click( {force:true} )
      cy.get('.modal-body')
          .contains('CR-V')
          .should('be.visible')
          .click()
      cy.get('.modal-body')
          .contains('CR-V c 2012 г.')
          .should('be.visible')
          .click()
      cy.get('.modal-body')
          .contains('Honda')
          .should('be.visible')
      cy.get('[style="margin-bottom: 20px"] > :nth-child(1) > .row > :nth-child(2) > div.ng-scope > .form-control')//Поле наименование
          .click( {force:true} )
      cy.get('.modal-body')
          .contains('Кузов наружные элементы')
          .click( {force:true} )
      cy.get('.modal-body')
          .contains('Бампер передний')
          .click( {force:true} )
      cy.get('[style="margin-bottom: 20px"] > :nth-child(1) > .row > :nth-child(2) > [field="field"] > .form-control')
          .contains('Кузов наружные')
      cy.get('.pull-right > .btn-success')//Кнопка применить во всплывающем поиске
          .click( {force:true} )
          cy.wait(5000)
      cy.get('[data="collection"] > .collection__wrapper > .collectionTable--padding > .collectionTable__wrapper > .collectionTable__container > .collectionTable__table > .table > tbody > :nth-child(1) > :nth-child(2) > .partsQuickSearch__toOrder')
          .click()
      cy.get('body > div.popup_stack.popup_stack--opened > div.modal.popup_stack__wrapper.fade.ng-scope.ng-isolate-scope.in > div > div > div > div > div > div.panel-body > form > div.form__row.ng-scope > div > button')
          .click()
      cy.get('.draggableWindow__close')//Закрываем окно по поиску деталей
          .click( {force:true} )
          cy.wait(3000)


//})

//Создаем заказ
     //it('Create an order', function() {
      cy.get('#content > div > ui-view > div:nth-child(4) > div > div > div.draggableWindow__close.fa.fa-times')
          .click( {force:true} )
      cy.get('span.ng-scope > .btn-primary')//Кнопка создать заказ
          .contains('Создать заказ')
          .click()
      cy.wait(3000)
      cy.get('.modal-footer')
          .contains('Создать')
          .click()
        cy.wait(3000)

})
//Создаем заявку на перемещение
    it('moving', function() {
      cy.get('.pull-right > span.ng-scope > [ng-click="click(0)"]')//создать заявки на перемещение
          .click( {force:true} )
      cy.get('.modal-footer > .btn')
          .contains('Создать')
          .click( {force:true} )
      cy.get('#content > div > ui-view > div:nth-child(4) > ul')//переходим в заявки на перемещение
          .contains('Заявки на перемещение')
          .click( {force:true} )
      cy.wait(3000)

})
//Закрываем заявку на перемещение
    it('close moving', function() {
      cy.get('[filter-fields="$parent.undefined"] > .collection__wrapper > .collectionTable > .collectionTable__wrapper > .collectionTable__container > .collectionTable__table > .table > tbody > :nth-child(1) > :nth-child(2)')
          .contains('0')
          .click()
      cy.get('p.ng-scope > span.ng-scope > .btn-success')
          .click()
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div.modal-dialog.modal-sm > div > div > div.modal-footer.ng-scope')
          .contains('Отправить')
          .click( {waitForAnimations:true} )
          cy.wait(5000)
          //бургер
      cy.get('#content > div > ui-view > div:nth-child(4) > div > div.ng-scope > div.collection__wrapper.collection__wrapper--panel > div.collectionTable.ng-scope > div.collectionTable__wrapper > div > div > table > tbody > tr > td.collectionTable__popover-wrapper > div > span')
          .click( {force:true} )
      cy.get('body > div.contextPopover.contextPopover--left')
          .contains('Подтвердить наличие')
          .click()
      cy.get('body > div.popup_stack.popup_stack--opened > div.modal.popup_stack__wrapper.fade.ng-scope.ng-isolate-scope.in > div > div')
          .contains('Сохранить')
          .click()
      cy.get('#content > div > ui-view > div:nth-child(4) > div > div.ng-scope > div.collection__wrapper.collection__wrapper--panel > div.collectionTable.ng-scope > div.collectionTable__wrapper')
          .contains('Да')
          .should('be.visible')
      cy.get('#content > div')
          .contains('Парная')
          .click()
      cy.get('#content > div')
          .contains('Подтвердить')
          .click()
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div.modal-dialog.modal-sm > div > div > div.modal-footer.ng-scope')
          .contains('Подтвердить')
          .click()
          cy.wait(5000)
      cy.get('#content > div')
          .contains('Парная')
          .click()
      cy.get('#content > div')
          .contains('Заказать отгрузку')
          .click()
          cy.wait(5000)
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div.modal-dialog.modal-sm > div > div > div.modal-footer.ng-scope')
          .contains('Заказать отгрузку')
          .click()
          cy.wait(5000)
      cy.get('#content > div')
          .contains('Парная')
          .click()
      cy.get('#content > div')
          .contains('Отгрузить')
          .click()
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div.modal-dialog.modal-sm > div > div > div.modal-footer.ng-scope')
          .contains('Отгрузить')
          .click()
          cy.wait(5000)
      cy.get('#content > div')
          .contains('Парная')
          .click()
      cy.get('#content > div')
          .contains('Закрыть')
          .click()
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div.modal-dialog.modal-sm > div > div > div.modal-footer.ng-scope')
          .contains('Закрыть')
          .click()
      cy.get(':nth-child(14) > :nth-child(2) > a')
          .click( {force:true} )
          cy.wait(3000)
})
//Совершаем платеж
   it('pay', function() {
      /*cy.get(':nth-child(14) > :nth-child(2) > a')//Берем номер заявки
          .click( {force:true} )
          cy.wait(3000)*/
      cy.get(':nth-child(4) > .nav > :nth-child(8) > a')//Платежи
          .click( {waitForAnimations: false} )
      cy.get('.tab-pane.active > .panel.ng-scope > [ng-transclude="beforeTable"] > before-table.ng-scope > .panel-body > span.ng-scope > .btn')//Добавить платеж
          .click()
      cy.get('body > div.popup_stack.popup_stack--opened > div.modal.popup_stack__wrapper.fade.ng-scope.ng-isolate-scope.in > div > div > div > div > div > div.panel-body > form > div:nth-child(1) > div.fields > div:nth-child(1) > div > div:nth-child(1) > div > div.inputPopup.ng-scope > div')
          .click( {force:true} )
      cy.get('body > div.popup_stack.popup_stack--opened > div.modal.popup_stack__wrapper.fade.ng-scope.ng-isolate-scope.in > div > div > div > div > div > div.panel-body > form > div:nth-child(1) > div.fields > div:nth-child(1) > div > div:nth-child(1) > div > div.inputPopup.ng-scope > div > div > ul > li:nth-child(1)')
          .click( {force:true} )
      cy.get('#form-summ')
          .click()
          .type('956')
      cy.get('.form__input > .btn')
          .click()
          cy.wait(4000)
      cy.get('#content > div > ui-view > div:nth-child(4) > div > div.tab-pane.active > div > div:nth-child(3) > div.collection__wrapper.collection__wrapper--panel > div.collectionTable.ng-scope > div.collectionTable__wrapper > div > div > table > tbody > tr > td.collectionTable__popover-wrapper > div > span')
          .click()
      cy.get('.contextPopover')
          .contains('Подтвердить')
          .click()
      cy.get('.modal-footer > .btn')
          .click( {force:true} )
          cy.wait(5000)
      cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .collection__wrapper > .collectionTable > .collectionTable__wrapper > .collectionTable__container > .collectionTable__table > .table > tbody > tr.ng-scope > :nth-child(7)')
          .contains('Да')
          .should('be.visible')
})
   it('delivery', function() {
      cy.get(':nth-child(4) > .nav')
        .contains('Доставки')
        .click()
      cy.get('.tab-pane.active > .panel.ng-scope > [ng-transclude="beforeTable"] > before-table.ng-scope > .panel-body > span.ng-scope > .btn')
        .click()
      cy.get('#form-summ')
        .click()
        .type('1000')
      cy.get('.popup__inner')
        .contains('Создать')
        .click()
        cy.wait(3000)
      cy.get('#content > div > ui-view > div:nth-child(4) > div > div.tab-pane.active > div > div:nth-child(3) > div.collection__wrapper.collection__wrapper--panel > div.collectionTable.ng-scope > div.collectionTable__wrapper > div > div > table > tbody > tr > td.collectionTable__popover-wrapper > div > span')
        .click()
      cy.get('body > div.contextPopover.contextPopover--left')
        .contains('Добавить к счету')
        .click()
      cy.get('body > div.popup_stack.popup_stack--opened > div.modal.popup_stack__wrapper.fade.ng-scope.ng-isolate-scope.in > div > div')
        .contains('Выбрать')
        .click()
      cy.get('#content > div > ui-view > div:nth-child(4) > div > div.tab-pane.active > div > div:nth-child(3) > div.collection__wrapper.collection__wrapper--panel > div.collectionTable.ng-scope > div.collectionTable__wrapper > div > div > table > tbody > tr > td.collectionTable__popover-wrapper > div > span')
        .click()
      cy.get('body > div.contextPopover.contextPopover--left')
        .contains('Добавить к расходной накладной')
        .click()
        cy
      cy.get('body > div.popup_stack.popup_stack--opened > div.modal.popup_stack__wrapper.fade.ng-scope.ng-isolate-scope.in > div > div')
        .contains('Выбрать')
        .click()
})
   it('rashod', function() {
      cy.get(':nth-child(4) > .nav')
        .contains('Прикрепленные детали')
        .click()
      cy.get('.panel.ng-scope > .panel-body')
        .contains('Добавить к расходной накладной')
        .click( {force:true} )
      cy.get('body > div.popup_stack.popup_stack--opened > div.modal.popup_stack__wrapper.fade.ng-scope.ng-isolate-scope.in > div > div')
        .contains('Создать')
        .click()
        cy.wait(4000)
      cy.get('.collectionTable__body-label > .inputBoolean > .inputBoolean__checkbox')
        .click()
      cy.get('.modal-footer')
        .contains('Добавить в расходную накладную')
        .click()
      cy.get('.modal-content > :nth-child(1) > .modal-footer')
        .contains('Добавить')
        .click()
      cy.get(':nth-child(4) > .nav')
        .contains('Расходные накладные')
        .click( {force:true} )
        cy.wait(4000)
      cy.get('#content > div > ui-view > div:nth-child(4) > div > div.tab-pane.active > div > div:nth-child(3) > div.collection__wrapper.collection__wrapper--panel > div.collectionTable.ng-scope > div.collectionTable__wrapper > div > div > table > tbody > tr > td:nth-child(2) > a')
        .click()
      cy.get('.app__content')
        .contains('Подтвердить')
        .click()
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div.modal-dialog.modal-sm > div > div > div.modal-footer.ng-scope')
        .contains('Подтвердить')
        .click()
      cy.get('#content > div')
        .contains('Оплатить')
        .click()
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div.modal-dialog.modal-sm > div > div > div.modal-footer.ng-scope')
        .contains('Оплатить')
        .click()
      cy.get('#content > div')
        .contains('Отгружено')
        .click()
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div.modal-dialog.modal-sm > div > div > div.modal-footer.ng-scope')
        .contains('Подтвердить')
        .click()
      cy.get('#content > div')
        .contains('Оплачен')
        .should('be.visible')
      cy.get('#content > div > ui-view > div.row.ng-scope > div.col-md-8.col-lg-8 > div > table > tbody > tr:nth-child(12) > td:nth-child(2) > a')
        .click({force:true})
      cy.ge
   })
})
