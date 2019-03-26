describe("Changan_Chery", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Changan CS35', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Changan').click();
      cy.get('._1Cqj').contains('CS35').click();
      cy.get('._3Txt').contains('CS35 с 2013 г.').click();
      cy.get('._1PRn').contains('CS35 с 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Changan CS35 с 2013 г.').should('be.visible');
      cy.get('._2S9w').click(); // Главная страница
})

     it('Chery Amulet', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Chery').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Amulet').click();
      cy.get('._3Txt').contains('Amulet (A11) 1999–2006').click();
      cy.get('._1PRn').contains('Amulet (A11) 1999–2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery Amulet (A11) 1999–2006').should('be.visible');
      cy.get('._1PRn').contains('Amulet').click();
      cy.get('._3Txt').contains('Amulet (A15) c 2006 г.').click();
      cy.get('._1PRn').contains('Amulet (A15) c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery Amulet (A15) c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Chery').click(); // Возвращаемся к марке
})

     it('Chery Bonus', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Bonus').click();
      cy.get('._3Txt').contains('Bonus 3 (E3) c 2013 г.').click();
      cy.get('._1PRn').contains('Bonus 3 (E3) c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery Bonus 3 (E3) c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Bonus').click();
      cy.get('._3Txt').contains('Bonus c 2011 г.').click();
      cy.get('._1PRn').contains('Bonus c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery Bonus c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Chery').click(); // Возвращаемся к марке
})

     it('Chery Fora', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Fora').click();
      cy.get('._3Txt').contains('Fora (A21) c 2006 г.').click();
      cy.get('._1PRn').contains('Fora (A21) c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery Fora (A21) c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Chery').click(); // Возвращаемся к марке
})

     it('Chery Indis', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Indis').click();
      cy.get('._3Txt').contains('Indis c 2011 г.').click();
      cy.get('._1PRn').contains('Indis c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery Indis c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Chery').click(); // Возвращаемся к марке
})

     it('Chery M11', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('M11').click();
      cy.get('._3Txt').contains('M11 c 2010 г.').click();
      cy.get('._1PRn').contains('M11 c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery M11 c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Chery').click(); // Возвращаемся к марке
})

     it('Chery QQ6', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('QQ6').click();
      cy.get('._3Txt').contains('QQ6 (S21) c 2008 г.').click();
      cy.get('._1PRn').contains('QQ6 (S21) c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery QQ6 (S21) c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Chery').click(); // Возвращаемся к марке
})

     it('Chery Sweet', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Sweet').click();
      cy.get('._3Txt').contains('Sweet (QQ) c 2006 г.').click();
      cy.get('._1PRn').contains('Sweet (QQ) c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery Sweet (QQ) c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Chery').click(); // Возвращаемся к марке
})

     it('Chery Tiggo (T11)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Tiggo (T11)').click();
      cy.get('._3Txt').contains('Tiggo (T11) 2005 – 2013').click();
      cy.get('._1PRn').contains('Tiggo (T11) 2005 – 2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery Tiggo (T11) 2005 – 2013').should('be.visible');
      cy.get('._1PRn').contains('Chery').click(); // Возвращаемся к марке
})

     it('Chery Tiggo 2', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Tiggo 2').click();
      cy.get('._3Txt').contains('Tiggo 2 2017 – н.в.').click();
      cy.get('._1PRn').contains('Tiggo 2 2017 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery Tiggo 2 2017 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Chery').click(); // Возвращаемся к марке
})

     it('Chery Tiggo 5', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Tiggo 5').click();
      cy.get('._3Txt').contains('Tiggo 5 I 2014 – н.в.').click();
      cy.get('._1PRn').contains('Tiggo 5 I 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery Tiggo 5 I 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Chery').click(); // Возвращаемся к марке
})

     it('Chery Very', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Very').click();
      cy.get('._3Txt').contains('Very c 2011 г.').click();
      cy.get('._1PRn').contains('Very c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chery Very c 2011 г.').should('be.visible');
})
})
