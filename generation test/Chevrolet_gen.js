describe("Chevrolet", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Chevrolet Aveo', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Chevrolet').click();
      cy.get('._1Cqj').contains('Aveo').click();
      cy.get('._3Txt').contains('Aveo (T200) 2003-2008').click();
      cy.get('._1PRn').contains('Aveo (T200) 2003-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Aveo (T200) 2003-2008').should('be.visible');
      cy.get('._1PRn').contains('Aveo').click();
      cy.get('._3Txt').contains('Aveo (T250) 2005-2011').click();
      cy.get('._1PRn').contains('Aveo (T250) 2005-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Aveo (T250) 2005-2011').should('be.visible');
      cy.get('._1PRn').contains('Aveo').click();
      cy.get('._3Txt').contains('Aveo (T300) c 2011 г.').click();
      cy.get('._1PRn').contains('Aveo (T300) c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Aveo (T300) c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Blazer', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Blazer').click();
      cy.get('._3Txt').contains('Blazer II 1994 - 2005').click();
      cy.get('._1PRn').contains('Blazer II 1994 - 2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Blazer II 1994 - 2005').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Camaro', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Camaro').click();
      cy.get('._3Txt').contains('Camaro IV 1992 – 2002').click();
      cy.get('._1PRn').contains('Camaro IV 1992 – 2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Camaro IV 1992 – 2002').should('be.visible');
      cy.get('._1PRn').contains('Camaro').click();
      cy.get('._3Txt').contains('Camaro V 2009 – 2015').click();
      cy.get('._1PRn').contains('Camaro V 2009 – 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Camaro V 2009 – 2015').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Caprice', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Caprice').click();
      cy.get('._3Txt').contains('Caprice 1981-1990').click();
      cy.get('._1PRn').contains('Caprice 1981-1990').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Caprice 1981-1990').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Captiva', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Captiva').click();
      cy.get('._3Txt').contains('Captiva (C100) 2006-2010').click();
      cy.get('._1PRn').contains('Captiva (C100) 2006-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Captiva (C100) 2006-2010').should('be.visible');
      cy.get('._1PRn').contains('Captiva').click();
      cy.get('._3Txt').contains('Captiva (C140) c 2011 г.').click();
      cy.get('._1PRn').contains('Captiva (C140) c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Captiva (C140) c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Cobalt', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Cobalt').click();
      cy.get('._3Txt').contains('Cobalt I 2004-2010').click();
      cy.get('._1PRn').contains('Cobalt I 2004-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Cobalt I 2004-2010').should('be.visible');
      cy.get('._1PRn').contains('Cobalt').click();
      cy.get('._3Txt').contains('Cobalt II c 2012 г.').click();
      cy.get('._1PRn').contains('Cobalt II c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Cobalt II c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Corvette', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Corvette').click();
      cy.get('._3Txt').contains('Corvette (C7) 2013 – н.в.').click();
      cy.get('._1PRn').contains('Corvette (C7) 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Corvette (C7) 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Cruze', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Cruze').click();
      cy.get('._3Txt').contains('Cruze I 2009 – 2015').click();
      cy.get('._1PRn').contains('Cruze I 2009 – 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Cruze I 2009 – 2015').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Epica', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Epica').click();
      cy.get('._3Txt').contains('Epica c 2006 г.').click();
      cy.get('._1PRn').contains('Epica c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Epica c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Equinox', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Equinox').click();
      cy.get('._3Txt').contains('Equinox I 2004 – 2009').click();
      cy.get('._1PRn').contains('Equinox I 2004 – 2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Equinox I 2004 – 2009').should('be.visible');
      cy.get('._1PRn').contains('Equinox').click();
      cy.get('._3Txt').contains('Equinox II 2009 – н.в.').click();
      cy.get('._1PRn').contains('Equinox II 2009 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Equinox II 2009 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Evanda', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Evanda').click();
      cy.get('._3Txt').contains('Evanda 2004 - 2006').click();
      cy.get('._1PRn').contains('Evanda 2004 - 2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Evanda 2004 - 2006').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Express', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Express').click();
      cy.get('._3Txt').contains('Express II 2002 – н.в.').click();
      cy.get('._1PRn').contains('Express II 2002 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Express II 2002 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Lacetti', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Lacetti').click();
      cy.get('._3Txt').contains('Lacetti c 2003 г.').click();
      cy.get('._1PRn').contains('Lacetti c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Lacetti c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Lanos', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Lanos').click();
      cy.get('._3Txt').contains('Lanos c 2004 г.').click();
      cy.get('._1PRn').contains('Lanos c 2004 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Lanos c 2004 г.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Lumina', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Lumina').click();
      cy.get('._3Txt').contains('Lumina 1989-2001').click();
      cy.get('._1PRn').contains('Lumina 1989-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Lumina 1989-2001').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Malibu', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Malibu').click();
      cy.get('._3Txt').contains('Malibu c 2011 г.').click();
      cy.get('._1PRn').contains('Malibu c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Malibu c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Orlando', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Orlando').click();
      cy.get('._3Txt').contains('Orlando c 2011 г.').click();
      cy.get('._1PRn').contains('Orlando c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Orlando c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Rezzo/Tacuma', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Rezzo/Tacuma').click();
      cy.get('._3Txt').contains('Rezzo c 2003 г.').click();
      cy.get('._1PRn').contains('Rezzo c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Rezzo c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Rezzo/Tacuma').click();
      cy.get('._3Txt').contains('Rezzo/Tacuma (U100) 2000-2008').click();
      cy.get('._1PRn').contains('Rezzo/Tacuma (U100) 2000-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Rezzo/Tacuma (U100) 2000-2008').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Silverado', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Silverado').click();
      cy.get('._3Txt').contains('Silverado 1998-2002').click();
      cy.get('._1PRn').contains('Silverado 1998-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Silverado 1998-2002').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Spark', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Spark').click();
      cy.get('._3Txt').contains('Spark 2005-2011').click();
      cy.get('._1PRn').contains('Spark 2005-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Spark 2005-2011').should('be.visible');
      cy.get('._1PRn').contains('Spark').click();
      cy.get('._3Txt').contains('Spark c 2011 г.').click();
      cy.get('._1PRn').contains('Spark c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Spark c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Suburban', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Suburban').click();
      cy.get('._3Txt').contains('Suburban IX 1991 – 2001').click();
      cy.get('._1PRn').contains('Suburban IX 1991 – 2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Suburban IX 1991 – 2001').should('be.visible');
      cy.get('._1PRn').contains('Suburban').click();
      cy.get('._3Txt').contains('Suburban X 2000 – 2006').click();
      cy.get('._1PRn').contains('Suburban X 2000 – 2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Suburban X 2000 – 2006').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Tahoe', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Tahoe').click();
      cy.get('._3Txt').contains('Tahoe 2000-2006').click();
      cy.get('._1PRn').contains('Tahoe 2000-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Tahoe 2000-2006').should('be.visible');
      cy.get('._1PRn').contains('Tahoe').click();
      cy.get('._3Txt').contains('Tahoe 2006-2014').click();
      cy.get('._1PRn').contains('Tahoe 2006-2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Tahoe 2006-2014').should('be.visible');
      cy.get('._1PRn').contains('Tahoe').click();
      cy.get('._3Txt').contains('Tahoe c 2014 г.').click();
      cy.get('._1PRn').contains('Tahoe c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Tahoe c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Tracker', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Tracker').click();
      cy.get('._3Txt').contains('Tracker II (Trax) 2015 – н.в.').click();
      cy.get('._1PRn').contains('Tracker II (Trax) 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Tracker II (Trax) 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Chevrolet').click(); // Возвращаемся к марке
})

     it('Chevrolet Trail Blazer', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Trail Blazer').click();
      cy.get('._3Txt').contains('Trail Blazer 2001-2012').click();
      cy.get('._1PRn').contains('Trail Blazer 2001-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Trail Blazer 2001-2012').should('be.visible');
      cy.get('._1PRn').contains('Trail Blazer').click();
      cy.get('._3Txt').contains('Trail Blazer c 2013 г.').click();
      cy.get('._1PRn').contains('Trail Blazer c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Chevrolet Trail Blazer c 2013 г.').should('be.visible');
})
})
