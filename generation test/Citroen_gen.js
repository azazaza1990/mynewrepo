describe("Citroen", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('AX', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Citroen').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('AX').click();
      cy.get('._3Txt').contains('AX 1986-1998').click();
      cy.get('._1PRn').contains('AX 1986-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen AX 1986-1998').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('BX', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('BX').click();
      cy.get('._3Txt').contains('BX 1983-1994').click();
      cy.get('._1PRn').contains('BX 1983-1994').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen BX 1983-1994').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('Berlingo', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Berlingo').click();
      cy.get('._3Txt').contains('Berlingo (NEW) (B9) c 2008 г.').click();
      cy.get('._1PRn').contains('Berlingo (NEW) (B9) c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Berlingo (NEW) (B9) c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Berlingo').click();
      cy.get('._3Txt').contains('Berlingo 1996-2002').click();
      cy.get('._1PRn').contains('Berlingo 1996-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Berlingo 1996-2002').should('be.visible');
      cy.get('._1PRn').contains('Berlingo').click();
      cy.get('._3Txt').contains('Berlingo(FIRST) (M59) 2002-2010').click();
      cy.get('._1PRn').contains('Berlingo(FIRST) (M59) 2002-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Berlingo(FIRST) (M59) 2002-2010').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('C-Crosser', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C-Crosser').click();
      cy.get('._3Txt').contains('C-Crosser c 2008 г.').click();
      cy.get('._1PRn').contains('C-Crosser c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C-Crosser c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('C-Elysee', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C-Elysee').click();
      cy.get('._3Txt').contains('C-Elysee c 2012 г.').click();
      cy.get('._1PRn').contains('C-Elysee c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C-Elysee c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('C1', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C1').click();
      cy.get('._3Txt').contains('C1 c 2005 г.').click();
      cy.get('._1PRn').contains('C1 c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C1 c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})
     it('C2', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C2').click();
      cy.get('._3Txt').contains('C2 c 2003 г.').click();
      cy.get('._1PRn').contains('C2 c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C2 c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('С3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C3').click();
      cy.get('._3Txt').contains('C3 2002-2009').click();
      cy.get('._1PRn').contains('C3 2002-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C3 2002-2009').should('be.visible');
      cy.get('._1PRn').contains('C3').click();
      cy.get('._3Txt').contains('C3 Picasso c 2008 г.').click();
      cy.get('._1PRn').contains('C3 Picasso c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C3 Picasso c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('C3').click();
      cy.get('._3Txt').contains('C3 c 2009 г.').click();
      cy.get('._1PRn').contains('C3 c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen С3 c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('С4', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('С4').click();
      cy.get('._3Txt').contains('C4 2005-2011').click();
      cy.get('._1PRn').contains('C4 2005-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C4 2005-2011').should('be.visible');
      cy.get('._1PRn').contains('С4').click();
      cy.get('._3Txt').contains('C4 Aircross c 2012 г.').click();
      cy.get('._1PRn').contains('C4 Aircross c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C4 Aircross c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('С4').click();
      cy.get('._3Txt').contains('C4 Grand Picasso c 2006 г.').click();
      cy.get('._1PRn').contains('C4 Grand Picasso c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C4 Grand Picasso c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('С4').click();
      cy.get('._3Txt').contains('C4 II c 2011 г.').click();
      cy.get('._1PRn').contains('C4 II c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C4 II c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('С4').click();
      cy.get('._3Txt').contains('C4 Picasso II с 2013 г.').click();
      cy.get('._1PRn').contains('C4 Picasso II с 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C4 Picasso II с 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('С4').click();
      cy.get('._3Txt').contains('C4 Picasso c 2006 г.').click();
      cy.get('._1PRn').contains('C4 Picasso c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('C4 Picasso c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})
     it('C4 Cactus', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C4 Cactus').click();
      cy.get('._3Txt').contains('C4 Cactus I 2014 – н.в.').click();
      cy.get('._1PRn').contains('C4 Cactus I 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C4 Cactus I 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('С5', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('С5').click();
      cy.get('._3Txt').contains('C5 2001-2005').click();
      cy.get('._1PRn').contains('C5 2001-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C5 2001-2005').should('be.visible');
      cy.get('._1PRn').contains('С5').click();
      cy.get('._3Txt').contains('C5 2005-2008').click();
      cy.get('._1PRn').contains('C5 2005-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C5 2005-2008').should('be.visible');
      cy.get('._1PRn').contains('С5').click();
      cy.get('._3Txt').contains('C5 c 2008 г.').click();
      cy.get('._1PRn').contains('C5 c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C5 c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('C6', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C6').click();
      cy.get('._3Txt').contains('C6 c 2006 г.').click();
      cy.get('._1PRn').contains('C6 c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C6 c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('C8', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C8').click();
      cy.get('._3Txt').contains('C8 c 2002 г.').click();
      cy.get('._1PRn').contains('C8 c 2002 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen C8 c 2002 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('DS3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('DS3').click();
      cy.get('._3Txt').contains('DS3 c 2009 г.').click();
      cy.get('._1PRn').contains('DS3 c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen DS3 c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('DS4', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('DS4').click();
      cy.get('._3Txt').contains('DS4 c 2011 г.').click();
      cy.get('._1PRn').contains('DS4 c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen DS4 c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('DS5', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('DS5').click();
      cy.get('._3Txt').contains('DS5 2012').click();
      cy.get('._1PRn').contains('DS5 2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen DS5 2012').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('Evasion', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Evasion').click();
      cy.get('._3Txt').contains('Evasion 1994-2002').click();
      cy.get('._1PRn').contains('Evasion 1994-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Evasion 1994-2002').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('Jumper', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Jumper').click();
      cy.get('._3Txt').contains('Jumper 1994-2002').click();
      cy.get('._1PRn').contains('Jumper 1994-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Jumper 1994-2002').should('be.visible');
      cy.get('._1PRn').contains('Jumper').click();
      cy.get('._3Txt').contains('Jumper 2002-2006').click();
      cy.get('._1PRn').contains('Jumper 2002-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Jumper 2002-2006').should('be.visible');
      cy.get('._1PRn').contains('Jumper').click();
      cy.get('._3Txt').contains('Jumper c 2006 г.').click();
      cy.get('._1PRn').contains('Jumper c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Jumper c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('Jumpy', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Jumpy').click();
      cy.get('._3Txt').contains('Jumpy I 1994 – 2006').click();
      cy.get('._1PRn').contains('Jumpy I 1994 – 2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Jumper 1994-2002').should('be.visible');
      cy.get('._1PRn').contains('Jumpy').click();
      cy.get('._3Txt').contains('Jumpy II 2007 – 2016').click();
      cy.get('._1PRn').contains('Jumpy II 2007 – 2016').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Jumpy II 2007 – 2016').should('be.visible');
      cy.get('._1PRn').contains('Jumpy').click();
      cy.get('._3Txt').contains('Jumpy III 2016 - н.в.').click();
      cy.get('._1PRn').contains('Jumpy III 2016 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Jumpy III 2016 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('Saxo', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Saxo').click();
      cy.get('._3Txt').contains('Saxo 1996-1999').click();
      cy.get('._1PRn').contains('Saxo 1996-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Saxo 1996-1999').should('be.visible');
      cy.get('._1PRn').contains('Saxo').click();
      cy.get('._3Txt').contains('Saxo 1999-2003').click();
      cy.get('._1PRn').contains('Saxo 1999-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Saxo 1999-2003').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('XM', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('XM').click();
      cy.get('._3Txt').contains('XM 1989-2000').click();
      cy.get('._1PRn').contains('XM 1989-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen XM 1989-2000').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('Xantia', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Xantia').click();
      cy.get('._3Txt').contains('Xantia 1993-1998').click();
      cy.get('._1PRn').contains('Xantia 1993-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Xantia 1993-1998').should('be.visible');
      cy.get('._1PRn').contains('Xantia').click();
      cy.get('._3Txt').contains('Xantia 1998-2000').click();
      cy.get('._1PRn').contains('Xantia 1998-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Xantia 1998-2000').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('Xsara', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Xsara').click();
      cy.get('._3Txt').contains('Xsara 1997-2000').click();
      cy.get('._1PRn').contains('Xsara 1997-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Xsara 1997-2000').should('be.visible');
      cy.get('._1PRn').contains('Xsara').click();
      cy.get('._3Txt').contains('Xsara 2000-2005').click();
      cy.get('._1PRn').contains('Xsara 2000-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Xsara 2000-2005').should('be.visible');
      cy.get('._1PRn').contains('Xsara').click();
      cy.get('._3Txt').contains('Xsara Picasso c 1999 г.').click();
      cy.get('._1PRn').contains('Xsara Picasso c 1999 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen Xsara Picasso c 1999 г.').should('be.visible');
      cy.get('._1PRn').contains('Citroen').click(); // Возвращаемся к марке
})

     it('ZX', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('ZX').click();
      cy.get('._3Txt').contains('ZX 1991-1997').click();
      cy.get('._1PRn').contains('ZX 1991-1997').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Citroen ZX 1991-1997').should('be.visible');
})
})
