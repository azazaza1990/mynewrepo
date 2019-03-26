var mail = '#form-email'
var pass = '#form-password'
var enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'

describe("status", function() {
   beforeEach('cookie', function() {
      cy.setCookie('guid-1', '%7BD9AD05E2-2345-B16A-3E61-8593AF2A620A%7D');
  })

   it("Auth", function() {
      cy.visit("https://apgrup.ru/saleinvoices/40831/");

      cy.get(mail).click().clear().type('ra-nt-office@yandex.ru');
      cy.get(pass).click().clear().type('123456');
      cy.get(enter).click();
      cy.wait(2000);
})

   it('Print', function() {
   	  cy.get('.ng-binding.ng-scope > span.ng-scope > [ng-click="click(0)"]').contains('Печать ТТН').click();
   	  cy.get('[ng-click="click(1)"]').contains('Печать Товарного чека').click();
   	  cy.get('[ng-click="click(2)"]').contains('Печать Торг 12').click();
   	  cy.get('[ng-click="click(3)"]').contains('Печать TTH Альфадетали').click();
   	  cy.get('[ng-click="click(4)"]').contains('Печать Торг 12 Альфадетали').click();
   })
})