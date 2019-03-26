describe("Porsche", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('911', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Porsche').click();
      cy.get('._2qTd').contains('911').click();
      cy.get('._3Txt').contains('911 (991) с 2011 г.').click();
      cy.get('._1PRn').contains('911 (991) с 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche 911 (991) с 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('911').click();
      cy.get('._3Txt').contains('911 (996) 1997-2005').click();
      cy.get('._1PRn').contains('911 (996) 1997-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche 911 (996) 1997-2005').should('be.visible');
      cy.get('._1PRn').contains('911').click();
      cy.get('._3Txt').contains('911 (997) c 2004 г.').click();
      cy.get('._1PRn').contains('911 (997) c 2004 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche 911 (997) c 2004 г.').should('be.visible');
      cy.get('._1PRn').contains('911').click();
      cy.get('._3Txt').contains('911 1963-1990').click();
      cy.get('._1PRn').contains('911 1963-1990').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche 911 1963-1990').should('be.visible');
      cy.get('._1PRn').contains('Porsche').click(); // Возвращаемся к марке
})

     it('Boxster', function() {
      cy.get('._2qTd').contains('Boxster').click();
      cy.get('._3Txt').contains('Boxster II (987) 2004-2011').click();
      cy.get('._1PRn').contains('Boxster II (987) 2004-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Boxster II (987) 2004-2011').should('be.visible');
      cy.get('._1PRn').contains('Boxster').click();
      cy.get('._3Txt').contains('Boxster III (981) 2012 – н.в.').click();
      cy.get('._1PRn').contains('Boxster III (981) 2012 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Boxster III (981) 2012 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Boxster').click();
      cy.get('._3Txt').contains('Boxster c 1996 г.').click();
      cy.get('._1PRn').contains('Boxster c 1996 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Boxster c 1996 г.').should('be.visible');
      cy.get('._1PRn').contains('Porsche').click(); // Возвращаемся к марке
})

     it('Cayenne', function() {
      cy.get('._2qTd').contains('Cayenne').click();
      cy.get('._3Txt').contains('Cayenne 2003-2010').click();
      cy.get('._1PRn').contains('Cayenne 2003-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Cayenne 2003-2010').should('be.visible');
      cy.get('._1PRn').contains('Cayenne').click();
      cy.get('._3Txt').contains('Cayenne III 2017 – н.в.').click();
      cy.get('._1PRn').contains('Cayenne III 2017 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Cayenne III 2017 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Cayenne').click();
      cy.get('._3Txt').contains('Cayenne c 2010 г.').click();
      cy.get('._1PRn').contains('Cayenne c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Cayenne c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Porsche').click(); // Возвращаемся к марке
})

     it('Cayman', function() {
      cy.get('._2qTd').contains('Cayman').click();
      cy.get('._3Txt').contains('Cayman II (981) 2012 – н.в.').click();
      cy.get('._1PRn').contains('Cayman II (981) 2012 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Cayman II (981) 2012 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Cayman').click();
      cy.get('._3Txt').contains('Cayman c 2005 г.').click();
      cy.get('._1PRn').contains('Cayman c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Cayman c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Porsche').click(); // Возвращаемся к марке
})

     it('Cayman GT4', function() {
      cy.get('._2qTd').contains('Cayman GT4').click();
      cy.get('._3Txt').contains('Cayman GT4 2015 – н.в.').click();
      cy.get('._1PRn').contains('Cayman GT4 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Cayman GT4 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Porsche').click(); // Возвращаемся к марке
})

     it('Macan', function() {
      cy.get('._2qTd').contains('Macan').click();
      cy.get('._3Txt').contains('Macan с 2013 г.').click();
      cy.get('._1PRn').contains('Macan с 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Macan с 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Porsche').click(); // Возвращаемся к марке
})

     it('Panamera', function() {
      cy.get('._2qTd').contains('Panamera').click();
      cy.get('._3Txt').contains('Panamera I 2009 – 2016').click();
      cy.get('._1PRn').contains('Panamera I 2009 – 2016').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Panamera I 2009 – 2016').should('be.visible');
      cy.get('._1PRn').contains('Panamera').click();
      cy.get('._3Txt').contains('Panamera II 2016 – н.в.').click();
      cy.get('._1PRn').contains('Panamera II 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Porsche Panamera II 2016 – н.в.').should('be.visible');
})
})