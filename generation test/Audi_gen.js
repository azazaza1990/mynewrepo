describe("Audi gen", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Audi 100/200', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Audi').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('100/200').click();
      cy.wait(2000);
      cy.get('._3Txt').contains('100 [C4] 1991-1994').click();
      cy.get('._1PRn').contains('100 [C4] 1991-1994').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi 100 [C4] 1991-1994').should('be.visible');
      cy.get('._1PRn').contains('100/200').click();
      cy.get('._1Cqj').contains('100/200 [C3] 1983-1991').click();
      cy.get('._1PRn').contains('100/200 [C3] 1983-1991').should('be.visible');
      cy.wait(1000);
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi 100/200 [C3] 1983-1991').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi 80/90', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('80/90').click();
      cy.wait(2000);
      cy.get('._3Txt').contains('80/90 [B2] 1978-1986').click();
      cy.get('._1PRn').contains('80/90 [B2] 1978-1986').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi 80/90 [B2] 1978-1986').should('be.visible');
      cy.get('._1PRn').contains('80/90').click();
      cy.get('._1Cqj').contains('80/90 [B3] 1986-1991').click();
      cy.get('._1PRn').contains('80/90 [B3] 1986-1991').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi 80/90 [B3] 1986-1991').should('be.visible');
      cy.get('._1PRn').contains('80/90').click();
      cy.get('._1Cqj').contains('80/90 [B4] 1991-1994').click();
      cy.get('._1PRn').contains('80/90 [B4] 1991-1994').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi 80/90 [B4] 1991-1994').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A1', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A1').click();
      cy.wait(2000);
      cy.get('._3Txt').contains('A1 [8X] 2010 - н.в.').click();
      cy.get('._1PRn').contains('A1 [8X] 2010 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A1 [8X] 2010 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A2', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A2').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('A2 [8Z] 2000-2005').click();
      cy.get('._1PRn').contains('A2 [8Z] 2000-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A2 [8Z] 2000-2005').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A3').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('A3 [8L] 1996-2003').click();
      cy.get('._1PRn').contains('A3 [8L] 1996-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A3 [8L] 1996-2003').should('be.visible');
      cy.wait(1000);
      cy.get('._1PRn').contains('A3').click();
      cy.get('._1Cqj').contains('A3 [8PA] 2004-2013').click( {force:true} );
      cy.get('._1PRn').contains('A3 [8PA] 2004-2013').should('be.visible');
      cy.wait(1000);
      cy.scrollTo('top');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A3 [8PA] 2004-2013').should('be.visible');
      cy.get('._1PRn').contains('A3').click();
      cy.get('._1Cqj').contains('A3 [8P] 2003-2013').click();
      cy.get('._1PRn').contains('A3 [8P] 2003-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A3 [8P] 2003-2013').should('be.visible');
      cy.get('._1PRn').contains('A3').click();
      cy.get('._1Cqj').contains('A3 [8V] 2012 - н.в.').click();
      cy.get('._1PRn').contains('A3 [8V] 2012 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A3 [8V] 2012 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A4', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A4').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('A4 Allroad [B8] 2009-2016').click();
      cy.get('._1PRn').contains('A4 Allroad [B8] 2009-2016').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A4 Allroad [B8] 2009-2016').should('be.visible');
      //cy.wait(1000);
      cy.get('._1PRn').contains('A4').click();
      cy.get('._1Cqj').contains('A4 Allroad [B9] 2016 - н.в.').click( {force:true} );
      cy.get('._1PRn').contains('A4 Allroad [B9] 2016 - н.в.').should('be.visible');
      cy.wait(1000);
      cy.scrollTo('top');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A4 Allroad [B9] 2016 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('A4').click();
      cy.get('._1Cqj').contains('A4 [B5] 1994-2001').click();
      cy.wait(1000);
      cy.get('._1PRn').contains('A4 [B5] 1994-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A4 [B5] 1994-2001').should('be.visible');
      cy.get('._1PRn').contains('A4').click();
      cy.get('._1Cqj').contains('A4 [B6] 2000-2006').click();
      cy.get('._1PRn').contains('A4 [B6] 2000-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A4 [B6] 2000-2006').should('be.visible');
      cy.get('._1PRn').contains('A4').click();
      cy.get('._1Cqj').contains('A4 [B7] 2004-2008').click();
      cy.get('._1PRn').contains('A4 [B7] 2004-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A4 [B7] 2004-2008').should('be.visible');
      cy.get('._1PRn').contains('A4').click();
      cy.get('._1Cqj').contains('A4 [B8] 2007-2015').click();
      cy.get('._1PRn').contains('A4 [B8] 2007-2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A4 [B8] 2007-2015').should('be.visible');
      cy.get('._1PRn').contains('A4').click();
      cy.get('._1Cqj').contains('A4 [B9] 2015 - н.в.').click();
      cy.get('._1PRn').contains('A4 [B9] 2015 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A4 [B9] 2015 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A5/S5', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A5/S5').click();
      //cy.wait(3000);
      cy.get('._3Txt').contains('A5/S5 II 2016 - н.в.').click();
      cy.get('._1PRn').contains('A5/S5 II 2016 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A5/S5 II 2016 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('A5/S5').click();
      cy.get('._1Cqj').contains('A5/S5 [8T] Cabrio 2007-2011').click();
      cy.get('._1PRn').contains('A5/S5 [8T] Cabrio 2007-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A5/S5 [8T] Cabrio 2007-2011').should('be.visible');
      cy.get('._1PRn').contains('A5/S5').click();
      cy.get('._1Cqj').contains('A5/S5 [8T] Coupe/Sportback 2007-2011').click();
      cy.get('._1PRn').contains('A5/S5 [8T] Coupe/Sportback 2007-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A5/S5 [8T] Coupe/Sportback 2007-2011').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A6', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A6').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('A6 [C4] 1994-1997').click();
      cy.get('._1PRn').contains('A6 [C4] 1994-1997').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A6 [C4] 1994-1997').should('be.visible');
      cy.get('._1PRn').contains('A6').click();
      cy.get('._1Cqj').contains('A6 [C5] 1997-2004').click();
      cy.get('._1PRn').contains('A6 [C5] 1997-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A6 [C5] 1997-2004').should('be.visible');
      cy.get('._1PRn').contains('A6').click();
      cy.get('._1Cqj').contains('A6 [C6,4F] 2004-2011').click();
      cy.get('._1PRn').contains('A6 [C6,4F] 2004-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A6 [C6,4F] 2004-2011').should('be.visible');
      cy.get('._1PRn').contains('A6').click();
      cy.get('._1Cqj').contains('A6 [C7,4G] 2011 - н.в.').click();
      cy.get('._1PRn').contains('A6 [C7,4G] 2011 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A6 [C7,4G] 2011 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A6 Allroad', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A6 Allroad').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('A6 Allroad [C5] 2000-2006').click();
      cy.get('._1PRn').contains('A6 Allroad [C5] 2000-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A6 Allroad [C5] 2000-2006').should('be.visible');
      cy.get('._1PRn').contains('A6 Allroad').click();
      cy.get('._1Cqj').contains('A6 Allroad [C6] 2006-2012').click();
      cy.get('._1PRn').contains('A6 Allroad [C6] 2006-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A6 Allroad [C6] 2006-2012').should('be.visible');
      cy.get('._1PRn').contains('A6 Allroad').click();
      cy.get('._1Cqj').contains('A6 Allroad [C7] 2012 - н.в.').click();
      cy.get('._1PRn').contains('A6 Allroad [C7] 2012 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A6 Allroad [C7] 2012 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A7', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A7').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('A7 [4G] 2010-2018').click();
      cy.get('._1PRn').contains('A7 [4G] 2010-2018').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A7 [4G] 2010-2018').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A8', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A8').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('A8 [D2] 1994-2002').click();
      cy.get('._1PRn').contains('A8 [D2] 1994-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A8 [D2] 1994-2002').should('be.visible');
      cy.get('._1PRn').contains('A8').click();
      cy.get('._1Cqj').contains('A8 [D3,4E] 2002-2010').click();
      cy.get('._1PRn').contains('A8 [D3,4E] 2002-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A8 [D3,4E] 2002-2010').should('be.visible');
      cy.get('._1PRn').contains('A8').click();
      cy.get('._1Cqj').contains('A8 [D4] 2010-2017').click();
      cy.get('._1PRn').contains('A8 [D4] 2010-2017').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi A8 [D4] 2010-2017').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi Q3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Q3').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('Q3 c 2012 г.').click();
      cy.get('._1PRn').contains('Q3 c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi Q3 c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi Q5', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Q5').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('Q5 I 2008-2017').click();
      cy.get('._1PRn').contains('Q5 I 2008-2017').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi Q5 I 2008-2017').should('be.visible');
      cy.get('._1PRn').contains('Q5').click();
      cy.get('._1Cqj').contains('Q5 II 2017 – н.в.').click();
      cy.get('._1PRn').contains('Q5 II 2017 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi Q5 II 2017 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi Q7', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Q7').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('Q7 2005-2014 г.').click();
      cy.get('._1PRn').contains('Q7 2005-2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi Q7 2005-2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Q7').click();
      cy.get('._1Cqj').contains('Q7 с 2015 г.').click();
      cy.get('._1PRn').contains('Q7 с 2015 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi Q7 с 2015 г.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi R8', function() {
      //cy.wait(2000);
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('R 8').click();
      cy.get('._3Txt').contains('R 8 c 2007 г.').click();
      cy.get('._1PRn').contains('R 8 c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi R 8 c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi RS Q3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('RS Q3').click();
      cy.get('._3Txt').contains('RS Q3 (Typ 8U) 2013 – н.в.').click();
      cy.get('._1PRn').contains('RS Q3 (Typ 8U) 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi RS Q3 (Typ 8U) 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi RS3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('RS3').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('RS3 I 2011 – 2013').click();
      cy.get('._1PRn').contains('RS3 I 2011 – 2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi RS3 I 2011 – 2013').should('be.visible');
      cy.get('._1PRn').contains('RS3').click();
      cy.get('._1Cqj').contains('RS3 II 2015 – н.в.').click();
      cy.get('._1PRn').contains('RS3 II 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi RS3 II 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi RS4', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('RS4').click();
      cy.get('._3Txt').contains('RS4 III (B8) 2012 – 2015').click();
      cy.get('._1PRn').contains('RS4 III (B8) 2012 – 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi RS4 III (B8) 2012 – 2015').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi RS6', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('RS6').click();
      cy.get('._3Txt').contains('RS6 III (C7) 2013 – н.в.').click();
      cy.get('._1PRn').contains('RS6 III (C7) 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi RS6 III (C7) 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi RS7', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('RS7').click();
      cy.get('._3Txt').contains('RS7 I 2013 – н.в.').click();
      cy.get('._1PRn').contains('RS7 I 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi RS7 I 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi S8', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('S8').click();
      cy.get('._3Txt').contains('S8 (D4) 2012 – н.в.').click();
      cy.get('._1PRn').contains('S8 (D4) 2012 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi S8 (D4) 2012 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi TT', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('TT').click();
      //cy.wait(2000);
      cy.get('._3Txt').contains('TT(8J3) c 2006 г.').click();
      cy.get('._1PRn').contains('TT(8J3) c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi TT(8J3) c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('TT').click();
      cy.get('._1Cqj').contains('TT(8N3) 1998-2006').click();
      cy.get('._1PRn').contains('TT(8N3) 1998-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi TT(8N3) 1998-2006').should('be.visible');
      cy.get('._1PRn').contains('TT').click();
      cy.get('._1Cqj').contains('TT(8S) c 2014 г.').click();
      cy.get('._1PRn').contains('TT(8S) c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi TT(8S) c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi V8', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('V8').click();
      cy.get('._3Txt').contains('V8 1988-1994').click();
      cy.get('._1PRn').contains('V8 1988-1994').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Audi V8 1988-1994').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})
})
