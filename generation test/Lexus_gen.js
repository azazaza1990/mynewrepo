describe("Lexus", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('CT', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Lexus').click();
      cy.get('._1Cqj').contains('CT').click();
      cy.get('._3Txt').contains('CT 200H c 2011 г.').click();
      cy.get('._1PRn').contains('CT 200H c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus CT 200H c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Lexus').click(); // Возвращаемся к марке
})

     it('ES', function() {
      cy.get('._1Cqj').contains('ES').click();
      cy.get('._3Txt').contains('ES (CV3) 2001-2006').click();
      cy.get('._1PRn').contains('ES (CV3) 2001-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus ES (CV3) 2001-2006').should('be.visible');
      cy.get('._1PRn').contains('ES').click();
      cy.get('._3Txt').contains('ES (SV40) 2006-2012').click();
      cy.get('._1PRn').contains('ES (SV40) 2006-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus ES (SV40) 2006-2012').should('be.visible');
      cy.get('._1PRn').contains('ES').click();
      cy.get('._3Txt').contains('ES II 1991 – 1997').click();
      cy.get('._1PRn').contains('ES II 1991 – 1997').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus ES II 1991 – 1997').should('be.visible');
      cy.get('._1PRn').contains('ES').click();
      cy.get('._3Txt').contains('ES III 1997 – 2001').click();
      cy.get('._1PRn').contains('ES III 1997 – 2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus ES III 1997 – 2001').should('be.visible');
      cy.get('._1PRn').contains('ES').click();
      cy.get('._3Txt').contains('ES c 2012 г.').click();
      cy.get('._1PRn').contains('ES c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus ES c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Lexus').click(); // Возвращаемся к марке
})

     it('GS', function() {
      cy.get('._1Cqj').contains('GS').click();
      cy.get('._3Txt').contains('GS 300 1993-1998').click();
      cy.get('._1PRn').contains('GS 300 1993-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus GS 300 1993-1998').should('be.visible');
      cy.get('._1PRn').contains('GS').click();
      cy.get('._3Txt').contains('GS 300/400/430 1998-2004').click();
      cy.get('._1PRn').contains('GS 300/400/430 1998-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus GS 300/400/430 1998-2004').should('be.visible');
      cy.get('._1PRn').contains('GS').click();
      cy.get('._3Txt').contains('GS 300/400/430 2005-2012').click();
      cy.get('._1PRn').contains('GS 300/400/430 2005-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus GS 300/400/430 2005-2012').should('be.visible');
      cy.get('._1PRn').contains('GS').click();
      cy.get('._3Txt').contains('GS 350 c 2012 г.').click();
      cy.get('._1PRn').contains('GS 350 c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus GS 350 c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Lexus').click(); // Возвращаемся к марке
})

     it('GX460', function() {
      cy.get('._1Cqj').contains('GX460').click();
      cy.get('._3Txt').contains('GX460 c 2009 г.').click();
      cy.get('._1PRn').contains('GX460 c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus GX460 c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Lexus').click(); // Возвращаемся к марке
})

     it('GX470', function() {
      cy.get('._1Cqj').contains('GX470').click();
      cy.get('._3Txt').contains('GX470 2002-2009').click();
      cy.get('._1PRn').contains('GX470 2002-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus GX470 2002-2009').should('be.visible');
      cy.get('._1PRn').contains('Lexus').click(); // Возвращаемся к марке
})

     it('IS', function() {
      cy.get('._1Cqj').contains('IS').click();
      cy.get('._3Txt').contains('IS 200/300 1999-2005').click();
      cy.get('._1PRn').contains('IS 200/300 1999-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus IS 200/300 1999-2005').should('be.visible');
      cy.get('._1PRn').contains('IS').click();
      cy.get('._3Txt').contains('IS 250/350 2005-2013').click();
      cy.get('._1PRn').contains('IS 250/350 2005-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus IS 250/350 2005-2013').should('be.visible');
      cy.get('._1PRn').contains('IS').click();
      cy.get('._3Txt').contains('IS 250/350 c 2013 г.').click();
      cy.get('._1PRn').contains('IS 250/350 c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus IS 250/350 c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Lexus').click(); // Возвращаемся к марке
})

     it('LS', function() {
      cy.get('._1Cqj').contains('LS').click();
      cy.get('._3Txt').contains('LS (USF4) c 2006 г.').click();
      cy.get('._1PRn').contains('LS (USF4) c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus LS (USF4) c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('LS').click();
      cy.get('._3Txt').contains('LS 400 (UCF20) 1994-2000').click();
      cy.get('._1PRn').contains('LS 400 (UCF20) 1994-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus LS 400 (UCF20) 1994-2000').should('be.visible');
      cy.get('._1PRn').contains('LS').click();
      cy.get('._3Txt').contains('LS 430 (UCF30) 2000-2006').click();
      cy.get('._1PRn').contains('LS 430 (UCF30) 2000-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus LS 430 (UCF30) 2000-2006').should('be.visible');
      cy.get('._1PRn').contains('Lexus').click(); // Возвращаемся к марке
})

     it('LX', function() {
      cy.get('._1Cqj').contains('LX').click();
      cy.get('._3Txt').contains('LX 470 1998-2007').click();
      cy.get('._1PRn').contains('LX 470 1998-2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus LX 470 1998-2007').should('be.visible');
      cy.get('._1PRn').contains('LX').click();
      cy.get('._3Txt').contains('LX 570 c 2007 г.').click();
      cy.get('._1PRn').contains('LX 570 c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus LX 570 c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Lexus').click(); // Возвращаемся к марке
})

     it('NX', function() {
      cy.get('._1Cqj').contains('NX').click();
      cy.get('._3Txt').contains('NX 200 c 2014 г.').click();
      cy.get('._1PRn').contains('NX 200 c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus NX 200 c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Lexus').click(); // Возвращаемся к марке
})

     it('RC', function() {
      cy.get('._1Cqj').contains('RC').click();
      cy.get('._3Txt').contains('RC c 2014 г.').click();
      cy.get('._1PRn').contains('RC c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus RC c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Lexus').click(); // Возвращаемся к марке
})

     it('RX', function() {
      cy.get('._1Cqj').contains('RX').click();
      cy.get('._3Txt').contains('RX 300 1998-2003').click();
      cy.get('._1PRn').contains('RX 300 1998-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus RX 300 1998-2003').should('be.visible');
      cy.get('._1PRn').contains('RX').click();
      cy.get('._3Txt').contains('RX 300/330/350/400h 2003-2009').click();
      cy.get('._1PRn').contains('RX 300/330/350/400h 2003-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus RX 300/330/350/400h 2003-2009').should('be.visible');
      cy.get('._1PRn').contains('RX').click();
      cy.get('._3Txt').contains('RX 350/450H c 2009 г.').click();
      cy.get('._1PRn').contains('RX 350/450H c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus RX 350/450H c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('RX').click();
      cy.get('._3Txt').contains('RX IV 2015 – н.в.').click();
      cy.get('._1PRn').contains('RX IV 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus RX IV 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Lexus').click(); // Возвращаемся к марке
})

     it('SC430', function() {
      cy.get('._1Cqj').contains('SC430').click();
      cy.get('._3Txt').contains('SC430 2001-2010').click();
      cy.get('._1PRn').contains('SC430 2001-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lexus SC430 2001-2010').should('be.visible');
})
})