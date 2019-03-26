describe("Haima_Haval_Hawtai", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})

     it('Haima 7', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Haima').click();
      cy.get('._1Cqj').contains('7').click();
      cy.get('._3Txt').contains('7 2013 – н.в.').click();
      cy.get('._1PRn').contains('7 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Haima 7 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к легковым
})

     it('Haval H2', function() {
      cy.get('._3WQJ').contains('Haval').click();
      cy.get('._1Cqj').contains('H2').click();
      cy.get('._3Txt').contains('H2 2015>').click();
      cy.get('._1PRn').contains('H2 2015>').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Haval H2 2015>').should('be.visible');
      cy.get('._1PRn').contains('Haval').click(); // Возвращаемся к маркам
})

     it('Haval H6', function() {
      cy.get('._1Cqj').contains('H6').click();
      cy.get('._3Txt').contains('H6 2014 – н.в.').click();
      cy.get('._1PRn').contains('H6 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Haval H6 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Haval').click(); // Возвращаемся к маркам
})

     it('Haval H9', function() {
      cy.get('._1Cqj').contains('H9').click();
      cy.get('._3Txt').contains('H9 2014 – н.в.').click();
      cy.get('._1PRn').contains('H9 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Haval H9 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к легковым
})

     it('Hawtai Boliger', function() {
      cy.get('._3WQJ').contains('Hawtai').click();
      cy.get('._1Cqj').contains('Boliger').click();
      cy.get('._3Txt').contains('Boliger 2011 – н.в.').click();
      cy.get('._1PRn').contains('Boliger 2011 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hawtai Boliger 2011 – н.в.').should('be.visible');
})
})