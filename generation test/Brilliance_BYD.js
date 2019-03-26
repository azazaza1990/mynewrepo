describe("Brilliance_BYD", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Brilliance H530', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Brilliance').click();
      cy.get('._1Cqj').contains('H530').click();
      cy.get('._3Txt').contains('H530 2011 – н.в.').click();
      cy.get('._1PRn').contains('H530 2011 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Brilliance H530 2011 – н.в.').should('be.visible');
      cy.get('._2S9w').click(); // Главная страница
})

     it('BYD F', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('BYD').click();
      cy.get('._1Cqj').contains('F').click();
      cy.get('._3Txt').contains('H530 2011 – н.в.').click();
      cy.get('._1PRn').contains('H530 2011 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BYD F 3 c 2007 г.').should('be.visible');
})

})
