describe("Mazda", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('121', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Mazda').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('121').click();
      cy.get('._3Txt').contains('121 (DB) 1990-1995').click();
      cy.get('._1PRn').contains('121 (DB) 1990-1995').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 121 (DB) 1990-1995').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('2', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('#root > div > div.TjJL > div > div > div > div._2qTd > div > div > div > div._2qTd > div > a:nth-child(2)').contains('2').click();
      cy.get('._3Txt').contains('2 (DE) c 2007 г.').click();
      cy.get('._1PRn').contains('2 (DE) c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 2 (DE) c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('2').click();
      cy.get('._3Txt').contains('2 (DJ) с 2014 г.').click();
      cy.get('._1PRn').contains('2 (DJ) с 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 2 (DJ) с 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('2').click();
      cy.get('._3Txt').contains('2 (DY) 2003-2006').click();
      cy.get('._1PRn').contains('2 (DY) 2003-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 2 (DY) 2003-2006').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('3').click();
      cy.get('._3Txt').contains('3 (BK) 2002-2009').click();
      cy.get('._1PRn').contains('3 (BK) 2002-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 3 (BK) 2002-2009').should('be.visible');
      cy.get('._1PRn').contains('3').click();
      cy.get('._3Txt').contains('3 (BL) 2009-2013').click();
      cy.get('._1PRn').contains('3 (BL) 2009-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 3 (BL) 2009-2013').should('be.visible');
      cy.get('._1PRn').contains('3').click();
      cy.get('._3Txt').contains('3 (BM) c 2013 г.').click();
      cy.get('._1PRn').contains('3 (BM) c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 3 (BM) c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('3 MPS', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('3 MPS').click();
      cy.get('._3Txt').contains('3 MPS I 2006–2008').click();
      cy.get('._1PRn').contains('3 MPS I 2006–2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 3 MPS I 2006–2008').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('323', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('323').click();
      cy.get('._3Txt').contains('323 (BA) 1994-1998').click();
      cy.get('._1PRn').contains('323 (BA) 1994-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 323 (BA) 1994-1998').should('be.visible');
      cy.get('._1PRn').contains('323').click();
      cy.get('._3Txt').contains('323 (BG) 1989-1994').click();
      cy.get('._1PRn').contains('323 (BG) 1989-1994').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 323 (BG) 1989-1994').should('be.visible');
      cy.get('._1PRn').contains('323').click();
      cy.get('._3Txt').contains('323 (BJ) 1998-2002').click();
      cy.get('._1PRn').contains('323 (BJ) 1998-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 323 (BJ) 1998-2002').should('be.visible');
      cy.get('._1PRn').contains('323').click();
      cy.get('._3Txt').contains('323 1980-1989').click();
      cy.get('._1PRn').contains('323 1980-1989').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 323 1980-1989').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('5', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('5').click();
      cy.get('._3Txt').contains('5 (CR) 2005-2010').click();
      cy.get('._1PRn').contains('5 (CR) 2005-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 5 (CR) 2005-2010').should('be.visible');
      cy.get('._1PRn').contains('5').click();
      cy.get('._3Txt').contains('5 (CW) c 2010 г.').click();
      cy.get('._1PRn').contains('5 (CW) c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 5 (CW) c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('6', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('6').click();
      cy.get('._3Txt').contains('6 (GG) 2002-2007').click();
      cy.get('._1PRn').contains('6 (GG) 2002-2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 6 (GG) 2002-2007').should('be.visible');
      cy.get('._1PRn').contains('6').click();
      cy.get('._3Txt').contains('6 (GH) 2007-2012').click();
      cy.get('._1PRn').contains('6 (GH) 2007-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 6 (GH) 2007-2012').should('be.visible');
      cy.get('._1PRn').contains('6').click();
      cy.get('._3Txt').contains('6 (GJ) c 2013 г.').click();
      cy.get('._1PRn').contains('6 (GJ) c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 6 (GJ) c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('626', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('626').click();
      cy.get('._3Txt').contains('626 (GC) 1983-1987').click();
      cy.get('._1PRn').contains('626 (GC) 1983-1987').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 626 (GC) 1983-1987').should('be.visible');
      cy.get('._1PRn').contains('626').click();
      cy.get('._3Txt').contains('626 (GD) 1987-1992').click();
      cy.get('._1PRn').contains('626 (GD) 1987-1992').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 626 (GD) 1987-1992').should('be.visible');
      cy.get('._1PRn').contains('626').click();
      cy.get('._3Txt').contains('626 (GE) 1992-1997').click();
      cy.get('._1PRn').contains('626 (GE) 1992-1997').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 626 (GE) 1992-1997').should('be.visible');
      cy.get('._1PRn').contains('626').click();
      cy.get('._3Txt').contains('626 (GF) 1997-2001').click();
      cy.get('._1PRn').contains('626 (GF) 1997-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda 626 (GF) 1997-2001').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('B-Series', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('B-Series').click();
      cy.get('._3Txt').contains('B-Series (UN) 1999-2006').click();
      cy.get('._1PRn').contains('B-Series (UN) 1999-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda B-Series (UN) 1999-2006').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('BT-50', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('BT-50').click();
      cy.get('._3Txt').contains('BT-50 2006-2012').click();
      cy.get('._1PRn').contains('BT-50 2006-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda BT-50 2006-2012').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('CX-3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('CX-3').click();
      cy.get('._3Txt').contains('CX-3 I 2015 – н.в.').click();
      cy.get('._1PRn').contains('CX-3 I 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda CX-3 I 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('CX-5', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('CX-5').click();
      cy.get('._3Txt').contains('CX-5 II 2016 – н.в').click();
      cy.get('._1PRn').contains('CX-5 II 2016 – н.в').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda CX-5 II 2016 – н.в').should('be.visible');
      cy.get('._1PRn').contains('CX-5').click();
      cy.get('._3Txt').contains('CX-5 c 2012 г.').click();
      cy.get('._1PRn').contains('CX-5 c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda CX-5 c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('CX-7', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('CX-7').click();
      cy.get('._3Txt').contains('CX-7 c 2007 г.').click();
      cy.get('._1PRn').contains('CX-7 c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda CX-7 c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('CX-9', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('CX-9').click();
      cy.get('._3Txt').contains('CX-9 2007-2016').click();
      cy.get('._1PRn').contains('CX-9 2007-2016').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda CX-9 2007-2016').should('be.visible');
      cy.get('._1PRn').contains('CX-9').click();
      cy.get('._3Txt').contains('CX-9 II 2016 – н.в.').click();
      cy.get('._1PRn').contains('CX-9 II 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda CX-9 II 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('Capella', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Capella').click();
      cy.get('._3Txt').contains('Capella VI 1998 – 2002').click();
      cy.get('._1PRn').contains('Capella VI 1998 – 2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda Capella VI 1998 – 2002').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('Demio', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Demio').click();
      cy.get('._3Txt').contains('Demio DW 1998-2000').click();
      cy.get('._1PRn').contains('Demio DW 1998-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda Demio DW 1998-2000').should('be.visible');
      cy.get('._1PRn').contains('Demio').click();
      cy.get('._3Txt').contains('Demio c 2000 г.').click();
      cy.get('._1PRn').contains('Demio c 2000 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda Demio c 2000 г.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('E 2000', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('E 2000').click();
      cy.get('._3Txt').contains('E 2000/E 2200 c 1984 г.').click();
      cy.get('._1PRn').contains('E 2000/E 2200 c 1984 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda E 2000/E 2200 c 1984 г.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('Demio', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Demio').click();
      cy.get('._3Txt').contains('Demio DW 1998-2000').click();
      cy.get('._1PRn').contains('Demio DW 1998-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda Demio DW 1998-2000').should('be.visible');
      cy.get('._1PRn').contains('Demio').click();
      cy.get('._3Txt').contains('Demio c 2000 г.').click();
      cy.get('._1PRn').contains('Demio c 2000 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda Demio c 2000 г.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('MPV', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('MPV').click();
      cy.get('._3Txt').contains('MPV I (LV) 1988-1999').click();
      cy.get('._1PRn').contains('MPV I (LV) 1988-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda MPV I (LV) 1988-1999').should('be.visible');
      cy.get('._1PRn').contains('MPV').click();
      cy.get('._3Txt').contains('MPV II (LW) 1999-2006').click();
      cy.get('._1PRn').contains('MPV II (LW) 1999-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda MPV II (LW) 1999-2006').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('MX-3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('MX-3').click();
      cy.get('._3Txt').contains('MX-3 1991-1998').click();
      cy.get('._1PRn').contains('MX-3 1991-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda MX-3 1991-1998').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('MX-5', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('MX-5').click();
      cy.get('._3Txt').contains('MX-5 I (NA) 1989-1998').click();
      cy.get('._1PRn').contains('MX-5 I (NA) 1989-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda MX-5 I (NA) 1989-1998').should('be.visible');
      cy.get('._1PRn').contains('MX-5').click();
      cy.get('._3Txt').contains('MX-5 II (NB) 1998-2005').click();
      cy.get('._1PRn').contains('MX-5 II (NB) 1998-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda MX-5 II (NB) 1998-2005').should('be.visible');
      cy.get('._1PRn').contains('MX-5').click();
      cy.get('._3Txt').contains('MX-5 III (NC) c 2005 г.').click();
      cy.get('._1PRn').contains('MX-5 III (NC) c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda MX-5 III (NC) c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('MX-6', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('MX-6').click();
      cy.get('._3Txt').contains('MX-6 (GE6) c 1991 г.').click();
      cy.get('._1PRn').contains('MX-6 (GE6) c 1991 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda MX-6 (GE6) c 1991 г.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('Millenia', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Millenia').click();
      cy.get('._3Txt').contains('Millenia I 1995 – 2002').click();
      cy.get('._1PRn').contains('Millenia I 1995 – 2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda Millenia I 1995 – 2002').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('Premacy', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Premacy').click();
      cy.get('._3Txt').contains('Premacy (CP) c 1999 г.').click();
      cy.get('._1PRn').contains('Premacy (CP) c 1999 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda Premacy (CP) c 1999 г.').should('be.visible');
      cy.get('._1PRn').contains('Premacy').click();
      cy.get('._3Txt').contains('Premacy II (CR) 2005 – 2010').click();
      cy.get('._1PRn').contains('Premacy II (CR) 2005 – 2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda Premacy II (CR) 2005 – 2010').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('RX-8', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('RX-8').click();
      cy.get('._3Txt').contains('RX-8 c 2003 г.').click();
      cy.get('._1PRn').contains('RX-8 c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda RX-8 c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('Tribute', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Tribute').click();
      cy.get('._3Txt').contains('Tribute I 2000 - 2007').click();
      cy.get('._1PRn').contains('Tribute I 2000 - 2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda Tribute I 2000 - 2007').should('be.visible');
      cy.get('._1PRn').contains('Mazda').click(); // Возвращаемся к марке
})

     it('Xedos', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Xedos').click();
      cy.get('._3Txt').contains('Xedos-6 c 1992 г.').click();
      cy.get('._1PRn').contains('Xedos-6 c 1992 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda Xedos-6 c 1992 г.').should('be.visible');
      cy.get('._1PRn').contains('Xedos').click();
      cy.get('._3Txt').contains('Xedos-9 c 1993 г.').click();
      cy.get('._1PRn').contains('Xedos-9 c 1993 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mazda Xedos-9 c 1993 г.').should('be.visible');
})
})