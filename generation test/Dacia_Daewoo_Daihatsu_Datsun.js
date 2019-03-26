describe("Dacia_daewoo_Daihatsu_Datsun", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})

     it('Dacia Lodgy', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Dacia').click();
      cy.get('._1Cqj').contains('Lodgy').click();
      cy.get('._3Txt').contains('Lodgy 2012 – н.в').click();
      cy.get('._1PRn').contains('Lodgy 2012 – н.в').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Dacia Lodgy 2012 – н.в').should('be.visible');
      cy.get('._1PRn').contains('Dacia').click(); // Возвращаемся к марке
})

     it('Dacia Logan', function() {
      cy.get('._1Cqj').contains('Logan').click();
      cy.get('._3Txt').contains('Logan I 2006 – 2012').click();
      cy.get('._1PRn').contains('Logan I 2006 – 2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Dacia Logan I 2006 – 2012').should('be.visible');
      cy.get('._1PRn').contains('Dacia').click(); // Возвращаемся к марке
})

     it('Dacia Sandero', function() {
      cy.get('._1Cqj').contains('Sandero').click();
      cy.get('._3Txt').contains('Sandero II 2013 – н.в.').click();
      cy.get('._1PRn').contains('Sandero II 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Dacia Sandero II 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к легковым
})

     it('Daewoo Espero', function() {
      cy.get('._3WQJ').contains('Daewoo').click();
      cy.get('._1Cqj').contains('Espero').click();
      cy.get('._3Txt').contains('Espero 1991-1999').click();
      cy.get('._1PRn').contains('Espero 1991-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Espero 1991-1999').should('be.visible');
      cy.get('._1PRn').contains('Daewoo').click(); // Возвращаемся к марке
})

     it('Daewoo Gentra', function() {
      cy.get('._1Cqj').contains('Gentra').click();
      cy.get('._3Txt').contains('Gentra II c 2013 г.').click();
      cy.get('._1PRn').contains('Gentra II c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Gentra II c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Daewoo').click(); // Возвращаемся к марке
})

     it('Daewoo Kalos', function() {
      cy.get('._1Cqj').contains('Kalos').click();
      cy.get('._3Txt').contains('Kalos 2002 – 2006').click();
      cy.get('._1PRn').contains('Kalos 2002 – 2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Kalos 2002 – 2006').should('be.visible');
      cy.get('._1PRn').contains('Daewoo').click(); // Возвращаемся к марке
})

     it('Daewoo Lacetti', function() {
      cy.get('._1Cqj').contains('Lacetti').click();
      cy.get('._3Txt').contains('Lacetti 2003 – 2009').click();
      cy.get('._1PRn').contains('Lacetti 2003 – 2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Lacetti 2003 – 2009').should('be.visible');
      cy.get('._1PRn').contains('Daewoo').click(); // Возвращаемся к марке
})

     it('Daewoo Lanos', function() {
      cy.get('._1Cqj').contains('Lanos').click();
      cy.get('._3Txt').contains('Lanos c 1997 г.').click();
      cy.get('._1PRn').contains('Lanos c 1997 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Lanos c 1997 г.').should('be.visible');
      cy.get('._1PRn').contains('Daewoo').click(); // Возвращаемся к марке
})

     it('Daewoo Leganza', function() {
      cy.get('._1Cqj').contains('Leganza').click();
      cy.get('._3Txt').contains('Leganza 1997-2003').click();
      cy.get('._1PRn').contains('Leganza 1997-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Leganza 1997-2003').should('be.visible');
      cy.get('._1PRn').contains('Daewoo').click(); // Возвращаемся к марке
})

     it('Daewoo Matiz', function() {
      cy.get('._1Cqj').contains('Matiz').click();
      cy.get('._3Txt').contains('Matiz (KLYA) c 1998 г.').click();
      cy.get('._1PRn').contains('Matiz (KLYA) c 1998 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Matiz (KLYA) c 1998 г.').should('be.visible');
      cy.get('._1PRn').contains('Matiz').click();
      cy.get('._3Txt').contains('Matiz c 2001 г.').click();
      cy.get('._1PRn').contains('Matiz c 2001 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Matiz c 2001 г.').should('be.visible');
      cy.get('._1PRn').contains('Daewoo').click(); // Возвращаемся к марке
})

     it('Daewoo Nexia', function() {
      cy.get('._1Cqj').contains('Nexia').click();
      cy.get('._3Txt').contains('Nexia c 1995 г.').click();
      cy.get('._1PRn').contains('Nexia c 1995 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Nexia c 1995 г.').should('be.visible');
      cy.get('._1PRn').contains('Daewoo').click(); // Возвращаемся к марке
})

     it('Daewoo Nubira', function() {
      cy.get('._1Cqj').contains('Nubira').click();
      cy.get('._3Txt').contains('Nubira J100 1997 – 2000').click();
      cy.get('._1PRn').contains('Nubira J100 1997 – 2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Nubira J100 1997 – 2000').should('be.visible');
      cy.get('._1PRn').contains('Nubira').click();
      cy.get('._3Txt').contains('Nubira J150 2000 – 2003').click();
      cy.get('._1PRn').contains('Nubira J150 2000 – 2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Nubira J150 2000 – 2003').should('be.visible');
      cy.get('._1PRn').contains('Nubira').click();
      cy.get('._3Txt').contains('Nubira J200 2003 – 2004').click();
      cy.get('._1PRn').contains('Nubira J200 2003 – 2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Nubira J200 2003 – 2004').should('be.visible');
      cy.get('._1PRn').contains('Daewoo').click(); // Возвращаемся к марке
})

     it('Daewoo Rezzo', function() {
      cy.get('._1Cqj').contains('Rezzo').click();
      cy.get('._3Txt').contains('Rezzo c 2000 г.').click();
      cy.get('._1PRn').contains('Rezzo c 2000 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Rezzo c 2000 г.').should('be.visible');
      cy.get('._1PRn').contains('Daewoo').click(); // Возвращаемся к марке
})

     it('Daewoo Tacuma', function() {
      cy.get('._1Cqj').contains('Tacuma').click();
      cy.get('._3Txt').contains('Tacuma 2001 – 2011').click();
      cy.get('._1PRn').contains('Tacuma 2001 – 2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daewoo Tacuma 2001 – 2011').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к легковым
})

     it('Daihatsu Charade', function() {
      cy.get('._3WQJ').contains('Daihatsu').click();
      cy.get('._1Cqj').contains('Charade').click();
      cy.get('._3Txt').contains('Charade IV 1993 - 2000').click();
      cy.get('._1PRn').contains('Charade IV 1993 - 2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daihatsu Charade IV 1993 - 2000').should('be.visible');
      cy.get('._1PRn').contains('Daihatsu').click(); // Возвращаемся к марке
})
     it('Daihatsu Cuore', function() {
      cy.get('._1Cqj').contains('Cuore').click();
      cy.get('._3Txt').contains('Cuore VI (L251) 2003 – 2007').click();
      cy.get('._1PRn').contains('Cuore VI (L251) 2003 – 2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daihatsu Cuore VI (L251) 2003 – 2007').should('be.visible');
      cy.get('._1PRn').contains('Daihatsu').click(); // Возвращаемся к марке
})
     it('Daihatsu Grand Move', function() {
      cy.get('._1Cqj').contains('Grand Move').click();
      cy.get('._3Txt').contains('Grand Move c 1995 г.').click();
      cy.get('._1PRn').contains('Grand Move c 1995 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daihatsu Grand Move c 1995 г.').should('be.visible');
      cy.get('._1PRn').contains('Daihatsu').click(); // Возвращаемся к марке
})

     it('Daihatsu Rocky', function() {
      cy.get('._1Cqj').contains('Rocky').click();
      cy.get('._3Txt').contains('Rocky 1989-1998').click();
      cy.get('._1PRn').contains('Rocky 1989-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daihatsu Rocky 1989-1998').should('be.visible');
      cy.get('._1PRn').contains('Daihatsu').click(); // Возвращаемся к марке
})

     it('Daihatsu Rocky', function() {
      cy.get('._1Cqj').contains('Rocky').click();
      cy.get('._3Txt').contains('Rocky 1989-1998').click();
      cy.get('._1PRn').contains('Rocky 1989-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daihatsu Rocky 1989-1998').should('be.visible');
      cy.get('._1PRn').contains('Daihatsu').click(); // Возвращаемся к марке
})

     it('Daihatsu Sirion', function() {
      cy.get('._1Cqj').contains('Sirion').click();
      cy.get('._3Txt').contains('Sirion II (M2) 2005 – н.в.').click();
      cy.get('._1PRn').contains('Sirion II (M2) 2005 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daihatsu Sirion II (M2) 2005 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Daihatsu').click(); // Возвращаемся к марке
})

     it('Daihatsu Terios', function() {
      cy.get('._1Cqj').contains('Terios').click();
      cy.get('._3Txt').contains('Terios (J1) 1998-2005').click();
      cy.get('._1PRn').contains('Terios (J1) 1998-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daihatsu Terios (J1) 1998-2005').should('be.visible');
      cy.get('._1PRn').contains('Terios').click();
      cy.get('._3Txt').contains('Terios II 2006 – н.в.').click();
      cy.get('._1PRn').contains('Terios II 2006 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Daihatsu Terios II 2006 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к марке
})

     it('Datsun On-Do', function() {
      cy.get('._3WQJ').contains('Datsun').click();
      cy.get('._1Cqj').contains('On-Do').click();
      cy.get('._3Txt').contains('On-Do c 2014 г.').click();
      cy.get('._1PRn').contains('On-Do c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Datsun On-Do c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Datsun').click(); // Возвращаемся к марке
})

     it('Datsun On-Do', function() {
      cy.get('._1Cqj').contains('mi-DO').click();
      cy.get('._3Txt').contains('mi-DO 2015 – н.в.').click();
      cy.get('._1PRn').contains('mi-DO 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Datsun mi-DO 2015 – н.в.').should('be.visible');
})
})
