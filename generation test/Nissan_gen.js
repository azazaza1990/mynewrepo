describe("Nissan", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('100NX', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Nissan').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('100NX').click();
      cy.get('._3Txt').contains('100NX (B13) 1990-1994').click();
      cy.get('._1PRn').contains('100NX (B13) 1990-1994').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan 100NX (B13) 1990-1994').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('300ZX', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('300ZX').click();
      cy.get('._3Txt').contains('300 ZX Z32 1990-1996').click();
      cy.get('._1PRn').contains('300 ZX Z32 1990-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan 300 ZX Z32 1990-1996').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('350Z', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('350Z').click();
      cy.get('._3Txt').contains('350Z c 2003 г.').click();
      cy.get('._1PRn').contains('350Z c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan 350Z c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('AD', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('AD').click();
      cy.get('._3Txt').contains('AD II 1999 – 2008').click();
      cy.get('._1PRn').contains('AD II 1999 – 2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan AD II 1999 – 2008').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Almera', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Almera').click();
      cy.get('._3Txt').contains('Almera (G15) c 2013 г.').click();
      cy.get('._1PRn').contains('Almera (G15) c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Almera (G15) c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Almera').click();
      cy.get('._3Txt').contains('Almera Classic (B10) c 2006 г.').click();
      cy.get('._1PRn').contains('Almera Classic (B10) c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Almera Classic (B10) c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Almera').click();
      cy.get('._3Txt').contains('Almera N15 1995-2000').click();
      cy.get('._1PRn').contains('Almera N15 1995-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Almera N15 1995-2000').should('be.visible');
      cy.get('._1PRn').contains('Almera').click();
      cy.get('._3Txt').contains('Almera N16 2000-2006').click();
      cy.get('._1PRn').contains('Almera N16 2000-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Almera N16 2000-2006').should('be.visible');
      cy.get('._1PRn').contains('Almera').click();
      cy.get('._3Txt').contains('Almera Tino c 2000 г.').click();
      cy.get('._1PRn').contains('Almera Tino c 2000 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Almera Tino c 2000 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Altima', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Altima').click();
      cy.get('._3Txt').contains('Altima III 2002 – 2006').click();
      cy.get('._1PRn').contains('Altima III 2002 – 2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Altima III 2002 – 2006').should('be.visible');
      cy.get('._1PRn').contains('Altima').click();
      cy.get('._3Txt').contains('Altima IV 2007 – 2012').click();
      cy.get('._1PRn').contains('Altima IV 2007 – 2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Altima IV 2007 – 2012').should('be.visible');
      cy.get('._1PRn').contains('Altima').click();
      cy.get('._3Txt').contains('Altima V 2012 – н.в.').click();
      cy.get('._1PRn').contains('Altima V 2012 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Altima V 2012 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Altima').click();
      cy.get('._3Txt').contains('Altima c 2012 г.').click();
      cy.get('._1PRn').contains('Altima c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Altima c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Armada', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Armada').click();
      cy.get('._3Txt').contains('Armada c 2006 г.').click();
      cy.get('._1PRn').contains('Armada c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Armada c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Avenir', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Avenir').click();
      cy.get('._3Txt').contains('Avenir II (W11) 1998 – 2005').click();
      cy.get('._1PRn').contains('Avenir II (W11) 1998 – 2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Avenir II (W11) 1998 – 2005').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Bluebird', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('#root > div > div.TjJL > div._11Gk > div > div > div._2qTd > div > div').contains('Bluebird').click();
      cy.get('._3Txt').contains('Bluebird (U13) 1991-1997').click();
      cy.get('._1PRn').contains('Bluebird (U13) 1991-1997').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Bluebird (U13) 1991-1997').should('be.visible');
      cy.get('._1PRn').contains('Bluebird').click();
      cy.get('._3Txt').contains('Bluebird Sylphy II (G11) 2005 – н.в.').click();
      cy.get('._1PRn').contains('Bluebird Sylphy II (G11) 2005 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Bluebird Sylphy II (G11) 2005 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Bluebird').click();
      cy.get('._3Txt').contains('Bluebird T72/T12 1985-1990').click();
      cy.get('._1PRn').contains('Bluebird T72/T12 1985-1990').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Bluebird T72/T12 1985-1990').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Cefiro', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Cefiro').click();
      cy.get('._3Txt').contains('Cefiro III (A33) 1998 – 2003').click();
      cy.get('._1PRn').contains('Cefiro III (A33) 1998 – 2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Cefiro III (A33) 1998 – 2003').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Cube', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Cube').click();
      cy.get('._3Txt').contains('Cube II (Z11) 2002 – 2008').click();
      cy.get('._1PRn').contains('Cube II (Z11) 2002 – 2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Cube II (Z11) 2002 – 2008').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Dualis', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('#root > div > div.TjJL > div._11Gk > div > div > div._2qTd > div > div > div > div._1Cqj > div > a:nth-child(12) > div > div._1Pzz').contains('Dualis').click();
      cy.get('._3Txt').contains('Dualis 2007-2014').click();
      cy.get('._1PRn').contains('Dualis 2007-2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Dualis 2007-2014').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Expert', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Expert').click();
      cy.get('._3Txt').contains('Expert 1999 – 2007').click();
      cy.get('._1PRn').contains('Expert 1999 – 2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Expert 1999 – 2007').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Fuga', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Fuga').click();
      cy.get('._3Txt').contains('Fuga I 2004 – 2009').click();
      cy.get('._1PRn').contains('Fuga I 2004 – 2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Fuga I 2004 – 2009').should('be.visible');
      cy.get('._1PRn').contains('Fuga').click();
      cy.get('._3Txt').contains('Fuga II 2009 – н.в').click();
      cy.get('._1PRn').contains('Fuga II 2009 – н.в').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Fuga II 2009 – н.в').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('GT-R', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('GT-R').click();
      cy.get('._3Txt').contains('GT-R c 2008 г.').click();
      cy.get('._1PRn').contains('GT-R c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan GT-R c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Juke', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Juke').click();
      cy.get('._3Txt').contains('Juke (F15) c 2011 г.').click();
      cy.get('._1PRn').contains('Juke (F15) c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Juke (F15) c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Laurel', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Laurel').click();
      cy.get('._3Txt').contains('Laurel C32 1984-1990').click();
      cy.get('._1PRn').contains('Laurel C32 1984-1990').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Laurel C32 1984-1990').should('be.visible');
      cy.get('._1PRn').contains('Laurel').click();
      cy.get('._3Txt').contains('Laurel VIII (C35) 1997-2002').click();
      cy.get('._1PRn').contains('Laurel VIII (C35) 1997-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Laurel VIII (C35) 1997-2002').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('March', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('March').click();
      cy.get('._3Txt').contains('March II (K11) 1991 – 2002').click();
      cy.get('._1PRn').contains('March II (K11) 1991 – 2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan March II (K11) 1991 – 2002').should('be.visible');
      cy.get('._1PRn').contains('March').click();
      cy.get('._3Txt').contains('March IV (K13) 2010 – н.в.').click();
      cy.get('._1PRn').contains('March IV (K13) 2010 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan March IV (K13) 2010 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Maxima', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Maxima').click();
      cy.get('._3Txt').contains('Maxima (A32) 1994-2000').click();
      cy.get('._1PRn').contains('Maxima (A32) 1994-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Maxima (A32) 1994-2000').should('be.visible');
      cy.get('._1PRn').contains('Maxima').click();
      cy.get('._3Txt').contains('Maxima (A34) c 2004 г.').click();
      cy.get('._1PRn').contains('Maxima (A34) c 2004 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Maxima (A34) c 2004 г.').should('be.visible');
      cy.get('._1PRn').contains('Maxima').click();
      cy.get('._3Txt').contains('Maxima (CA33) 2000-2006').click();
      cy.get('._1PRn').contains('Maxima (CA33) 2000-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Maxima (CA33) 2000-2006').should('be.visible');
      cy.get('._1PRn').contains('Maxima').click();
      cy.get('._3Txt').contains('Maxima (J30) 1988-1994').click();
      cy.get('._1PRn').contains('Maxima (J30) 1988-1994').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Maxima (J30) 1988-1994').should('be.visible');
      cy.get('._1PRn').contains('Maxima').click();
      cy.get('._3Txt').contains('Maxima QX34 USA c 2004 г.').click();
      cy.get('._1PRn').contains('Maxima QX34 USA c 2004 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Maxima QX34 USA c 2004 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Micra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Micra').click();
      cy.get('._3Txt').contains('Micra (K11E) 1992-2002').click();
      cy.get('._1PRn').contains('Micra (K11E) 1992-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Micra (K11E) 1992-2002').should('be.visible');
      cy.get('._1PRn').contains('Micra').click();
      cy.get('._3Txt').contains('Micra (K12E) c 2002 г.').click();
      cy.get('._1PRn').contains('Micra (K12E) c 2002 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Micra (K12E) c 2002 г.').should('be.visible');
      cy.get('._1PRn').contains('Micra').click();
      cy.get('._3Txt').contains('Micra (K13K) c 2010 г.').click();
      cy.get('._1PRn').contains('Micra (K13K) c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Micra (K13K) c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Murano', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Murano').click();
      cy.get('._3Txt').contains('Murano (Z50) 2004-2008').click();
      cy.get('._1PRn').contains('Murano (Z50) 2004-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Murano (Z50) 2004-2008').should('be.visible');
      cy.get('._1PRn').contains('Murano').click();
      cy.get('._3Txt').contains('Murano (Z51) c 2008 г.').click();
      cy.get('._1PRn').contains('Murano (Z51) c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Murano (Z51) c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Murano').click();
      cy.get('._3Txt').contains('Murano III (Z52) 2016-н.в.').click();
      cy.get('._1PRn').contains('Murano III (Z52) 2016-н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Murano III (Z52) 2016-н.в.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('NP300', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('NP300').click();
      cy.get('._3Txt').contains('NP300 c 2008 г.').click();
      cy.get('._1PRn').contains('NP300 c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan NP300 c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('NV200', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('NV200').click();
      cy.get('._3Txt').contains('NV200 (M20) c 2009 г.').click();
      cy.get('._1PRn').contains('NV200 (M20) c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan NV200 (M20) c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Navara', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Navara').click();
      cy.get('._3Txt').contains('Navara (Frontier) III (D40) 2004 – 2015').click();
      cy.get('._1PRn').contains('Navara (Frontier) III (D40) 2004 – 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Navara (Frontier) III (D40) 2004 – 2015').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Navara', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Navara').click();
      cy.get('._3Txt').contains('Navara (Frontier) III (D40) 2004 – 2015').click();
      cy.get('._1PRn').contains('Navara (Frontier) III (D40) 2004 – 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Navara (Frontier) III (D40) 2004 – 2015').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Note', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Note').click();
      cy.get('._3Txt').contains('Note (E11) 2006-2013').click();
      cy.get('._1PRn').contains('Note (E11) 2006-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Note (E11) 2006-2013').should('be.visible');
      cy.get('._1PRn').contains('Note').click();
      cy.get('._3Txt').contains('Note (E12) c 2013 г.').click();
      cy.get('._1PRn').contains('Note (E12) c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Note (E12) c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Pathfinder', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Pathfinder').click();
      cy.get('._3Txt').contains('Pathfinder (R51M) 2004-2013').click();
      cy.get('._1PRn').contains('Pathfinder (R51M) 2004-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Pathfinder (R51M) 2004-2013').should('be.visible');
      cy.get('._1PRn').contains('Pathfinder').click();
      cy.get('._3Txt').contains('Pathfinder (R52) c 2013 г.').click();
      cy.get('._1PRn').contains('Pathfinder (R52) c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Pathfinder (R52) c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Patrol', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Patrol').click();
      cy.get('._3Txt').contains('Patrol (Y60) 1987-1997').click();
      cy.get('._1PRn').contains('Patrol (Y60) 1987-1997').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Patrol (Y60) 1987-1997').should('be.visible');
      cy.get('._1PRn').contains('Patrol').click();
      cy.get('._3Txt').contains('Patrol (Y61) 1997-2009').click();
      cy.get('._1PRn').contains('Patrol (Y61) 1997-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Patrol (Y61) 1997-2009').should('be.visible');
      cy.get('._1PRn').contains('Patrol').click();
      cy.get('._3Txt').contains('Patrol (Y62) c 2010 г.').click();
      cy.get('._1PRn').contains('Patrol (Y62) c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Patrol (Y62) c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Pixo', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Pixo').click();
      cy.get('._3Txt').contains('Pixo c 2009 г.').click();
      cy.get('._1PRn').contains('Pixo c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Pixo c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Presage', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Presage').click();
      cy.get('._3Txt').contains('Presage (U31) 2003-2009').click();
      cy.get('._1PRn').contains('Presage (U31) 2003-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Presage (U31) 2003-2009').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Primastar', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Primastar').click();
      cy.get('._3Txt').contains('Primastar (X83) c 2002 г.').click();
      cy.get('._1PRn').contains('Primastar (X83) c 2002 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Primastar (X83) c 2002 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Primera', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Primera').click();
      cy.get('._3Txt').contains('Primera P10E 1990-1996').click();
      cy.get('._1PRn').contains('Primera P10E 1990-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Primera P10E 1990-1996').should('be.visible');
      cy.get('._1PRn').contains('Primera').click();
      cy.get('._3Txt').contains('Primera P11E 1996-2002').click();
      cy.get('._1PRn').contains('Primera P11E 1996-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Primera P11E 1996-2002').should('be.visible');
      cy.get('._1PRn').contains('Primera').click();
      cy.get('._3Txt').contains('Primera P12E c 2002 г.').click();
      cy.get('._1PRn').contains('Primera P12E c 2002 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Primera P12E c 2002 г.').should('be.visible');
      cy.get('._1PRn').contains('Primera').click();
      cy.get('._3Txt').contains('Primera W10 1990-1998').click();
      cy.get('._1PRn').contains('Primera W10 1990-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Primera W10 1990-1998').should('be.visible');
      cy.get('._1PRn').contains('Primera').click();
      cy.get('._3Txt').contains('Primera WP11E 1998-2001').click();
      cy.get('._1PRn').contains('Primera WP11E 1998-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Primera WP11E 1998-2001').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Pulsar', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Pulsar').click();
      cy.get('._3Txt').contains('Pulsar VI (NB17) 2014 – н.в.').click();
      cy.get('._1PRn').contains('Pulsar VI (NB17) 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Pulsar VI (NB17) 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Qashqai', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Qashqai').click();
      cy.get('._3Txt').contains('Qashqai (J10) 2006-2014').click();
      cy.get('._1PRn').contains('Qashqai (J10) 2006-2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Qashqai (J10) 2006-2014').should('be.visible');
      cy.get('._1PRn').contains('Qashqai').click();
      cy.get('._3Txt').contains('Qashqai (J11) c 2014 г.').click();
      cy.get('._1PRn').contains('Qashqai (J11) c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Qashqai (J11) c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Qashqai').click();
      cy.get('._3Txt').contains('Qashqai+2 (JJ10) 2008-2014').click();
      cy.get('._1PRn').contains('Qashqai+2 (JJ10) 2008-2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Qashqai+2 (JJ10) 2008-2014').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Quest (V42)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Quest (V42)').click();
      cy.get('._3Txt').contains('Quest (V42) 2003-2009').click();
      cy.get('._1PRn').contains('Quest (V42) 2003-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Quest (V42) 2003-2009').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Rogue', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Rogue').click();
      cy.get('._3Txt').contains('Rogue S35 I 2007-2013').click();
      cy.get('._1PRn').contains('Rogue S35 I 2007-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Rogue S35 I 2007-2013').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Safari', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Safari').click();
      cy.get('._3Txt').contains('Safari V (Y61) 1997 – 2007').click();
      cy.get('._1PRn').contains('Safari V (Y61) 1997 – 2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Safari V (Y61) 1997 – 2007').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Sentra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Sentra').click();
      cy.get('._3Txt').contains('Sentra (B17) c 2012 - н.в.').click();
      cy.get('._1PRn').contains('Sentra (B17) c 2012 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Sentra (B17) c 2012 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Sentra').click();
      cy.get('._3Txt').contains('Sentra VI (B16) 2006 – 2012').click();
      cy.get('._1PRn').contains('Sentra VI (B16) 2006 – 2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Sentra VI (B16) 2006 – 2012').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Serena', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Serena').click();
      cy.get('._3Txt').contains('Serena C23M 1992-2001').click();
      cy.get('._1PRn').contains('Serena C23M 1992-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Serena C23M 1992-2001').should('be.visible');
      cy.get('._1PRn').contains('Serena').click();
      cy.get('._3Txt').contains('Serena C24 c 1999 г.').click();
      cy.get('._1PRn').contains('Serena C24 c 1999 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Serena C24 c 1999 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Skyline', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Skyline').click();
      cy.get('._3Txt').contains('Skyline IX (R33) 1993 – 1998').click();
      cy.get('._1PRn').contains('Skyline IX (R33) 1993 – 1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Skyline IX (R33) 1993 – 1998').should('be.visible');
      cy.get('._1PRn').contains('Skyline').click();
      cy.get('._3Txt').contains('Skyline X (R34) 1998 – 2002').click();
      cy.get('._1PRn').contains('Skyline X (R34) 1998 – 2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Skyline X (R34) 1998 – 2002').should('be.visible');
      cy.get('._1PRn').contains('Skyline').click();
      cy.get('._3Txt').contains('Skyline XI (V35) 2001 – 2007').click();
      cy.get('._1PRn').contains('Skyline XI (V35) 2001 – 2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Skyline XI (V35) 2001 – 2007').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Stanza', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Stanza').click();
      cy.get('._3Txt').contains('Stanza T11 1981-1985').click();
      cy.get('._1PRn').contains('Stanza T11 1981-1985').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Stanza T11 1981-1985').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Sunny', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Sunny').click();
      cy.get('._3Txt').contains('Sunny B12/N13 1986-1990').click();
      cy.get('._1PRn').contains('Sunny B12/N13 1986-1990').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Sunny B12/N13 1986-1990').should('be.visible');
      cy.get('._1PRn').contains('Sunny').click();
      cy.get('._3Txt').contains('Sunny B14 1993-1998').click();
      cy.get('._1PRn').contains('Sunny B14 1993-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Sunny B14 1993-1998').should('be.visible');
      cy.get('._1PRn').contains('Sunny').click();
      cy.get('._3Txt').contains('Sunny N14 1990-1995').click();
      cy.get('._1PRn').contains('Sunny N14 1990-1995').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Sunny N14 1990-1995').should('be.visible');
      cy.get('._1PRn').contains('Sunny').click();
      cy.get('._3Txt').contains('Sunny Y10 1990-2000').click();
      cy.get('._1PRn').contains('Sunny Y10 1990-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Sunny Y10 1990-2000').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Teana', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Teana').click();
      cy.get('._3Txt').contains('Teana J31 2006-2008').click();
      cy.get('._1PRn').contains('Teana J31 2006-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Teana J31 2006-2008').should('be.visible');
      cy.get('._1PRn').contains('Teana').click();
      cy.get('._3Txt').contains('Teana J32 2008-2013').click();
      cy.get('._1PRn').contains('Teana J32 2008-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Teana J32 2008-2013').should('be.visible');
      cy.get('._1PRn').contains('Teana').click();
      cy.get('._3Txt').contains('Teana L33 c 2013 г.').click();
      cy.get('._1PRn').contains('Teana L33 c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Teana L33 c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Terrano', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Terrano').click();
      cy.get('._3Txt').contains('Terrano (D10) c 2014 г.').click();
      cy.get('._1PRn').contains('Terrano (D10) c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Terrano (D10) c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Terrano').click();
      cy.get('._3Txt').contains('Terrano I (WD21) 1987-1995').click();
      cy.get('._1PRn').contains('Terrano I (WD21) 1987-1995').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Terrano I (WD21) 1987-1995').should('be.visible');
      cy.get('._1PRn').contains('Terrano').click();
      cy.get('._3Txt').contains('Terrano II (R20) 1993-2004').click();
      cy.get('._1PRn').contains('Terrano II (R20) 1993-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Terrano II (R20) 1993-2004').should('be.visible');
      cy.get('._1PRn').contains('Terrano').click();
      cy.get('._3Txt').contains('Terrano III /Pathfinder (R50) 1997-2003').click();
      cy.get('._1PRn').contains('Terrano III /Pathfinder (R50) 1997-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Terrano III /Pathfinder (R50) 1997-2003').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Tiida', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Tiida').click();
      cy.get('._3Txt').contains('Tiida (C11) c 2007 г.').click();
      cy.get('._1PRn').contains('Tiida (C11) c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Tiida (C11) c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Tiida').click();
      cy.get('._3Txt').contains('Tiida (C13) c 2015 г.').click();
      cy.get('._1PRn').contains('Tiida (C13) c 2015 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Tiida (C13) c 2015 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Tino', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Tino').click();
      cy.get('._3Txt').contains('Tino 1998 – 2003').click();
      cy.get('._1PRn').contains('Tino 1998 – 2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Tino 1998 – 2003').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Urvan', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Urvan').click();
      cy.get('._3Txt').contains('Urvan (E24) 1986-1997').click();
      cy.get('._1PRn').contains('Urvan (E24) 1986-1997').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Urvan (E24) 1986-1997').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Vanette', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Vanette').click();
      cy.get('._3Txt').contains('Vanette Cargo (HC23) c 1996 г.').click();
      cy.get('._1PRn').contains('Vanette Cargo (HC23) c 1996 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Vanette Cargo (HC23) c 1996 г.').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('Versa', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Versa').click();
      cy.get('._3Txt').contains('Versa I 2007 – 2013').click();
      cy.get('._1PRn').contains('Versa I 2007 – 2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan Versa I 2007 – 2013').should('be.visible');
      cy.get('._1PRn').contains('Nissan').click(); // Возвращаемся к марке
})

     it('X-Trail', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('X-Trail').click();
      cy.get('._3Txt').contains('X-Trail (T30) 2001-2006').click();
      cy.get('._1PRn').contains('X-Trail (T30) 2001-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan X-Trail (T30) 2001-2006').should('be.visible');
      cy.get('._1PRn').contains('X-Trail').click();
      cy.get('._3Txt').contains('X-Trail (T31) c 2007 г.').click();
      cy.get('._1PRn').contains('X-Trail (T31) c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan X-Trail (T31) c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('X-Trail').click();
      cy.get('._3Txt').contains('X-Trail (T32) c 2014 г.').click();
      cy.get('._1PRn').contains('X-Trail (T32) c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan X-Trail (T32) c 2014 г.').should('be.visible');
})

     it('XTerra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('XTerra').click();
      cy.get('._3Txt').contains('XTerra (N50) c 2005 г.').click();
      cy.get('._1PRn').contains('XTerra (N50) c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Nissan XTerra (N50) c 2005 г.').should('be.visible');
})
})