describe("Cadillac", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Cadillac ATS', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Cadillac').click();
      cy.get('._1Cqj').contains('ATS').click();
      cy.get('._3Txt').contains('ATS I 2012 –  н.в').click();
      cy.get('._1PRn').contains('ATS I 2012 –  н.в').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac ATS I 2012 –  н.в').should('be.visible');
      cy.get('._1PRn').contains('Cadillac').click(); // Возвращаемся к марке
})

     it('Cadillac BLS', function() {
      cy.get('._1Cqj').contains('BLS').click();
      cy.get('._3Txt').contains('BLS 2006-2010').click();
      cy.get('._1PRn').contains('BLS 2006-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac BLS 2006-2010').should('be.visible');
      cy.get('._1PRn').contains('Cadillac').click(); // Возвращаемся к марке
})

     it('Cadillac CTS', function() {
      cy.get('._1Cqj').contains('CTS').click();
      cy.get('._3Txt').contains('CTS 2002-2008').click();
      cy.get('._1PRn').contains('CTS 2002-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac CTS 2002-2008').should('be.visible');
      cy.get('._1PRn').contains('CTS').click();
      cy.get('._3Txt').contains('CTS 2008-2013').click();
      cy.get('._1PRn').contains('CTS 2008-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac CTS 2008-2013').should('be.visible');
      cy.get('._1PRn').contains('CTS').click();
      cy.get('._3Txt').contains('CTS III 2014 – н.в.').click();
      cy.get('._1PRn').contains('CTS III 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac CTS III 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Cadillac').click(); // Возвращаемся к марке
})

     it('Cadillac DTS', function() {
      cy.get('._1Cqj').contains('DTS').click();
      cy.get('._3Txt').contains('DTS 2005 – 2011').click();
      cy.get('._1PRn').contains('DTS 2005 – 2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac DTS 2005 – 2011').should('be.visible');
      cy.get('._1PRn').contains('Cadillac').click(); // Возвращаемся к марке
})

     it('Cadillac Escalade', function() {
      cy.get('._1Cqj').contains('Escalade').click();
      cy.get('._3Txt').contains('Escalade II 2000-2006').click();
      cy.get('._1PRn').contains('Escalade II 2000-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac Escalade II 2000-2006').should('be.visible');
      cy.get('._1PRn').contains('Escalade').click();
      cy.get('._3Txt').contains('Escalade III 2006-2014').click();
      cy.get('._1PRn').contains('Escalade III 2006-2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac Escalade III 2006-2014').should('be.visible');
      cy.get('._1PRn').contains('Escalade').click();
      cy.get('._3Txt').contains('Escalade c 2014 г.').click();
      cy.get('._1PRn').contains('Escalade c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac Escalade c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Cadillac').click(); // Возвращаемся к марке
})

     it('Cadillac SRX', function() {
      cy.get('._1Cqj').contains('SRX').click();
      cy.get('._3Txt').contains('SRX 2003-2009').click();
      cy.get('._1PRn').contains('SRX 2003-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac SRX 2003-2009').should('be.visible');
      cy.get('._1PRn').contains('SRX').click();
      cy.get('._3Txt').contains('SRX c 2009 г.').click();
      cy.get('._1PRn').contains('SRX c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac SRX c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Cadillac').click(); // Возвращаемся к марке
})

     it('Cadillac STS', function() {
      cy.get('._1Cqj').contains('STS').click();
      cy.get('._3Txt').contains('STS 2005-2011').click();
      cy.get('._1PRn').contains('STS 2005-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac STS 2005-2011').should('be.visible');
      cy.get('._1PRn').contains('Cadillac').click(); // Возвращаемся к марке
})

     it('Cadillac Seville', function() {
      cy.get('._1Cqj').contains('Seville').click();
      cy.get('._3Txt').contains('Cadillac Seville IV 1992 - 1997').click();
      cy.get('._1PRn').contains('Cadillac Seville IV 1992 - 1997').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac Cadillac Seville IV 1992 - 1997').should('be.visible');
      cy.get('._1PRn').contains('Seville').click();
      cy.get('._3Txt').contains('Cadillac Seville V 1998 - 2004').click();
      cy.get('._1PRn').contains('Cadillac Seville V 1998 - 2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac Cadillac Seville V 1998 - 2004').should('be.visible');
      cy.get('._1PRn').contains('Cadillac').click(); // Возвращаемся к марке
})

     it('Cadillac XT5', function() {
      cy.get('._1Cqj').contains('XT5').click();
      cy.get('._3Txt').contains('XT5 2016 – н.в.').click();
      cy.get('._1PRn').contains('XT5 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Cadillac XT5 2016 – н.в.').should('be.visible');
})
})
