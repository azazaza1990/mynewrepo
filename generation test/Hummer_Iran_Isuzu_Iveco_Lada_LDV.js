describe("Hummer_Iran_Isuzu_Iveco_Lada_LDV", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})

     it('Hummer H2', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Hummer').click();
      cy.get('._1Cqj').contains('H2').click();
      cy.get('._3Txt').contains('H2 c 2003 г.').click();
      cy.get('._1PRn').contains('H2 c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hummer H2 c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Hummer').click(); // Возвращаемся к маркам
})

     it('Hummer H3', function() {
      cy.get('._1Cqj').contains('H3').click();
      cy.get('._3Txt').contains('H3 c 2005 г.').click();
      cy.get('._1PRn').contains('H3 c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hummer H3 c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к маркам
})

     it('Iran', function() {
      cy.get('._3WQJ').contains('Iran Khodro').click();
      cy.get('._1Cqj').contains('Samand').click();
      cy.get('._3Txt').contains('Samand c 2003 г.').click();
      cy.get('._1PRn').contains('Samand c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Iran Khodro Samand c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к легковым
})

     it('Isuzu', function() {
      cy.get('._3WQJ').contains('Isuzu').click();
      cy.get('._1Cqj').contains('Trooper').click();
      cy.get('._3Txt').contains('Trooper  до 1992 г.').click();
      cy.get('._1PRn').contains('Trooper  до 1992 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Isuzu Trooper  до 1992 г.').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к легковым
})

     it('Iveco Daily', function() {
      cy.get('._3WQJ').contains('Iveco').click();
      cy.get('._1Cqj').contains('Daily').click();
      cy.get('._3Txt').contains('Daily 1990 - 1999').click();
      cy.get('._1PRn').contains('Daily 1990 - 1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Iveco Daily 1990 - 1999').should('be.visible');
      cy.get('._1PRn').contains('Daily').click();
      cy.get('._3Txt').contains('Daily III 2000-2005').click();
      cy.get('._1PRn').contains('Daily III 2000-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Iveco Daily III 2000-2005').should('be.visible');
      cy.get('._1PRn').contains('Daily').click();
      cy.get('._3Txt').contains('Daily IV c 2005 г.').click();
      cy.get('._1PRn').contains('Daily IV c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Iveco Daily IV c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Daily').click();
      cy.get('._3Txt').contains('Daily V с 2012 г.').click();
      cy.get('._1PRn').contains('Daily V с 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Iveco Daily V с 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Iveco').click(); // Возвращаемся к маркам
})

     it('Iveco EuroCargo', function() {
      cy.get('._1Cqj').contains('EuroCargo').click();
      cy.get('._3Txt').contains('EuroCargo III c 2008 г.').click();
      cy.get('._1PRn').contains('EuroCargo III c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Iveco EuroCargo III c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Iveco').click(); // Возвращаемся к маркам
})

     it('Iveco Eurotrakker', function() {
      cy.get('._1Cqj').contains('Eurotrakker').click();
      cy.get('._3Txt').contains('Eurotrakker c 2005 г.').click();
      cy.get('._1PRn').contains('Eurotrakker c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Iveco Eurotrakker c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к маркам
})

     it('Lada Kalina', function() {
      cy.get('._3WQJ').contains('Lada').click();
      cy.get('._1Cqj').contains('Kalina').click();
      cy.get('._3Txt').contains('Kalina II 2013 - н.в.').click();
      cy.get('._1PRn').contains('Kalina II 2013 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lada Kalina II 2013 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Lada').click(); // Возвращаемся к маркам
})

     it('Lada Vesta', function() {
      cy.get('._1Cqj').contains('Vesta').click();
      cy.get('._3Txt').contains('Vesta 2015 - н.в.').click();
      cy.get('._1PRn').contains('Vesta 2015 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lada Vesta 2015 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Lada').click(); // Возвращаемся к маркам
})

     it('Lada XRAY', function() {
      cy.get('._1Cqj').contains('XRAY').click();
      cy.get('._3Txt').contains('XRAY I 2015 – н.в.').click();
      cy.get('._1PRn').contains('XRAY I 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lada XRAY I 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к маркам
})

     it('LDV Convoy', function() {
      cy.get('._3WQJ').contains('LDV').click();
      cy.get('._1Cqj').contains('Convoy').click();
      cy.get('._3Txt').contains('Convoy 1997-2006').click();
      cy.get('._1PRn').contains('Convoy 1997-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('LDV Convoy 1997-2006').should('be.visible');
      cy.get('._1PRn').contains('LDV').click(); // Возвращаемся к маркам
})

     it('LDV Maxus', function() {
      cy.get('._1Cqj').contains('Maxus').click();
      cy.get('._3Txt').contains('Maxus c 2005 г.').click();
      cy.get('._1PRn').contains('Maxus c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('LDV Maxus c 2005 г.').should('be.visible');
})
})