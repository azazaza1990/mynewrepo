var mail = '#form-email'
var pass = '#form-password'
var enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'

describe("Rashod", function() {
   beforeEach('cookie', function() {
      cy.setCookie('guid-1', '%7BD9AD05E2-2345-B16A-3E61-8593AF2A620A%7D');
  })

   it("Auth", function() {
      cy.visit("https://apgrup.ru/orders/53223/");

      cy.get(mail).click().clear().type('ra-nt-office@yandex.ru');
      cy.get(pass).click().clear().type('123456');
      cy.get(enter).click();
      cy.wait(2000);
})

   it('Rashod', function() {
   	cy.get('.nav').contains('Расходные').click();
      cy.get('.tab-pane.active > .panel.ng-scope').contains('ТЕСТОВЫЙ').should('be.visible');
      cy.get('.tab-pane.active > .panel.ng-scope > [filter-fields="$parent.undefined"] > .panel-footer').contains('Печать').click();
      cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper').contains('ТЕСТОВЫЙ').should('be.visible');
      cy.get('[style="padding-top: 40px;"]').contains('Закрыть').click();
        
})
})