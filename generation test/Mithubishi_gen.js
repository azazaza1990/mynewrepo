describe("Mitsubishi", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('ASX', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Mitsubishi').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('ASX').click();
      cy.get('._3Txt').contains('ASX c 2010 г.').click();
      cy.get('._1PRn').contains('ASX c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi ASX c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Carisma', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Carisma').click();
      cy.get('._3Txt').contains('Carisma (DA) 1995-2000').click();
      cy.get('._1PRn').contains('Carisma (DA) 1995-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Carisma (DA) 1995-2000').should('be.visible');
      cy.get('._1PRn').contains('Carisma').click();
      cy.get('._3Txt').contains('Carisma (DA) 2000-2003').click();
      cy.get('._1PRn').contains('Carisma (DA) 2000-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Carisma (DA) 2000-2003').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Chariot', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Chariot').click();
      cy.get('._3Txt').contains('Chariot Grandis (N11) 1997 - 2003').click();
      cy.get('._1PRn').contains('Chariot Grandis (N11) 1997 - 2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Chariot Grandis (N11) 1997 - 2003').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Colt', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Colt').click();
      cy.get('._3Txt').contains('Colt (CJ) 1996-2004').click();
      cy.get('._1PRn').contains('Colt (CJ) 1996-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Colt (CJ) 1996-2004').should('be.visible');
      cy.get('._1PRn').contains('Colt').click();
      cy.get('._3Txt').contains('Colt (Z3) 2004-2012').click();
      cy.get('._1PRn').contains('Colt (Z3) 2004-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Colt (Z3) 2004-2012').should('be.visible');
      cy.get('._1PRn').contains('Colt').click();
      cy.get('._3Txt').contains('Colt 1988-1992').click();
      cy.get('._1PRn').contains('Colt 1988-1992').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Colt 1988-1992').should('be.visible');
      cy.get('._1PRn').contains('Colt').click();
      cy.get('._3Txt').contains('Colt 1992-1996').click();
      cy.get('._1PRn').contains('Colt 1992-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Colt 1992-1996').should('be.visible');
      cy.get('._1PRn').contains('Colt').click();
      cy.get('._3Txt').contains('Colt VII c 2009 г.').click();
      cy.get('._1PRn').contains('Colt VII c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Colt VII c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('ENDEAVOR', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('ENDEAVOR').click();
      cy.get('._3Txt').contains('ENDEAVOR c 2003 г.').click();
      cy.get('._1PRn').contains('ENDEAVOR c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi ENDEAVOR c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Eclipse', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Eclipse').click();
      cy.get('._3Txt').contains('Eclipse I 1991-1995').click();
      cy.get('._1PRn').contains('Eclipse I 1991-1995').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Eclipse I 1991-1995').should('be.visible');
      cy.get('._1PRn').contains('Eclipse').click();
      cy.get('._3Txt').contains('Eclipse II 1995-1999').click();
      cy.get('._1PRn').contains('Eclipse II 1995-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Eclipse II 1995-1999').should('be.visible');
      cy.get('._1PRn').contains('Eclipse').click();
      cy.get('._3Txt').contains('Eclipse III 1999-2005').click();
      cy.get('._1PRn').contains('Eclipse III 1999-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Eclipse III 1999-2005').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('FTO', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('FTO').click();
      cy.get('._3Txt').contains('FTO 1994 – 2001').click();
      cy.get('._1PRn').contains('FTO 1994 – 2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi FTO 1994 – 2001').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Galant', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Galant').click();
      cy.get('._3Txt').contains('Galant (DJ,DM) 2003-2012').click();
      cy.get('._1PRn').contains('Galant (DJ,DM) 2003-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Galant (DJ,DM) 2003-2012').should('be.visible');
      cy.get('._1PRn').contains('Galant').click();
      cy.get('._3Txt').contains('Galant (E3) 1988-1993').click();
      cy.get('._1PRn').contains('Galant (E3) 1988-1993').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Galant (E3) 1988-1993').should('be.visible');
      cy.get('._1PRn').contains('Galant').click();
      cy.get('._3Txt').contains('Galant (E5) 1993-1997').click();
      cy.get('._1PRn').contains('Galant (E5) 1993-1997').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Galant (E5) 1993-1997').should('be.visible');
      cy.get('._1PRn').contains('Galant').click();
      cy.get('._3Txt').contains('Galant (EA) 1997-2003').click();
      cy.get('._1PRn').contains('Galant (EA) 1997-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Galant (EA) 1997-2003').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Grandis', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Grandis').click();
      cy.get('._3Txt').contains('Grandis (NA) 2004-2010').click();
      cy.get('._1PRn').contains('Grandis (NA) 2004-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Grandis (NA) 2004-2010').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('L200', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('L200').click();
      cy.get('._3Txt').contains('L200 (K0,K3) 1986-2001').click();
      cy.get('._1PRn').contains('L200 (K0,K3) 1986-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi L200 (K0,K3) 1986-2001').should('be.visible');
      cy.get('._1PRn').contains('L200').click();
      cy.get('._3Txt').contains('L200 (K6,K7) 1996-2006').click();
      cy.get('._1PRn').contains('L200 (K6,K7) 1996-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi L200 (K6,K7) 1996-2006').should('be.visible');
      cy.get('._1PRn').contains('L200').click();
      cy.get('._3Txt').contains('L200 (KB) c 2006 г.').click();
      cy.get('._1PRn').contains('L200 (KB) c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi L200 (KB) c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('L200').click();
      cy.get('._3Txt').contains('L200 V 2015 – н.в.').click();
      cy.get('._1PRn').contains('L200 V 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi L200 V 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Lancer', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Lancer').click();
      cy.get('._3Txt').contains('Lancer (C6) 1988-1992').click();
      cy.get('._1PRn').contains('Lancer (C6) 1988-1992').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Lancer (C6) 1988-1992').should('be.visible');
      cy.get('._1PRn').contains('Lancer').click();
      cy.get('._3Txt').contains('Lancer (CB) 1992-1996').click();
      cy.get('._1PRn').contains('Lancer (CB) 1992-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Lancer (CB) 1992-1996').should('be.visible');
      cy.get('._1PRn').contains('Lancer').click();
      cy.get('._3Txt').contains('Lancer (CK) 1996-2003').click();
      cy.get('._1PRn').contains('Lancer (CK) 1996-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Lancer (CK) 1996-2003').should('be.visible');
      cy.get('._1PRn').contains('Lancer').click();
      cy.get('._3Txt').contains('Lancer (CS/Classic) 2003-2006').click();
      cy.get('._1PRn').contains('Lancer (CS/Classic) 2003-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Lancer (CS/Classic) 2003-2006').should('be.visible');
      cy.get('._1PRn').contains('Lancer').click();
      cy.get('._3Txt').contains('Lancer (CX,CY) c 2007 г.').click();
      cy.get('._1PRn').contains('Lancer (CX,CY) c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Lancer (CX,CY) c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Lancer').click();
      cy.get('._3Txt').contains('Lancer Cedia 2000-2003').click();
      cy.get('._1PRn').contains('Lancer Cedia 2000-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Lancer Cedia 2000-2003').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Lancer Evolution', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Lancer Evolution').click();
      cy.get('._3Txt').contains('Lancer Evolution IX 2005 – 2007').click();
      cy.get('._1PRn').contains('Lancer Evolution IX 2005 – 2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Lancer Evolution IX 2005 – 2007').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Outlander', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Outlander').click();
      cy.get('._3Txt').contains('Outlander (CU) 2003-2009').click();
      cy.get('._1PRn').contains('Outlander (CU) 2003-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Outlander (CU) 2003-2009').should('be.visible');
      cy.get('._1PRn').contains('Outlander').click();
      cy.get('._3Txt').contains('Outlander (GF) c 2012 г.').click();
      cy.get('._1PRn').contains('Outlander (GF) c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Outlander (GF) c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Outlander').click();
      cy.get('._3Txt').contains('Outlander XL (CW) 2006-2012').click();
      cy.get('._1PRn').contains('Outlander XL (CW) 2006-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Outlander XL (CW) 2006-2012').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Pajero Sport', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Pajero Sport').click();
      cy.get('._3Txt').contains('Pajero Sport I 1998 – 2008').click();
      cy.get('._1PRn').contains('Pajero Sport I 1998 – 2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Pajero Sport I 1998 – 2008').should('be.visible');
      cy.get('._1PRn').contains('Pajero Sport').click();
      cy.get('._3Txt').contains('Pajero Sport II 2008 – 2016').click();
      cy.get('._1PRn').contains('Pajero Sport II 2008 – 2016').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Pajero Sport II 2008 – 2016').should('be.visible');
      cy.get('._1PRn').contains('Pajero Sport').click();
      cy.get('._3Txt').contains('Pajero Sport III 2015 – н.в.').click();
      cy.get('._1PRn').contains('Pajero Sport III 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Pajero Sport III 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Pajero/Montero', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Pajero/Montero').click();
      cy.get('._3Txt').contains('Pajero Pinin (H6,H7) 1999-2005').click();
      cy.get('._1PRn').contains('Pajero Pinin (H6,H7) 1999-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Pajero Pinin (H6,H7) 1999-2005').should('be.visible');
      cy.get('._1PRn').contains('Pajero/Montero').click();
      cy.get('._3Txt').contains('Pajero/Montero (V1, V2, V3, V4) 1991-1996').click();
      cy.get('._1PRn').contains('Pajero/Montero (V1, V2, V3, V4) 1991-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Pajero/Montero (V1, V2, V3, V4) 1991-1996').should('be.visible');
      cy.get('._1PRn').contains('Pajero/Montero').click();
      cy.get('._3Txt').contains('Pajero/Montero (V1, V2, V3, V4) 1997-2004').click();
      cy.get('._1PRn').contains('Pajero/Montero (V1, V2, V3, V4) 1997-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Pajero/Montero (V1, V2, V3, V4) 1997-2004').should('be.visible');
      cy.get('._1PRn').contains('Pajero/Montero').click();
      cy.get('._3Txt').contains('Pajero/Montero (V6, V7) 2000-2006').click();
      cy.get('._1PRn').contains('Pajero/Montero (V6, V7) 2000-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Pajero/Montero (V6, V7) 2000-2006').should('be.visible');
      cy.get('._1PRn').contains('Pajero/Montero').click();
      cy.get('._3Txt').contains('Pajero/Montero (V8, V9) c 2007 г.').click();
      cy.get('._1PRn').contains('Pajero/Montero (V8, V9) c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Pajero/Montero (V8, V9) c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Pajero/Montero').click();
      cy.get('._3Txt').contains('Pajero/Montero 1982-1990').click();
      cy.get('._1PRn').contains('Pajero/Montero 1982-1990').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Pajero/Montero 1982-1990').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Lancer Sigma', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Sigma').click();
      cy.get('._3Txt').contains('Sigma 1991-1996').click();
      cy.get('._1PRn').contains('Sigma 1991-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Sigma 1991-1996').should('be.visible');
      cy.get('._1PRn').contains('Mitsubishi').click(); // Возвращаемся к марке
})

     it('Space', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Space').click();
      cy.get('._3Txt').contains('Space Runner (N1,N2) 1991-1999').click();
      cy.get('._1PRn').contains('Space Runner (N1,N2) 1991-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Space Runner (N1,N2) 1991-1999').should('be.visible');
      cy.get('._1PRn').contains('Space').click();
      cy.get('._3Txt').contains('Space Runner (N6) 1999-2002').click();
      cy.get('._1PRn').contains('Space Runner (N6) 1999-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Space Runner (N6) 1999-2002').should('be.visible');
      cy.get('._1PRn').contains('Space').click();
      cy.get('._3Txt').contains('Space Star 1998-2004').click();
      cy.get('._1PRn').contains('Space Star 1998-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Space Star 1998-2004').should('be.visible');
      cy.get('._1PRn').contains('Space').click();
      cy.get('._3Txt').contains('Space Wagon (N3,N4) 1991-2000').click();
      cy.get('._1PRn').contains('Space Wagon (N3,N4) 1991-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Space Wagon (N3,N4) 1991-2000').should('be.visible');
      cy.get('._1PRn').contains('Space').click();
      cy.get('._3Txt').contains('Space Wagon (N3,N4) 1991-2000').click();
      cy.get('._1PRn').contains('Space Wagon (N3,N4) 1991-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Space Wagon (N3,N4) 1991-2000').should('be.visible');
      cy.get('._1PRn').contains('Space').click();
      cy.get('._3Txt').contains('Space Wagon (N8,N9) 1998-2004').click();
      cy.get('._1PRn').contains('Space Wagon (N8,N9) 1998-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mitsubishi Space Wagon (N8,N9) 1998-2004').should('be.visible');
})
})