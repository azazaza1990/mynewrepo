describe("BMW", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('BMW 1-Series', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('BMW').click();
      cy.get('._1Cqj').contains('1-Series').click();
      cy.get('._3Txt').contains('1-Series E82/E88 c 2006 г.').click();
      cy.get('._1PRn').contains('1-Series E82/E88 c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 1-Series E82/E88 c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('1-Series').click();
      cy.get('._3Txt').contains('1-Series E87/E81 c 2004 г.').click();
      cy.get('._1PRn').contains('1-Series E87/E81 c 2004 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 1-Series E87/E81 c 2004 г.').should('be.visible');
      cy.get('._1PRn').contains('1-Series').click();
      cy.get('._3Txt').contains('1-Series F20/F21 c 2011 г.').click();
      cy.get('._1PRn').contains('1-Series F20/F21 c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 1-Series F20/F21 c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW 2 Active Tourer', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('2 Active Tourer').click();
      cy.get('._3Txt').contains('2 Active Tourer (F45) 2014 – н.в.').click();
      cy.get('._1PRn').contains('2 Active Tourer (F45) 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 2 Active Tourer (F45) 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW 2-Series', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('2-Series').click();
      cy.get('._3Txt').contains('2-Series F22/F23 c 2014 г.').click();
      cy.get('._1PRn').contains('2-Series F22/F23 c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 2-Series F22/F23 c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW 3-Series', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('3-Series').click();
      cy.get('._3Txt').contains('3-Series E30 1982-1991').click();
      cy.get('._1PRn').contains('3-Series E30 1982-1991').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 3-Series E30 1982-1991').should('be.visible');
      cy.get('._1PRn').contains('3-Series').click();
      cy.get('._3Txt').contains('3-Series E36 1991-1998').click();
      cy.get('._1PRn').contains('3-Series E36 1991-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 3-Series E36 1991-1998').should('be.visible');
      cy.get('._1PRn').contains('3-Series').click();
      cy.get('._3Txt').contains('3-Series E46 1998-2005').click();
      cy.get('._1PRn').contains('3-Series E46 1998-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 3-Series E46 1998-2005').should('be.visible');
      cy.get('._1PRn').contains('3-Series').click();
      cy.get('._3Txt').contains('3-Series E90/E91 c 2005 г.').click();
      cy.get('._1PRn').contains('3-Series E90/E91 c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 3-Series E90/E91 c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('3-Series').click();
      cy.get('._3Txt').contains('3-Series E92/E93 c 2006 г.').click();
      cy.get('._1PRn').contains('3-Series E92/E93 c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 3-Series E92/E93 c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('3-Series').click();
      cy.get('._3Txt').contains('3-Series F30/F31 c 2011 г.').click();
      cy.get('._1PRn').contains('3-Series F30/F31 c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 3-Series F30/F31 c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('3-Series').click();
      cy.get('._3Txt').contains('3-Series F34 GT c 2012 г.').click();
      cy.get('._1PRn').contains('3-Series F34 GT c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 3-Series F34 GT c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('3-Series').click();
      cy.get('._3Txt').contains('3-Series F80 M3 2014 - н.в.').click();
      cy.get('._1PRn').contains('3-Series F80 M3 2014 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 3-Series F80 M3 2014 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW 4-Series', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('4-Series').click();
      cy.get('._3Txt').contains('4-Series (F32, F33, F36) 2013 – н.в.').click();
      cy.get('._1PRn').contains('4-Series (F32, F33, F36) 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 4-Series (F32, F33, F36) 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW 5-Series', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('5-Series').click();
      cy.get('._3Txt').contains('5-Series E28 1981-1988').click();
      cy.get('._1PRn').contains('5-Series E28 1981-1988').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 5-Series E28 1981-1988').should('be.visible');
      cy.get('._1PRn').contains('5-Series').click();
      cy.get('._3Txt').contains('5-Series E34 1988-1995').click();
      cy.get('._1PRn').contains('5-Series E34 1988-1995').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 5-Series E34 1988-1995').should('be.visible');
      cy.get('._1PRn').contains('5-Series').click();
      cy.get('._3Txt').contains('5-Series E39 1995-2003').click();
      cy.get('._1PRn').contains('5-Series E39 1995-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 5-Series E39 1995-2003').should('be.visible');
      cy.get('._1PRn').contains('5-Series').click();
      cy.get('._3Txt').contains('5-Series E60/E61 2003-2009').click();
      cy.get('._1PRn').contains('5-Series E60/E61 2003-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 5-Series E60/E61 2003-2009').should('be.visible');
      cy.get('._1PRn').contains('5-Series').click();
      cy.get('._3Txt').contains('5-Series F10/F11 c 2009 г.').click();
      cy.get('._1PRn').contains('5-Series F10/F11 c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 5-Series F10/F11 c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('5-Series').click();
      cy.get('._3Txt').contains('5-Series G30 2016 – н.в.').click();
      cy.get('._1PRn').contains('5-Series G30 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 5-Series G30 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW 6-Series', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('6-Series').click();
      cy.get('._3Txt').contains('6-Series E24 1982-1990').click();
      cy.get('._1PRn').contains('6-Series E24 1982-1990').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 6-Series E24 1982-1990').should('be.visible');
      cy.get('._1PRn').contains('6-Series').click();
      cy.get('._3Txt').contains('6-Series E63 2004-2009').click();
      cy.get('._1PRn').contains('6-Series E63 2004-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 6-Series E63 2004-2009').should('be.visible');
      cy.get('._1PRn').contains('6-Series').click();
      cy.get('._3Txt').contains('6-Series E64 2004-2009').click();
      cy.get('._1PRn').contains('6-Series E64 2004-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 6-Series E64 2004-2009').should('be.visible');
      cy.get('._1PRn').contains('6-Series').click();
      cy.get('._3Txt').contains('6-Series F06 Grand Coupe c 2011 г.').click();
      cy.get('._1PRn').contains('6-Series F06 Grand Coupe c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 6-Series F06 Grand Coupe c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('6-Series').click();
      cy.get('._3Txt').contains('6-Series F12/F13 c 2009 г.').click();
      cy.get('._1PRn').contains('6-Series F12/F13 c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 6-Series F12/F13 c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('6-Series').click();
      cy.get('._3Txt').contains('6-Series IV (G32) 2017 – н.в.').click();
      cy.get('._1PRn').contains('6-Series IV (G32) 2017 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 6-Series IV (G32) 2017 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW 7-Series', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('7-Series').click();
      cy.get('._3Txt').contains('7-Series E32 1986-1994').click();
      cy.get('._1PRn').contains('7-Series E32 1986-1994').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 7-Series E32 1986-1994').should('be.visible');
      cy.get('._1PRn').contains('7-Series').click();
      cy.get('._3Txt').contains('7-Series E38 1994-2001').click();
      cy.get('._1PRn').contains('7-Series E38 1994-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 7-Series E38 1994-2001').should('be.visible');
      cy.get('._1PRn').contains('7-Series').click();
      cy.get('._3Txt').contains('7-Series E65/E66 2001-2008').click();
      cy.get('._1PRn').contains('7-Series E65/E66 2001-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 7-Series E65/E66 2001-2008').should('be.visible');
      cy.get('._1PRn').contains('7-Series').click();
      cy.get('._3Txt').contains('7-Series F01/F02 c 2008 г.').click();
      cy.get('._1PRn').contains('7-Series F01/F02 c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 7-Series F01/F02 c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('7-Series').click();
      cy.get('._3Txt').contains('7-Series G11/G12 с 2015г.').click();
      cy.get('._1PRn').contains('7-Series G11/G12 с 2015г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 7-Series G11/G12 с 2015г.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW 8-Series', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('8-Series').click();
      cy.get('._3Txt').contains('8-Series E31 1990-1999').click();
      cy.get('._1PRn').contains('8-Series E31 1990-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW 8-Series E31 1990-1999').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW GT', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('GT').click();
      cy.get('._3Txt').contains('GT F07 c 2008 г.').click();
      cy.get('._1PRn').contains('GT F07 c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW GT F07 c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW M2', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('M2').click();
      cy.get('._3Txt').contains('M2 (F87) 2015 – н.в.').click();
      cy.get('._1PRn').contains('M2 (F87) 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW M2 (F87) 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW M5', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('M5').click();
      cy.get('._3Txt').contains('M5 (F90) 2017 – н.в.').click();
      cy.get('._1PRn').contains('M5 (F90) 2017 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW M5 (F90) 2017 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW X1', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('X1').click();
      cy.get('._3Txt').contains('X1 E84 с 2009-2015 г.').click();
      cy.get('._1PRn').contains('X1 E84 с 2009-2015 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X1 E84 с 2009-2015 г.').should('be.visible');
      cy.get('._1PRn').contains('X1').click();
      cy.get('._3Txt').contains('X1 F48 с 2015 г.').click();
      cy.get('._1PRn').contains('X1 F48 с 2015 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X1 F48 с 2015 г.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW X3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('X3').click();
      cy.get('._3Txt').contains('X3 (E83) 2003 – 2010').click();
      cy.get('._1PRn').contains('X3 (E83) 2003 – 2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X3 (E83) 2003 – 2010').should('be.visible');
      cy.get('._1PRn').contains('X3').click();
      cy.get('._3Txt').contains('X3 (F25) 2010 – 2017').click();
      cy.get('._1PRn').contains('X3 (F25) 2010 – 2017').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X3 (F25) 2010 – 2017').should('be.visible');
      cy.get('._1PRn').contains('X3').click();
      cy.get('._3Txt').contains('X3 (G01) 2017 – н.в.').click();
      cy.get('._1PRn').contains('X3 (G01) 2017 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X3 (G01) 2017 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW X5', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('X5').click();
      cy.get('._3Txt').contains('X5 E53 2000-2007').click();
      cy.get('._1PRn').contains('X5 E53 2000-2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X5 E53 2000-2007').should('be.visible');
      cy.get('._1PRn').contains('X5').click();
      cy.get('._3Txt').contains('X5 E70 2007-2013').click();
      cy.get('._1PRn').contains('X5 E70 2007-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X5 E70 2007-2013').should('be.visible');
      cy.get('._1PRn').contains('X5').click();
      cy.get('._3Txt').contains('X5 F15 c 2013 г.').click();
      cy.get('._1PRn').contains('X5 F15 c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X5 F15 c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('X5').click();
      cy.get('._3Txt').contains('X5 M (F85) 2014 – н.в.').click();
      cy.get('._1PRn').contains('X5 M (F85) 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X5 M (F85) 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW X6', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('X6').click();
      cy.get('._3Txt').contains('X6 E71 2008-2014').click();
      cy.get('._1PRn').contains('X6 E71 2008-2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X6 E71 2008-2014').should('be.visible');
      cy.get('._1PRn').contains('X6').click();
      cy.get('._3Txt').contains('X6 F16 c 2014 г.').click();
      cy.get('._1PRn').contains('X6 F16 c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X6 F16 c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('X6').click();
      cy.get('._3Txt').contains('X6 M I (E71) 2009 – 2014').click();
      cy.get('._1PRn').contains('X6 M I (E71) 2009 – 2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('X6 M I (E71) 2009 – 2014').should('be.visible');
      cy.get('._1PRn').contains('X6').click();
      cy.get('._3Txt').contains('X6 M II (F86) 2014 – н.в.').click();
      cy.get('._1PRn').contains('X6 M II (F86) 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW X6 M II (F86) 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW Z3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Z3').click();
      cy.get('._3Txt').contains('Z3 1995-2003').click();
      cy.get('._1PRn').contains('Z3 1995-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW Z3 1995-2003').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW Z4', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Z4').click();
      cy.get('._3Txt').contains('Z4 E85 2002-2008').click();
      cy.get('._1PRn').contains('Z4 E85 2002-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW Z4 E85 2002-2008').should('be.visible');
      cy.get('._1PRn').contains('Z4').click();
      cy.get('._3Txt').contains('Z4 E86 2002-2008').click();
      cy.get('._1PRn').contains('Z4 E86 2002-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW Z4 E86 2002-2008').should('be.visible');
      cy.get('._1PRn').contains('Z4').click();
      cy.get('._3Txt').contains('Z4 E89 c 2009 г.').click();
      cy.get('._1PRn').contains('Z4 E89 c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW Z4 E89 c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW Z8', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Z8').click();
      cy.get('._3Txt').contains('Z8 2000-2003').click();
      cy.get('._1PRn').contains('Z8 2000-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW Z8 2000-2003').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})

     it('BMW i3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('i3').click();
      cy.get('._3Txt').contains('i3 I (I01) 2013 – н.в.').click();
      cy.get('._1PRn').contains('i3 I (I01) 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('BMW i3 I (I01) 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('BMW').click(); // Возвращаемся к марке
})
})
