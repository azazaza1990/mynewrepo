describe("Great Wall", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Coolbear', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Great Wall').click();
      cy.get('._1Cqj').contains('Coolbear').click();
      cy.get('._3Txt').contains('Coolbear 2009 – 2013').click();
      cy.get('._1PRn').contains('Coolbear 2009 – 2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Coolbear 2009 – 2013').should('be.visible');
      cy.get('._1PRn').contains('Great Wall').click(); // Возвращаемся к марке
})

     it('Deer', function() {
      cy.get('._1Cqj').contains('Deer').click();
      cy.get('._3Txt').contains('Deer G3 c 2005 г.').click();
      cy.get('._1PRn').contains('Deer G3 c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Deer G3 c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Great Wall').click(); // Возвращаемся к марке
})

     it('Hover', function() {
      cy.get('._1Cqj').contains('Hover').click();
      cy.get('._3Txt').contains('Hover H c 2010 г.').click();
      cy.get('._1PRn').contains('Hover H c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Hover H c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Hover').click();
      cy.get('._3Txt').contains('Hover H6 с 2013 г.').click();
      cy.get('._1PRn').contains('Hover H6 с 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Hover H6 с 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Hover').click();
      cy.get('._3Txt').contains('Hover M2 c 2009 г.').click();
      cy.get('._1PRn').contains('Hover M2 c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Hover M2 c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Hover').click();
      cy.get('._3Txt').contains('Hover M4 c 2013 г.').click();
      cy.get('._1PRn').contains('Hover M4 c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Hover M4 c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Hover').click();
      cy.get('._3Txt').contains('Hover c 2005 г.').click();
      cy.get('._1PRn').contains('Hover c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Hover c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Great Wall').click(); // Возвращаемся к марке
})

     it('Hover H5', function() {
      cy.get('._1Cqj').contains('Hover H5').click();
      cy.get('._3Txt').contains('Hover H5 2011 – н.в.').click();
      cy.get('._1PRn').contains('Hover H5 2011 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Hover H5 2011 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Great Wall').click(); // Возвращаемся к марке
})

     it('Safe', function() {
      cy.get('._1Cqj').contains('Safe').click();
      cy.get('._3Txt').contains('Safe Suv c 2003 г.').click();
      cy.get('._1PRn').contains('Safe Suv c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Safe Suv c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Great Wall').click(); // Возвращаемся к марке
})

     it('Sailor', function() {
      cy.get('._1Cqj').contains('Sailor').click();
      cy.get('._3Txt').contains('Sailor c 2005 г.').click();
      cy.get('._1PRn').contains('Sailor c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Sailor c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Great Wall').click(); // Возвращаемся к марке
})

     it('Wingle', function() {
      cy.get('._1Cqj').contains('Wingle').click();
      cy.get('._3Txt').contains('Wingle [3] 2006-2012').click();
      cy.get('._1PRn').contains('Wingle [3] 2006-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Wingle [3] 2006-2012').should('be.visible');
      cy.get('._1PRn').contains('Wingle').click();
      cy.get('._3Txt').contains('Wingle [5] 2011 - н.в.').click();
      cy.get('._1PRn').contains('Wingle [5] 2011 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Great Wall Wingle [5] 2011 - н.в.').should('be.visible');
})
})