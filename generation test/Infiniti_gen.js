describe("Infiniti", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('EX', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Infiniti').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('EX').click();
      cy.get('._3Txt').contains('EX/QX50 (J50) c 2008 г.').click();
      cy.get('._1PRn').contains('EX/QX50 (J50) c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti EX/QX50 (J50) c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('FX / QX70', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('FX / QX70').click();
      cy.get('._3Txt').contains('FX (S50) 2003-2007').click();
      cy.get('._1PRn').contains('FX (S50) 2003-2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti FX (S50) 2003-2007').should('be.visible');
      cy.get('._1PRn').contains('FX / QX70').click();
      cy.get('._3Txt').contains('FX/QX70 (S51) c 2008 г.').click();
      cy.get('._1PRn').contains('FX/QX70 (S51) c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti FX/QX70 (S51) c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('G', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('G').click();
      cy.get('._3Txt').contains('G (V35) 2002-2007').click();
      cy.get('._1PRn').contains('G (V35) 2002-2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti G (V35) 2002-2007').should('be.visible');
      cy.get('._1PRn').contains('G').click();
      cy.get('._3Txt').contains('G (V36) 2007-2013').click();
      cy.get('._1PRn').contains('G (V36) 2007-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti G (V36) 2007-2013').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('I', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('I').click();
      cy.get('._3Txt').contains('I (A33) II 2000 – 2004').click();
      cy.get('._1PRn').contains('I (A33) II 2000 – 2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti I (A33) II 2000 – 2004').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('JX', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('JX').click();
      cy.get('._3Txt').contains('JX/QX60 (L50) c 2013 г.').click();
      cy.get('._1PRn').contains('JX/QX60 (L50) c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti JX/QX60 (L50) c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('M', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('M').click();
      cy.get('._3Txt').contains('M (Y50) 2004-2009').click();
      cy.get('._1PRn').contains('M (Y50) 2004-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti M (Y50) 2004-2009').should('be.visible');
      cy.get('._1PRn').contains('M').click();
      cy.get('._3Txt').contains('M/Q70 (Y51) c 2010 г.').click();
      cy.get('._1PRn').contains('M/Q70 (Y51) c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti M/Q70 (Y51) c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('Q30', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Q30').click();
      cy.get('._3Txt').contains('Q30 2015 – н.в.').click();
      cy.get('._1PRn').contains('Q30 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti Q30 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('Q50', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Q50').click();
      cy.get('._3Txt').contains('Q50 (V37) c 2013 г.').click();
      cy.get('._1PRn').contains('Q50 (V37) c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti Q50 (V37) c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('Q60', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Q60').click();
      cy.get('._3Txt').contains('Q60 I 2013 – 2016').click();
      cy.get('._1PRn').contains('Q60 I 2013 – 2016').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti Q60 I 2013 – 2016').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('Q70', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Q70').click();
      cy.get('._3Txt').contains('Q70 I 2013 – н.в').click();
      cy.get('._1PRn').contains('Q70 I 2013 – н.в').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti Q70 I 2013 – н.в').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('QX30', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('QX30').click();
      cy.get('._3Txt').contains('QХ30 2015 – н.в.').click();
      cy.get('._1PRn').contains('QХ30 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti QХ30 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('QX4', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('QX4').click();
      cy.get('._3Txt').contains('QX4 (JR50) 1996-2002').click();
      cy.get('._1PRn').contains('QX4 (JR50) 1996-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti QX4 (JR50) 1996-2002').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('QX50', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('QX50').click();
      cy.get('._3Txt').contains('QX50 I 2013 - 2017').click();
      cy.get('._1PRn').contains('QX50 I 2013 - 2017').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti QX50 I 2013 - 2017').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('QX56', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('QX56').click();
      cy.get('._3Txt').contains('QX56 (JA60) 2004-2009').click();
      cy.get('._1PRn').contains('QX56 (JA60) 2004-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti QX56 (JA60) 2004-2009').should('be.visible');
      cy.get('._1PRn').contains('QX56').click();
      cy.get('._3Txt').contains('QX56/QX80 (Z62) c 2010 г.').click();
      cy.get('._1PRn').contains('QX56/QX80 (Z62) c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti QX56/QX80 (Z62) c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('QX60', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('QX60').click();
      cy.get('._3Txt').contains('QX60 2013 – н.в.').click();
      cy.get('._1PRn').contains('QX60 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti QX60 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Infiniti').click(); // Возвращаемся к марке
})

     it('QX80', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('QX80').click();
      cy.get('._3Txt').contains('QX80 I 2013 – н.в').click();
      cy.get('._1PRn').contains('QX80 I 2013 – н.в').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Infiniti QX80 I 2013 – н.в').should('be.visible');
})
})