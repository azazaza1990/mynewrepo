var mail = '#form-email'
var pass = '#form-password'
var enter = '.ng-scope.ng-valid-minlength > :nth-child(2) > .btn'

describe("print details", function() {
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

   it('Details', function() {
   	  cy.get('#content > div > ui-view > div:nth-child(4) > div > div.tab-pane.active > div > div:nth-child(3) > div.panel-footer.collection__footer.collection__footer--panel > div.collection__print.ng-scope').contains('Печать').click();
        cy.get('[style="padding-top: 40px;"] > .collectionTable > .collectionTable__wrapper').contains('Отгружено').should('be.visible');
        cy.get('[style="padding-top: 40px;"]').contains('Закрыть').click();
})
})