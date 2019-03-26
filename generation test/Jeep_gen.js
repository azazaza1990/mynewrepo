describe("Jeep", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Cherokee', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Jeep').click();
      cy.get('._1Cqj').contains('Cherokee').click();
      cy.get('._3Txt').contains('Cherokee (KJ) 2002-2006').click();
      cy.get('._1PRn').contains('Cherokee (KJ) 2002-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Cherokee (KJ) 2002-2006').should('be.visible');
      cy.get('._1PRn').contains('Cherokee').click();
      cy.get('._3Txt').contains('Cherokee (KK) 2007-2012').click();
      cy.get('._1PRn').contains('Cherokee (KK) 2007-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Cherokee (KK) 2007-2012').should('be.visible');
      cy.get('._1PRn').contains('Cherokee').click();
      cy.get('._3Txt').contains('Cherokee (KL) c 2013 г.').click();
      cy.get('._1PRn').contains('Cherokee (KL) c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Cherokee (KL) c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Cherokee').click();
      cy.get('._3Txt').contains('Cherokee (XJ) 1990-2001').click();
      cy.get('._1PRn').contains('Cherokee (XJ) 1990-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Cherokee (XJ) 1990-2001').should('be.visible');
      cy.get('._1PRn').contains('Jeep').click(); // Возвращаемся к марке
})

     it('Commander', function() {
      cy.get('._1Cqj').contains('Commander').click();
      cy.get('._3Txt').contains('Commander (XK) 2006-2010').click();
      cy.get('._1PRn').contains('Commander (XK) 2006-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Commander (XK) 2006-2010').should('be.visible');
      cy.get('._1PRn').contains('Jeep').click(); // Возвращаемся к марке
})

     it('Compass', function() {
      cy.get('._1Cqj').contains('Compass').click();
      cy.get('._3Txt').contains('Compass (MK49) c 2006 г.').click();
      cy.get('._1PRn').contains('Compass (MK49) c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Compass (MK49) c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Jeep').click(); // Возвращаемся к марке
})

     it('Grand Cherokee', function() {
      cy.get('._1Cqj').contains('Grand Cherokee').click();
      cy.get('._3Txt').contains('Grand Cherokee (WH/WK) 2004-2010').click();
      cy.get('._1PRn').contains('Grand Cherokee (WH/WK) 2004-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Grand Cherokee (WH/WK) 2004-2010').should('be.visible');
      cy.get('._1PRn').contains('Grand Cherokee').click();
      cy.get('._3Txt').contains('Grand Cherokee (WJ, WG) 1999-2003').click();
      cy.get('._1PRn').contains('Grand Cherokee (WJ, WG) 1999-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Grand Cherokee (WJ, WG) 1999-2003').should('be.visible');
      cy.get('._1PRn').contains('Grand Cherokee').click();
      cy.get('._3Txt').contains('Grand Cherokee (WK2) c 2010 г.').click();
      cy.get('._1PRn').contains('Grand Cherokee (WK2) c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Grand Cherokee (WK2) c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Grand Cherokee').click();
      cy.get('._3Txt').contains('Grand Cherokee (ZJ) 1993-1998').click();
      cy.get('._1PRn').contains('Grand Cherokee (ZJ) 1993-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Grand Cherokee (ZJ) 1993-1998').should('be.visible');
      cy.get('._1PRn').contains('Jeep').click(); // Возвращаемся к марке
})

     it('Liberty', function() {
      cy.get('._1Cqj').contains('Liberty').click();
      cy.get('._3Txt').contains('Liberty (KJ) 2002-2006').click();
      cy.get('._1PRn').contains('Liberty (KJ) 2002-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Liberty (KJ) 2002-2006').should('be.visible');
      cy.get('._1PRn').contains('Liberty').click();
      cy.get('._3Txt').contains('Liberty c 2007 г.').click();
      cy.get('._1PRn').contains('Liberty c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Liberty c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Jeep').click(); // Возвращаемся к марке
})

     it('Patriot', function() {
      cy.get('._1Cqj').contains('Patriot').click();
      cy.get('._3Txt').contains('Patriot (MK74) c 2007 г.').click();
      cy.get('._1PRn').contains('Patriot (MK74) c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Patriot (MK74) c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Jeep').click(); // Возвращаемся к марке
})

     it('Renegade', function() {
      cy.get('._1Cqj').contains('Renegade').click();
      cy.get('._3Txt').contains('Renegade с 2014 г.').click();
      cy.get('._1PRn').contains('Renegade с 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Renegade с 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Jeep').click(); // Возвращаемся к марке
})

     it('Wrangler', function() {
      cy.get('._1Cqj').contains('Wrangler').click();
      cy.get('._3Txt').contains('Wrangler (JK) c 2006 г.').click();
      cy.get('._1PRn').contains('Wrangler (JK) c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Wrangler (JK) c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Wrangler').click();
      cy.get('._3Txt').contains('Wrangler II (TJ) (1997 - 2006)').click();
      cy.get('._1PRn').contains('Wrangler II (TJ) (1997 - 2006)').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jeep Wrangler II (TJ) (1997 - 2006)').should('be.visible');
})
})