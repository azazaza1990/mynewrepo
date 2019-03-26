describe("Lifan_Lincon_Maserati_Maybach_Plymouth", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})

     it('Lifan Breez', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Lifan').click();
      cy.get('._2qTd').contains('Breez').click();
      cy.get('._3Txt').contains('Breez c 2007 г.').click();
      cy.get('._1PRn').contains('Breez c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lifan Breez c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Lifan').click(); // Возвращаемся к маркам
})

     it('Lifan CEBRIUM', function() {
      cy.get('._2qTd').contains('CEBRIUM').click();
      cy.get('._3Txt').contains('CEBRIUM c 2014 г.').click();
      cy.get('._1PRn').contains('CEBRIUM c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lifan CEBRIUM c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Lifan').click(); // Возвращаемся к маркам
})

     it('Lifan Celliya (530)', function() {
      cy.get('._2qTd').contains('Celliya (530)').click();
      cy.get('._3Txt').contains('Celliya (530) 2014 – н.в.').click();
      cy.get('._1PRn').contains('Celliya (530) 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lifan Celliya (530) 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Lifan').click(); // Возвращаемся к маркам
})

     it('Lifan Myway', function() {
      cy.get('._2qTd').contains('Myway').click();
      cy.get('._3Txt').contains('Myway 2016 – н.в.').click();
      cy.get('._1PRn').contains('Myway 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lifan Myway 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Lifan').click(); // Возвращаемся к маркам
})

     it('Lifan Smily', function() {
      cy.get('._2qTd').contains('Smily').click();
      cy.get('._3Txt').contains('Smily c 2010 г.').click();
      cy.get('._1PRn').contains('Smily c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lifan Smily c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Lifan').click(); // Возвращаемся к маркам
})

     it('Lifan Solano', function() {
      cy.get('._2qTd').contains('Solano').click();
      cy.get('._3Txt').contains('Solano  II 2016 – н.в.').click();
      cy.get('._1PRn').contains('Solano  II 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lifan Solano  II 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Solano').click();
      cy.get('._3Txt').contains('Solano I 2008 - 2016').click();
      cy.get('._1PRn').contains('Solano I 2008 - 2016').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lifan Solano I 2008 - 2016').should('be.visible');
      cy.get('._1PRn').contains('Lifan').click(); // Возвращаемся к маркам
})

     it('Lifan X50', function() {
      cy.get('._2qTd').contains('X50').click();
      cy.get('._3Txt').contains('X50 с 2015 г.').click();
      cy.get('._1PRn').contains('X50 с 2015 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lifan X50 с 2015 г.').should('be.visible');
      cy.get('._1PRn').contains('Lifan').click(); // Возвращаемся к маркам
})

     it('Lifan X60', function() {
      cy.get('._2qTd').contains('X60').click();
      cy.get('._3Txt').contains('X60 c 2012 г.').click();
      cy.get('._1PRn').contains('X60 c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lifan X60 c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к легковые
})

     it('Lincoln Aviator', function() {
      cy.get('._3WQJ').contains('Lincoln').click();
      cy.get('._2qTd').contains('Aviator').click();
      cy.get('._3Txt').contains('Aviator 2002-2005').click();
      cy.get('._1PRn').contains('Aviator 2002-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lincoln Aviator 2002-2005').should('be.visible');
      cy.get('._1PRn').contains('Lincoln').click(); // Возвращаемся к маркам
})

     it('Lincoln LS', function() {
      cy.get('._2qTd').contains('LS').click();
      cy.get('._3Txt').contains('LS I 1999 – 2006').click();
      cy.get('._1PRn').contains('LS I 1999 – 2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lincoln LS I 1999 – 2006').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к легковым
})

     it('Maserati Ghibli', function() {
      cy.get('._3WQJ').contains('Maserati').click();
      cy.get('._2qTd').contains('Ghibli').click();
      cy.get('._3Txt').contains('Ghibli III 2013 – н.в.').click();
      cy.get('._1PRn').contains('Ghibli III 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Maserati Ghibli III 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Maserati').click(); // Возвращаемся к маркам
})

     it('Maserati Levante', function() {
      cy.get('._2qTd').contains('Levante').click();
      cy.get('._3Txt').contains('Levante I 2016 – н.в.').click();
      cy.get('._1PRn').contains('Levante I 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Maserati Levante I 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Maserati').click(); // Возвращаемся к маркам
})

     it('Maserati Quattroporte', function() {
      cy.get('._2qTd').contains('Quattroporte').click();
      cy.get('._3Txt').contains('Quattroporte VI 2012 – н.в.').click();
      cy.get('._1PRn').contains('Quattroporte VI 2012 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Maserati Quattroporte VI 2012 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к маркам
})

     it('Maybach 57/62', function() {
      cy.get('._3WQJ').contains('Maybach').click();
      cy.get('._2qTd').contains('57/62').click();
      cy.get('._3Txt').contains('57/62 W240 2002-2013').click();
      cy.get('._1PRn').contains('57/62 W240 2002-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Maybach 57/62 W240 2002-2013').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к легковым
})

     it('Plymouth Breeze', function() {
      cy.get('._3WQJ').contains('Plymouth').click();
      cy.get('._2qTd').contains('Breeze').click();
      cy.get('._3Txt').contains('Breeze 1995 – 2000').click();
      cy.get('._1PRn').contains('Breeze 1995 – 2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Plymouth Breeze 1995 – 2000').should('be.visible');
      cy.get('._1PRn').contains('Plymouth').click(); // Возвращаемся к маркам
})

     it('Plymouth Prowler', function() {
      cy.get('._2qTd').contains('Prowler').click();
      cy.get('._3Txt').contains('Prowler 1997-2002').click();
      cy.get('._1PRn').contains('Prowler 1997-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Plymouth Prowler 1997-2002').should('be.visible');
})
})