describe("Chrysler", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Chrysler 200', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Chrysler').click();
      cy.get('._1Cqj').contains('200').click();
      cy.get('._3Txt').contains('200 I 2010 – 2014').click();
      cy.get('._1PRn').contains('200 I 2010 – 2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler 200 I 2010 – 2014').should('be.visible');
      cy.get('._1PRn').contains('Chrysler').click(); // Возвращаемся к марке
})

     it('Chrysler 300', function() {
      cy.get('._1Cqj').contains('300').click();
      cy.get('._3Txt').contains('300C 2004-2011').click();
      cy.get('._1PRn').contains('300C 2004-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler 300C 2004-2011').should('be.visible');
      cy.get('._1PRn').contains('300').click();
      cy.get('._3Txt').contains('300C II 2011 – н.в.').click();
      cy.get('._1PRn').contains('300C II 2011 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler 300C II 2011 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('300').click();
      cy.get('._3Txt').contains('300M 1998-2004').click();
      cy.get('._1PRn').contains('300M 1998-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler 300M 1998-2004').should('be.visible');
      cy.get('._1PRn').contains('Chrysler').click(); // Возвращаемся к марке
})

     it('Chrysler Concorde', function() {
      cy.get('._1Cqj').contains('Concorde').click();
      cy.get('._3Txt').contains('Concorde 1998-2004').click();
      cy.get('._1PRn').contains('Concorde 1998-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Concorde 1998-2004').should('be.visible');
      cy.get('._1PRn').contains('Concorde').click();
      cy.get('._3Txt').contains('Concorde до 1998 г.').click();
      cy.get('._1PRn').contains('Concorde до 1998 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Concorde до 1998 г.').should('be.visible');
      cy.get('._1PRn').contains('Chrysler').click(); // Возвращаемся к марке
})

     it('Chrysler Crossfire', function() {
      cy.get('._1Cqj').contains('Crossfire').click();
      cy.get('._3Txt').contains('Crossfire 2004-2008').click();
      cy.get('._1PRn').contains('Crossfire 2004-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Crossfire 2004-2008').should('be.visible');
      cy.get('._1PRn').contains('Chrysler').click(); // Возвращаемся к марке
})

     it('Chrysler Crossfire', function() {
      cy.get('._1Cqj').contains('Grand Voyager/Grand Caravan').click();
      cy.get('._3Txt').contains('Grand Voyager/Grand Caravan c 2007 г.').click();
      cy.get('._1PRn').contains('Grand Voyager/Grand Caravan c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Grand Voyager/Grand Caravan c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Chrysler').click(); // Возвращаемся к марке
})

     it('Chrysler Neon', function() {
      cy.get('._1Cqj').contains('Neon').click();
      cy.get('._3Txt').contains('Neon 1995-1998').click();
      cy.get('._1PRn').contains('Neon 1995-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Neon 1995-1998').should('be.visible');
      cy.get('._1PRn').contains('Neon').click();
      cy.get('._3Txt').contains('Neon 1999-2005').click();
      cy.get('._1PRn').contains('Neon 1999-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Neon 1999-2005').should('be.visible');
      cy.get('._1PRn').contains('Chrysler').click(); // Возвращаемся к марке
})

     it('Chrysler PT Cruiser', function() {
      cy.get('._1Cqj').contains('PT Cruiser').click();
      cy.get('._3Txt').contains('PT Cruiser 2000-2010').click();
      cy.get('._1PRn').contains('PT Cruiser 2000-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler PT Cruiser 2000-2010').should('be.visible');
      cy.get('._1PRn').contains('Chrysler').click(); // Возвращаемся к марке
})

     it('Chrysler Pacifica', function() {
      cy.get('._1Cqj').contains('Pacifica').click();
      cy.get('._3Txt').contains('Pacifica c 2004 г.').click();
      cy.get('._1PRn').contains('Pacifica c 2004 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Pacifica c 2004 г.').should('be.visible');
      cy.get('._1PRn').contains('Chrysler').click(); // Возвращаемся к марке
})

     it('Chrysler Sebring/Cirrus/Stratus', function() {
      cy.get('._1Cqj').contains('Sebring/Cirrus/Stratus').click();
      cy.get('._3Txt').contains('Sebring c 2006 г.').click();
      cy.get('._1PRn').contains('Sebring c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Sebring c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Sebring/Cirrus/Stratus').click();
      cy.get('._3Txt').contains('Sebring/Dodge Stratus 2001-2006').click();
      cy.get('._1PRn').contains('Sebring/Dodge Stratus 2001-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Sebring/Dodge Stratus 2001-2006').should('be.visible');
      cy.get('._1PRn').contains('Sebring/Cirrus/Stratus').click();
      cy.get('._3Txt').contains('Stratus/Cirrus до 1999 г.').click();
      cy.get('._1PRn').contains('Stratus/Cirrus до 1999 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Stratus/Cirrus до 1999 г.').should('be.visible');
      cy.get('._1PRn').contains('Chrysler').click(); // Возвращаемся к марке
})

     it('Chrysler Vision', function() {
      cy.get('._1Cqj').contains('Vision').click();
      cy.get('._3Txt').contains('Vision c 1993 г.').click();
      cy.get('._1PRn').contains('Vision c 1993 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Vision c 1993 г.').should('be.visible');
      cy.get('._1PRn').contains('Chrysler').click(); // Возвращаемся к марке
})

     it('Chrysler Voyager/Caravan/TownCountry', function() {
      cy.get('._1Cqj').contains('Voyager/Caravan/TownCountry').click();
      cy.get('._3Txt').contains('Voyager/Caravan (RG) 2001-2008').click();
      cy.get('._1PRn').contains('Voyager/Caravan (RG) 2001-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Voyager/Caravan (RG) 2001-2008').should('be.visible');
      cy.get('._1PRn').contains('Voyager/Caravan/TownCountry').click();
      cy.get('._3Txt').contains('Voyager/Caravan 1991-1995').click();
      cy.get('._1PRn').contains('Voyager/Caravan 1991-1995').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Voyager/Caravan 1991-1995').should('be.visible');
      cy.get('._1PRn').contains('Voyager/Caravan/TownCountry').click();
      cy.get('._3Txt').contains('Voyager/Caravan 1996-2001').click();
      cy.get('._1PRn').contains('Voyager/Caravan 1996-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Voyager/Caravan 1996-2001').should('be.visible');
      cy.get('._1PRn').contains('Voyager/Caravan/TownCountry').click();
      cy.get('._3Txt').contains('Voyager/Caravan/Town&Country c 2008 г.').click();
      cy.get('._1PRn').contains('Voyager/Caravan/Town&Country c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chrysler Voyager/Caravan/Town&Country c 2008 г.').should('be.visible');
})
})
