describe("Opel", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Adam', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Opel').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Adam').click();
      cy.get('._3Txt').contains('Adam 2014 – н.в.').click();
      cy.get('._1PRn').contains('Adam 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Adam 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Agila', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Agila').click();
      cy.get('._3Txt').contains('Agila A 2000-2008').click();
      cy.get('._1PRn').contains('Agila A 2000-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Agila A 2000-2008').should('be.visible');
      cy.get('._1PRn').contains('Agila').click();
      cy.get('._3Txt').contains('Agila B c 2008 г.').click();
      cy.get('._1PRn').contains('Agila B c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Agila B c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Ampera', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Ampera').click();
      cy.get('._3Txt').contains('Ampera I 2011 – 2015').click();
      cy.get('._1PRn').contains('Ampera I 2011 – 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Ampera I 2011 – 2015').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Antara', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Antara').click();
      cy.get('._3Txt').contains('Antara c 2007 г.').click();
      cy.get('._1PRn').contains('Antara c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Antara c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Ascona', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Ascona').click();
      cy.get('._3Txt').contains('Ascona C 1982-1988').click();
      cy.get('._1PRn').contains('Ascona C 1982-1988').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Ascona C 1982-1988').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Astra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Astra').click();
      cy.get('._3Txt').contains('Astra (F) 1991 – 2005').click();
      cy.get('._1PRn').contains('Astra (F) 1991 – 2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Astra (F) 1991 – 2005').should('be.visible');
      cy.get('._1PRn').contains('Astra').click();
      cy.get('._3Txt').contains('Astra (G) 1998 – 2009').click();
      cy.get('._1PRn').contains('Astra (G) 1998 – 2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Astra (G) 1998 – 2009').should('be.visible');
      cy.get('._1PRn').contains('Astra').click();
      cy.get('._3Txt').contains('Astra (H) 2004 – 2014').click();
      cy.get('._1PRn').contains('Astra (H) 2004 – 2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Astra (H) 2004 – 2014').should('be.visible');
      cy.get('._1PRn').contains('Astra').click();
      cy.get('._3Txt').contains('Astra (J) 2009 – н.в.').click();
      cy.get('._1PRn').contains('Astra (J) 2009 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Astra (J) 2009 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Astra').click();
      cy.get('._3Txt').contains('Astra (K) 2015 – н.в.').click();
      cy.get('._1PRn').contains('Astra (K) 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Astra (K) 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Calibra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Calibra').click();
      cy.get('._3Txt').contains('Calibra A 1990-1997').click();
      cy.get('._1PRn').contains('Calibra A 1990-1997').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Calibra A 1990-1997').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Cascada', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Cascada').click();
      cy.get('._3Txt').contains('Cascada 2014 – н.в.').click();
      cy.get('._1PRn').contains('Cascada 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Cascada 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Combo', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Combo').click();
      cy.get('._3Txt').contains('Combo 1996-2000').click();
      cy.get('._1PRn').contains('Combo 1996-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Combo 1996-2000').should('be.visible');
      cy.get('._1PRn').contains('Combo').click();
      cy.get('._3Txt').contains('Combo c 2001 г.').click();
      cy.get('._1PRn').contains('Combo c 2001 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Combo c 2001 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Corsa', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Corsa').click();
      cy.get('._3Txt').contains('Corsa A 1982-1993').click();
      cy.get('._1PRn').contains('Corsa A 1982-1993').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Corsa A 1982-1993').should('be.visible');
      cy.get('._1PRn').contains('Corsa').click();
      cy.get('._3Txt').contains('Corsa B 1993-2000').click();
      cy.get('._1PRn').contains('Corsa B 1993-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Corsa B 1993-2000').should('be.visible');
      cy.get('._1PRn').contains('Corsa').click();
      cy.get('._3Txt').contains('Corsa C 2000-2006').click();
      cy.get('._1PRn').contains('Corsa C 2000-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Corsa C 2000-2006').should('be.visible');
      cy.get('._1PRn').contains('Corsa').click();
      cy.get('._3Txt').contains('Corsa D c 2006 г.').click();
      cy.get('._1PRn').contains('Corsa D c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Corsa D c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Frontera', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Frontera').click();
      cy.get('._3Txt').contains('Frontera A 1992-1998').click();
      cy.get('._1PRn').contains('Frontera A 1992-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Frontera A 1992-1998').should('be.visible');
      cy.get('._1PRn').contains('Frontera').click();
      cy.get('._3Txt').contains('Frontera B c 1998 г.').click();
      cy.get('._1PRn').contains('Frontera B c 1998 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Frontera B c 1998 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Insignia', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Insignia').click();
      cy.get('._3Txt').contains('Insignia c 2008 г.').click();
      cy.get('._1PRn').contains('Insignia c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Insignia c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Kadett', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Kadett').click();
      cy.get('._3Txt').contains('Kadett D 1981-1984').click();
      cy.get('._1PRn').contains('Kadett D 1981-1984').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Kadett D 1981-1984').should('be.visible');
      cy.get('._1PRn').contains('Kadett').click();
      cy.get('._3Txt').contains('Kadett E 1984-1994').click();
      cy.get('._1PRn').contains('Kadett E 1984-1994').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Kadett E 1984-1994').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Meriva', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Meriva').click();
      cy.get('._3Txt').contains('Meriva 2003-2010').click();
      cy.get('._1PRn').contains('Meriva 2003-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Meriva 2003-2010').should('be.visible');
      cy.get('._1PRn').contains('Meriva').click();
      cy.get('._3Txt').contains('Meriva B c 2010 г.').click();
      cy.get('._1PRn').contains('Meriva B c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Meriva B c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Mokka', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Mokka').click();
      cy.get('._3Txt').contains('Mokka c 2012 г.').click();
      cy.get('._1PRn').contains('Mokka c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Mokka c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Monterey', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Monterey').click();
      cy.get('._3Txt').contains('Monterey A 1991-1998').click();
      cy.get('._1PRn').contains('Monterey A 1991-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Monterey A 1991-1998').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Movano', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Movano').click();
      cy.get('._3Txt').contains('Movano c 1998 г.').click();
      cy.get('._1PRn').contains('Movano c 1998 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Movano c 1998 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Omega', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Omega').click();
      cy.get('._3Txt').contains('Omega A 1986-1994').click();
      cy.get('._1PRn').contains('Omega A 1986-1994').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Omega A 1986-1994').should('be.visible');
      cy.get('._1PRn').contains('Omega').click();
      cy.get('._3Txt').contains('Omega B 1994-2003').click();
      cy.get('._1PRn').contains('Omega B 1994-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Omega B 1994-2003').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Rekord', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Rekord').click();
      cy.get('._3Txt').contains('Rekord 1977-1986').click();
      cy.get('._1PRn').contains('Rekord 1977-1986').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Rekord 1977-1986').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
}) 

     it('Senator', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Senator').click();
      cy.get('._3Txt').contains('Senator B 1987-1993').click();
      cy.get('._1PRn').contains('Senator B 1987-1993').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Senator B 1987-1993').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Signum', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Signum').click();
      cy.get('._3Txt').contains('Signum c 2003 г.').click();
      cy.get('._1PRn').contains('Signum c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Signum c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Sintra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Sintra').click();
      cy.get('._3Txt').contains('Sintra 1996-1999').click();
      cy.get('._1PRn').contains('Sintra 1996-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Sintra 1996-1999').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Tigra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Tigra').click();
      cy.get('._3Txt').contains('Tigra 1994-2000').click();
      cy.get('._1PRn').contains('Tigra 1994-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Tigra 1994-2000').should('be.visible');
      cy.get('._1PRn').contains('Tigra').click();
      cy.get('._3Txt').contains('Tigra TwinTop c 2004 г.').click();
      cy.get('._1PRn').contains('Tigra TwinTop c 2004 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Tigra TwinTop c 2004 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Vectra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Vectra').click();
      cy.get('._3Txt').contains('Vectra A 1988-1995').click();
      cy.get('._1PRn').contains('Vectra A 1988-1995').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Vectra A 1988-1995').should('be.visible');
      cy.get('._1PRn').contains('Vectra').click();
      cy.get('._3Txt').contains('Vectra B 1995-1999').click();
      cy.get('._1PRn').contains('Vectra B 1995-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Vectra B 1995-1999').should('be.visible');
      cy.get('._1PRn').contains('Vectra').click();
      cy.get('._3Txt').contains('Vectra B 1999-2002').click();
      cy.get('._1PRn').contains('Vectra B 1999-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Vectra B 1999-2002').should('be.visible');
      cy.get('._1PRn').contains('Vectra').click();
      cy.get('._3Txt').contains('Vectra C 2002-2008').click();
      cy.get('._1PRn').contains('Vectra C 2002-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Vectra C 2002-2008').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Vivaro', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Vivaro').click();
      cy.get('._3Txt').contains('Vivaro c 2001 г.').click();
      cy.get('._1PRn').contains('Vivaro c 2001 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Vivaro c 2001 г.').should('be.visible');
      cy.get('._1PRn').contains('Opel').click(); // Возвращаемся к марке
})

     it('Zafira', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Zafira').click();
      cy.get('._3Txt').contains('Zafira (F75) 1999-2005').click();
      cy.get('._1PRn').contains('Zafira (F75) 1999-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Zafira (F75) 1999-2005').should('be.visible');
      cy.get('._1PRn').contains('Zafira').click();
      cy.get('._3Txt').contains('Zafira B 2005-2012').click();
      cy.get('._1PRn').contains('Zafira B 2005-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Zafira B 2005-2012').should('be.visible');
      cy.get('._1PRn').contains('Zafira').click();
      cy.get('._3Txt').contains('Zafira C c 2013 г.').click();
      cy.get('._1PRn').contains('Zafira C c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Opel Zafira C c 2013 г.').should('be.visible');
})
})
     