describe("Peugeot", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('100-', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Peugeot').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('100-').click();
      cy.get('._3Txt').contains('106 I 1991-1996').click();
      cy.get('._1PRn').contains('106 I 1991-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 106 I 1991-1996').should('be.visible');
      cy.get('._1PRn').contains('100-').click();
      cy.get('._3Txt').contains('106 II 1996-1998').click();
      cy.get('._1PRn').contains('106 II 1996-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 106 II 1996-1998').should('be.visible');
      cy.get('._1PRn').contains('100-').click();
      cy.get('._3Txt').contains('107 c 2006 г.').click();
      cy.get('._1PRn').contains('107 c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 107 c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('1007', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('1007').click();
      cy.get('._3Txt').contains('1007 c 2005 г.').click();
      cy.get('._1PRn').contains('1007 c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 1007 c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('107', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('107').click();
      cy.get('._3Txt').contains('107 2005-2014').click();
      cy.get('._1PRn').contains('107 2005-2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 107 2005-2014').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('108', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('108').click();
      cy.get('._3Txt').contains('108 2014 – н.в.').click();
      cy.get('._1PRn').contains('108 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 108 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('2008', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('2008').click();
      cy.get('._3Txt').contains('2008 c 2013 г.').click();
      cy.get('._1PRn').contains('2008 c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 2008 c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('208', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('208').click();
      cy.get('._3Txt').contains('205 1983-1996').click();
      cy.get('._1PRn').contains('205 1983-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 205 1983-1996').should('be.visible');
      cy.get('._1PRn').contains('208').click();
      cy.get('._3Txt').contains('206 c 1998 г.').click();
      cy.get('._1PRn').contains('206 c 1998 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 206 c 1998 г.').should('be.visible');
      cy.get('._1PRn').contains('208').click();
      cy.get('._3Txt').contains('207 c 2006 г.').click();
      cy.get('._1PRn').contains('207 c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 207 c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('208').click();
      cy.get('._3Txt').contains('208 c 2012 г.').click();
      cy.get('._1PRn').contains('208 c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 208 c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('3008', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('3008').click();
      cy.get('._3Txt').contains('3008 I 2009 – 2016').click();
      cy.get('._1PRn').contains('3008 I 2009 – 2016').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 3008 I 2009 – 2016').should('be.visible');
      cy.get('._1PRn').contains('3008').click();
      cy.get('._3Txt').contains('3008 II 2016 – н.в.').click();
      cy.get('._1PRn').contains('3008 II 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 3008 II 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('301', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('301').click();
      cy.get('._3Txt').contains('301 c 2013 г.').click();
      cy.get('._1PRn').contains('301 c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 301 c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('308', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('308').click();
      cy.get('._3Txt').contains('305 1982-1990').click();
      cy.get('._1PRn').contains('305 1982-1990').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 305 1982-1990').should('be.visible');
      cy.get('._1PRn').contains('308').click();
      cy.get('._3Txt').contains('306 1993-2003').click();
      cy.get('._1PRn').contains('306 1993-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 306 1993-2003').should('be.visible');
      cy.get('._1PRn').contains('308').click();
      cy.get('._3Txt').contains('307 2001-2007').click();
      cy.get('._1PRn').contains('307 2001-2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 307 2001-2007').should('be.visible');
      cy.get('._1PRn').contains('308').click();
      cy.get('._3Txt').contains('308 c 2007 г.').click();
      cy.get('._1PRn').contains('308 c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 308 c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('308').click();
      cy.get('._3Txt').contains('308 c 2014 г.').click();
      cy.get('._1PRn').contains('308 c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 308 c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('308').click();
      cy.get('._3Txt').contains('309 1986-1993').click();
      cy.get('._1PRn').contains('309 1986-1993').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 309 1986-1993').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('4000-', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('4000-').click();
      cy.get('._3Txt').contains('4007 c 2008 г.').click();
      cy.get('._1PRn').contains('4007 c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 4007 c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('4000-').click();
      cy.get('._3Txt').contains('4008 c 2012 г.').click();
      cy.get('._1PRn').contains('4008 c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 4008 c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('408', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('408').click();
      cy.get('._3Txt').contains('405 1987-1992').click();
      cy.get('._1PRn').contains('405 1987-1992').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 405 1987-1992').should('be.visible');
      cy.get('._1PRn').contains('408').click();
      cy.get('._3Txt').contains('406 1995-1999').click();
      cy.get('._1PRn').contains('406 1995-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 406 1995-1999').should('be.visible');
      cy.get('._1PRn').contains('408').click();
      cy.get('._3Txt').contains('406 1999-2004').click();
      cy.get('._1PRn').contains('406 1999-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 406 1999-2004').should('be.visible');
      cy.get('._1PRn').contains('408').click();
      cy.get('._3Txt').contains('407 c 2004 г.').click();
      cy.get('._1PRn').contains('407 c 2004 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 407 c 2004 г.').should('be.visible');
      cy.get('._1PRn').contains('408').click();
      cy.get('._3Txt').contains('408 c 2012 г.').click();
      cy.get('._1PRn').contains('408 c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 408 c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('5008', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('5008').click();
      cy.get('._3Txt').contains('5008 c 2012 г.').click();
      cy.get('._1PRn').contains('5008 c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 5008 c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('508', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('508').click();
      cy.get('._3Txt').contains('508 c 2010 г.').click();
      cy.get('._1PRn').contains('508 c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 508 c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('600-', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('600-').click();
      cy.get('._3Txt').contains('605 1990-1993').click();
      cy.get('._1PRn').contains('605 1990-1993').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 605 1990-1993').should('be.visible');
      cy.get('._1PRn').contains('600-').click();
      cy.get('._3Txt').contains('605 1993-1998').click();
      cy.get('._1PRn').contains('605 1993-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 605 1993-1998').should('be.visible');
      cy.get('._1PRn').contains('600-').click();
      cy.get('._3Txt').contains('607 c 2000 г.').click();
      cy.get('._1PRn').contains('607 c 2000 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 607 c 2000 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('800-', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('800-').click();
      cy.get('._3Txt').contains('806 1994-2002').click();
      cy.get('._1PRn').contains('806 1994-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 806 1994-2002').should('be.visible');
      cy.get('._1PRn').contains('800-').click();
      cy.get('._3Txt').contains('807 c 2002 г.').click();
      cy.get('._1PRn').contains('807 c 2002 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot 807 c 2002 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('Bipper', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Bipper').click();
      cy.get('._3Txt').contains('Bipper c 2008 г.').click();
      cy.get('._1PRn').contains('Bipper c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Bipper c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('Boxer', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Boxer').click();
      cy.get('._3Txt').contains('Boxer 1994-2002').click();
      cy.get('._1PRn').contains('Boxer 1994-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Boxer 1994-2002').should('be.visible');
      cy.get('._1PRn').contains('Boxer').click();
      cy.get('._3Txt').contains('Boxer 2002-2005').click();
      cy.get('._1PRn').contains('Boxer 2002-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Boxer 2002-2005').should('be.visible');
      cy.get('._1PRn').contains('Boxer').click();
      cy.get('._3Txt').contains('Boxer 2014- н.в.').click();
      cy.get('._1PRn').contains('Boxer 2014- н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Boxer 2014- н.в.').should('be.visible');
      cy.get('._1PRn').contains('Boxer').click();
      cy.get('._3Txt').contains('Boxer c 2006 г.').click();
      cy.get('._1PRn').contains('Boxer c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Boxer c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('Expert', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Expert').click();
      cy.get('._3Txt').contains('Expert I 1995 - 2006').click();
      cy.get('._1PRn').contains('Expert I 1995 - 2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Expert I 1995 - 2006').should('be.visible');
      cy.get('._1PRn').contains('Expert').click();
      cy.get('._3Txt').contains('Expert II 2007 – 2016').click();
      cy.get('._1PRn').contains('Expert II 2007 – 2016').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Expert II 2007 – 2016').should('be.visible');
      cy.get('._1PRn').contains('Expert').click();
      cy.get('._3Txt').contains('Expert III 2016 - н.в.').click();
      cy.get('._1PRn').contains('Expert III 2016 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Expert III 2016 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('Partner', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Partner').click();
      cy.get('._3Txt').contains('Partner (M59) 2002-2010').click();
      cy.get('._1PRn').contains('Partner (M59) 2002-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Partner (M59) 2002-2010').should('be.visible');
      cy.get('._1PRn').contains('Partner').click();
      cy.get('._3Txt').contains('Partner 1996-2002').click();
      cy.get('._1PRn').contains('Partner 1996-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Partner 1996-2002').should('be.visible');
      cy.get('._1PRn').contains('Partner').click();
      cy.get('._3Txt').contains('Partner Tepee(B9) c 2008 г.').click();
      cy.get('._1PRn').contains('Partner Tepee(B9) c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Partner Tepee(B9) c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('RCZ', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('RCZ').click();
      cy.get('._3Txt').contains('RCZ c 2010 г.').click();
      cy.get('._1PRn').contains('RCZ c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot RCZ c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})

     it('Traveller', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Traveller').click();
      cy.get('._3Txt').contains('Traveller I 2016 – н.в.').click();
      cy.get('._1PRn').contains('Traveller I 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Peugeot Traveller I 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Peugeot').click(); // Возвращаемся к марке
})
})