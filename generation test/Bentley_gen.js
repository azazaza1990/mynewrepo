describe("B gen", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Bentley Bentayga', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Bentley').click();
      cy.get('._1Cqj').contains('Bentayga').click();
      cy.get('._3Txt').contains('Bentayga I 2015 – н.в.').click();
      cy.get('._1PRn').contains('Bentayga I 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Bentley Bentayga I 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Bentley').click(); // Возвращаемся к марке
})

     it('Bentley Continental Flying Spur', function() {
      cy.get('._1Cqj').contains('Continental Flying Spur').click();
      cy.get('._3Txt').contains('Continental Flying Spur 2005 – 2013').click();
      cy.get('._1PRn').contains('Continental Flying Spur 2005 – 2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Bentley Continental Flying Spur 2005 – 2013').should('be.visible');
      cy.get('._1PRn').contains('Bentley').click(); // Возвращаемся к марке
})

     it('Bentley Continental GT', function() {
      cy.get('._1Cqj').contains('Continental GT').click();
      cy.get('._3Txt').contains('Continental GT II 2011 – 2017').click();
      cy.get('._1PRn').contains('Continental GT II 2011 – 2017').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Bentley Continental GT II 2011 – 2017').should('be.visible');
      cy.get('._1PRn').contains('Continental GT').click();
      cy.get('._1Cqj').contains('Continental GT c 2002 г.').click();
      cy.get('._1PRn').contains('Continental GT c 2002 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Bentley Continental GT c 2002 г.').should('be.visible');
      cy.get('._1PRn').contains('Bentley').click(); // Возвращаемся к марке
})

     it('Bentley Flying Spur', function() {
      cy.get('[name="flying-spur"] > :nth-child(1) > ._1Pzz').click();//Fliyng Spur
      cy.get('._3Txt').contains('Flying Spur 2013 – н.в.').click();
      cy.get('._1PRn').contains('Flying Spur 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Bentley Flying Spur 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Bentley').click(); // Возвращаемся к марке
})

     it('Bentley Mulsanne', function() {
      cy.get('._1Cqj').contains('Mulsanne').click();
      cy.get('._3Txt').contains('Mulsanne II 2010 – н.в.').click();
      cy.get('._1PRn').contains('Mulsanne II 2010 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Bentley Mulsanne II 2010 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Bentley').click(); // Возвращаемся к марке
})
})
