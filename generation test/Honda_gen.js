describe("Honda", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Accord', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Honda').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Accord').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Accord Coupe USA 2003-2008').click();
      cy.get('._1PRn').contains('Accord Coupe USA 2003-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Accord Coupe USA 2003-2008').should('be.visible');
      cy.get('._1PRn').contains('Accord').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Accord II 1983-1985').click();
      cy.get('._1PRn').contains('Accord II 1983-1985').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Accord II 1983-1985').should('be.visible');
      cy.get('._1PRn').contains('Accord').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Accord IV 1990-1993').click();
      cy.get('._1PRn').contains('Accord IV 1990-1993').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Accord IV 1990-1993').should('be.visible');
      cy.get('._1PRn').contains('Accord').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Accord IX c 2013 г.').click();
      cy.get('._1PRn').contains('Accord IX c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Accord IX c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Accord').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Accord V 1993-1996').click();
      cy.get('._1PRn').contains('Accord V 1993-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Accord V 1993-1996').should('be.visible');
      cy.get('._1PRn').contains('Accord').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Accord V 1996-1998').click();
      cy.get('._1PRn').contains('Accord V 1996-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Accord V 1996-1998').should('be.visible');
      cy.get('._1PRn').contains('Accord').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Accord VI 1998-2002').click();
      cy.get('._1PRn').contains('Accord VI 1998-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Accord VI 1998-2002').should('be.visible');
      cy.get('._1PRn').contains('Accord').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Accord VII 2003-2007').click();
      cy.get('._1PRn').contains('Accord VII 2003-2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Accord VII 2003-2007').should('be.visible');
      cy.get('._1PRn').contains('Accord').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Accord VIII 2008-2013').click();
      cy.get('._1PRn').contains('Accord VIII 2008-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Accord VIII 2008-2013').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('CR-V', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('CR-V').click();
      cy.get('._3Txt').contains('CR-V 1996-2002').click();
      cy.get('._1PRn').contains('CR-V 1996-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda CR-V 1996-2002').should('be.visible');
      cy.get('._1PRn').contains('CR-V').click();
      cy.get('._3Txt').contains('CR-V 2002-2006').click();
      cy.get('._1PRn').contains('CR-V 2002-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda CR-V 2002-2006').should('be.visible');
      cy.get('._1PRn').contains('CR-V').click();
      cy.get('._3Txt').contains('CR-V 2007-2012').click();
      cy.get('._1PRn').contains('CR-V 2007-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda CR-V 2007-2012').should('be.visible');
      cy.get('._1PRn').contains('CR-V').click();
      cy.get('._3Txt').contains('CR-V V 2016 – н.в.').click();
      cy.get('._1PRn').contains('CR-V V 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda CR-V V 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('CR-V').click();
      cy.get('._3Txt').contains('CR-V c 2012 г.').click();
      cy.get('._1PRn').contains('CR-V c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda CR-V c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('CRX', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('CRX').click();
      cy.get('._3Txt').contains('CRX III 1992-1998').click();
      cy.get('._1PRn').contains('CRX III 1992-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda CRX III 1992-1998').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Civic', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Civic').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Civic (EJ, EK Sed+3HB) 1995-2001').click();
      cy.get('._1PRn').contains('Civic (EJ, EK Sed+3HB) 1995-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Civic (EJ, EK Sed+3HB) 1995-2001').should('be.visible');
      cy.get('._1PRn').contains('Civic').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Civic (MA, MB 5HB) 1995-2001').click();
      cy.get('._1PRn').contains('Civic (MA, MB 5HB) 1995-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Civic (MA, MB 5HB) 1995-2001').should('be.visible');
      cy.get('._1PRn').contains('Civic').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Civic 1988-1991').click();
      cy.get('._1PRn').contains('Civic 1988-1991').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Civic 1988-1991').should('be.visible');
      cy.get('._1PRn').contains('Civic').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Civic 1991-1995').click();
      cy.get('._1PRn').contains('Civic 1991-1995').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Civic 1991-1995').should('be.visible');
      cy.get('._1PRn').contains('Civic').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Civic 2001-2005').click();
      cy.get('._1PRn').contains('Civic 2001-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Civic 2001-2005').should('be.visible');
      cy.get('._1PRn').contains('Civic').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Civic 4D 2006-2012').click();
      cy.get('._1PRn').contains('Civic 4D 2006-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Civic 4D 2006-2012').should('be.visible');
      cy.get('._1PRn').contains('Civic').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Civic 4D c 2012 г.').click();
      cy.get('._1PRn').contains('Civic 4D c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Civic 4D c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Civic').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Civic 5D 2006-2012').click();
      cy.get('._1PRn').contains('Civic 5D 2006-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Civic 5D 2006-2012').should('be.visible');
      cy.get('._1PRn').contains('Civic').click();
      cy.get('#root > div > div.TjJL > div').contains('Все поколения').click();
      cy.get('._3Txt').contains('Civic 5D c 2012 г.').click();
      cy.get('._1PRn').contains('Civic 5D c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Civic 5D c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Concerto', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Concerto').click();
      cy.get('._3Txt').contains('Concerto 1989-1996').click();
      cy.get('._1PRn').contains('Concerto 1989-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Concerto 1989-1996').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Crosstour', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Crosstour').click();
      cy.get('._3Txt').contains('Crosstour c 2010 г.').click();
      cy.get('._1PRn').contains('Crosstour c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Crosstour c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Element', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Element').click();
      cy.get('._3Txt').contains('Element c 2003 г.').click();
      cy.get('._1PRn').contains('Element c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Element c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('FR-V', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('FR-V').click();
      cy.get('._3Txt').contains('FR-V c 2005 г.').click();
      cy.get('._1PRn').contains('FR-V c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda FR-V c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Fit', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Fit').click();
      cy.get('._3Txt').contains('Fit I 2001 – 2008').click();
      cy.get('._1PRn').contains('Fit I 2001 – 2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Fit I 2001 – 2008').should('be.visible');
      cy.get('._1PRn').contains('Fit').click();
      cy.get('._3Txt').contains('Fit II 2008 – 2014').click();
      cy.get('._1PRn').contains('Fit II 2008 – 2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Fit II 2008 – 2014').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('HR-V', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('HR-V').click();
      cy.get('._3Txt').contains('HR-V 1999-2005').click();
      cy.get('._1PRn').contains('HR-V 1999-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda HR-V 1999-2005').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Insight', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Insight').click();
      cy.get('._3Txt').contains('Insight II 2009-2011').click();
      cy.get('._1PRn').contains('Insight II 2009-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Insight II 2009-2011').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Integra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Integra').click();
      cy.get('._3Txt').contains('Integra IV 2001 – 2006').click();
      cy.get('._1PRn').contains('Integra IV 2001 – 2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Integra IV 2001 – 2006').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Jazz', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Jazz').click();
      cy.get('._3Txt').contains('Jazz I 2001 – 2008').click();
      cy.get('._1PRn').contains('Jazz I 2001 – 2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Jazz I 2001 – 2008').should('be.visible');
      cy.get('._1PRn').contains('Jazz').click();
      cy.get('._3Txt').contains('Jazz II 2008 – 2014').click();
      cy.get('._1PRn').contains('Jazz II 2008 – 2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Jazz II 2008 – 2014').should('be.visible');
      cy.get('._1PRn').contains('Jazz').click();
      cy.get('._3Txt').contains('Jazz III 2015 – н.в.').click();
      cy.get('._1PRn').contains('Jazz III 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Jazz III 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Legend', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Legend').click();
      cy.get('._3Txt').contains('Legend 1991-1996').click();
      cy.get('._1PRn').contains('Legend 1991-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Legend 1991-1996').should('be.visible');
      cy.get('._1PRn').contains('Legend').click();
      cy.get('._3Txt').contains('Legend 1996-2006').click();
      cy.get('._1PRn').contains('Legend 1996-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Legend 1996-2006').should('be.visible');
      cy.get('._1PRn').contains('Legend').click();
      cy.get('._3Txt').contains('Legend c 2006 г.').click();
      cy.get('._1PRn').contains('Legend c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Legend c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Logo', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Logo').click();
      cy.get('._3Txt').contains('Logo GA 1999-2003').click();
      cy.get('._1PRn').contains('Logo GA 1999-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Logo GA 1999-2003').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Mobilio Spike', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Mobilio Spike').click();
      cy.get('._3Txt').contains('Mobilio Spike I 2002 – 2008').click();
      cy.get('._1PRn').contains('Mobilio Spike I 2002 – 2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Mobilio Spike I 2002 – 2008').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Odyssey', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Odyssey').click();
      cy.get('._3Txt').contains('Odyssey I 1994 – 1999').click();
      cy.get('._1PRn').contains('Odyssey I 1994 – 1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Odyssey I 1994 – 1999').should('be.visible');
      cy.get('._1PRn').contains('Odyssey').click();
      cy.get('._3Txt').contains('Odyssey II 1999 – 2003').click();
      cy.get('._1PRn').contains('Odyssey II 1999 – 2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Odyssey II 1999 – 2003').should('be.visible');
      cy.get('._1PRn').contains('Odyssey').click();
      cy.get('._3Txt').contains('Odyssey III 2003 – 2008').click();
      cy.get('._1PRn').contains('Odyssey III 2003 – 2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Odyssey III 2003 – 2008').should('be.visible');
      cy.get('._1PRn').contains('Odyssey').click();
      cy.get('._3Txt').contains('Odyssey IV 2008 – 2013').click();
      cy.get('._1PRn').contains('Odyssey IV 2008 – 2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Odyssey IV 2008 – 2013').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Pilot', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Pilot').click();
      cy.get('._3Txt').contains('Pilot I 2002 – 2008').click();
      cy.get('._1PRn').contains('Pilot I 2002 – 2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Pilot I 2002 – 2008').should('be.visible');
      cy.get('._1PRn').contains('Pilot').click();
      cy.get('._3Txt').contains('Pilot II 2008 - 2015').click();
      cy.get('._1PRn').contains('Pilot II 2008 - 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Pilot II 2008 - 2015').should('be.visible');
      cy.get('._1PRn').contains('Pilot').click();
      cy.get('._3Txt').contains('Pilot III 2015 – н.в.').click();
      cy.get('._1PRn').contains('Pilot III 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Pilot III 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Prelude', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Prelude').click();
      cy.get('._3Txt').contains('Prelude 1988-1991').click();
      cy.get('._1PRn').contains('Prelude 1988-1991').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Prelude 1988-1991').should('be.visible');
      cy.get('._1PRn').contains('Prelude').click();
      cy.get('._3Txt').contains('Prelude 1992-1996').click();
      cy.get('._1PRn').contains('Prelude 1992-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Prelude 1992-1996').should('be.visible');
      cy.get('._1PRn').contains('Prelude').click();
      cy.get('._3Txt').contains('Prelude 1996-2001').click();
      cy.get('._1PRn').contains('Prelude 1996-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Prelude 1996-2001').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Ridgeline', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Ridgeline').click();
      cy.get('._3Txt').contains('Ridgeline c 2005 г.').click();
      cy.get('._1PRn').contains('Ridgeline c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Ridgeline c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Shuttle', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Shuttle').click();
      cy.get('._3Txt').contains('Shuttle RA1 1994-1998').click();
      cy.get('._1PRn').contains('Shuttle RA1 1994-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Shuttle RA1 1994-1998').should('be.visible');
      cy.get('._1PRn').contains('Shuttle').click();
      cy.get('._3Txt').contains('Shuttle RA1 c 1998 г.').click();
      cy.get('._1PRn').contains('Shuttle RA1 c 1998 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Shuttle RA1 c 1998 г.').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Stream', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Stream').click();
      cy.get('._3Txt').contains('Stream 2001-2005').click();
      cy.get('._1PRn').contains('Stream 2001-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Stream 2001-2005').should('be.visible');
      cy.get('._1PRn').contains('Honda').click(); // Возвращаемся к марке
})

     it('Torneo', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Torneo').click();
      cy.get('._3Txt').contains('Torneo 2001 – 2002').click();
      cy.get('._1PRn').contains('Torneo 2001 – 2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Honda Torneo 2001 – 2002').should('be.visible');
})
})