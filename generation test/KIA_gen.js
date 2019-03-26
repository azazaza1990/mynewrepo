describe("Kia", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Bongo', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Kia').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Bongo').click();
      cy.get('._3Txt').contains('Bongo c 2004 г.').click();
      cy.get('._1PRn').contains('Bongo c 2004 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Bongo c 2004 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Cadenza', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Cadenza').click();
      cy.get('._3Txt').contains('Cadenza c 2010 г.').click();
      cy.get('._1PRn').contains('Cadenza c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Cadenza c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Carens', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Carens').click();
      cy.get('._3Txt').contains('Carens 2000-2002').click();
      cy.get('._1PRn').contains('Carens 2000-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Carens 2000-2002').should('be.visible');
      cy.get('._1PRn').contains('Carens').click();
      cy.get('._3Txt').contains('Carens 2002-2006').click();
      cy.get('._1PRn').contains('Carens 2002-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Carens 2002-2006').should('be.visible');
      cy.get('._1PRn').contains('Carens').click();
      cy.get('._3Txt').contains('Carens II 2006-2012').click();
      cy.get('._1PRn').contains('Carens II 2006-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Carens II 2006-2012').should('be.visible');
      cy.get('._1PRn').contains('Carens').click();
      cy.get('._3Txt').contains('Carens III 2013 – н.в.').click();
      cy.get('._1PRn').contains('Carens III 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Carens III 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Carnival', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Carnival').click();
      cy.get('._3Txt').contains('Carnival I 1999 - 2006').click();
      cy.get('._1PRn').contains('Carnival I 1999 - 2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Carnival I 1999 - 2006').should('be.visible');
      cy.get('._1PRn').contains('Carnival').click();
      cy.get('._3Txt').contains('Carnival II 2006 – 2014').click();
      cy.get('._1PRn').contains('Carnival II 2006 – 2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Carnival II 2006 – 2014').should('be.visible');
      cy.get('._1PRn').contains('Carnival').click();
      cy.get('._3Txt').contains('Carnival III 2014 – н.в.').click();
      cy.get('._1PRn').contains('Carnival III 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Carnival III 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Ceed', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Ceed').click();
      cy.get('._3Txt').contains('Ceed 2007- 2012').click();
      cy.get('._1PRn').contains('Ceed 2007- 2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Ceed 2007- 2012').should('be.visible');
      cy.get('._1PRn').contains('Ceed').click();
      cy.get('._3Txt').contains('Ceed c 2012 г.').click();
      cy.get('._1PRn').contains('Ceed c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Ceed c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Cerato', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Cerato').click();
      cy.get('._3Txt').contains('Cerato 2004-2008').click();
      cy.get('._1PRn').contains('Cerato 2004-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Cerato 2004-2008').should('be.visible');
      cy.get('._1PRn').contains('Cerato').click();
      cy.get('._3Txt').contains('Cerato 2009-2013').click();
      cy.get('._1PRn').contains('Cerato 2009-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Cerato 2009-2013').should('be.visible');
      cy.get('._1PRn').contains('Cerato').click();
      cy.get('._3Txt').contains('Cerato c 2013 г.').click();
      cy.get('._1PRn').contains('Cerato c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Cerato c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Clarus', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Clarus').click();
      cy.get('._3Txt').contains('Clarus 1996-2001').click();
      cy.get('._1PRn').contains('Clarus 1996-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Clarus 1996-2001').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Joice', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Joice').click();
      cy.get('._3Txt').contains('Joice MT c 1999 г.').click();
      cy.get('._1PRn').contains('Joice MT c 1999 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Joice MT c 1999 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Magentis', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Magentis').click();
      cy.get('._3Txt').contains('Magentis 2000-2005').click();
      cy.get('._1PRn').contains('Magentis 2000-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Magentis 2000-2005').should('be.visible');
      cy.get('._1PRn').contains('Magentis').click();
      cy.get('._3Txt').contains('Magentis c 2005 г.').click();
      cy.get('._1PRn').contains('Magentis c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Magentis c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Mentor', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Mentor').click();
      cy.get('._3Txt').contains('Mentor I 1996-1999').click();
      cy.get('._1PRn').contains('Mentor I 1996-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Mentor I 1996-1999').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Mohave', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Mohave').click();
      cy.get('._3Txt').contains('Mohave c 2009 г.').click();
      cy.get('._1PRn').contains('Mohave c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Mohave c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Opirus', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Opirus').click();
      cy.get('._3Txt').contains('Opirus c 2003 г.').click();
      cy.get('._1PRn').contains('Opirus c 2003 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Opirus c 2003 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Optima', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Optima').click();
      cy.get('._3Txt').contains('Optima I 2000–2005').click();
      cy.get('._1PRn').contains('Optima I 2000–2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Optima I 2000–2005').should('be.visible');
      cy.get('._1PRn').contains('Optima').click();
      cy.get('._3Txt').contains('Optima II 2005 – 2008').click();
      cy.get('._1PRn').contains('Optima II 2005 – 2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Optima II 2005 – 2008').should('be.visible');
      cy.get('._1PRn').contains('Optima').click();
      cy.get('._3Txt').contains('Optima III 2010 - 2015').click();
      cy.get('._1PRn').contains('Optima III 2010 - 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Optima III 2010 - 2015').should('be.visible');
      cy.get('._1PRn').contains('Optima').click();
      cy.get('._3Txt').contains('Optima IV 2016 – н.в.').click();
      cy.get('._1PRn').contains('Optima IV 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Optima IV 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Picanto', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Picanto').click();
      cy.get('._3Txt').contains('Picanto I 2004-2011').click();
      cy.get('._1PRn').contains('Picanto I 2004-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Picanto I 2004-2011').should('be.visible');
      cy.get('._1PRn').contains('Picanto').click();
      cy.get('._3Txt').contains('Picanto II 2011 - н.в.').click();
      cy.get('._1PRn').contains('Picanto II 2011 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Picanto II 2011 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Picanto').click();
      cy.get('._3Txt').contains('Picanto III 2017 – н.в.').click();
      cy.get('._1PRn').contains('Picanto III 2017 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Picanto III 2017 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Pride', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Pride').click();
      cy.get('._3Txt').contains('Pride III 2011 – н.в.').click();
      cy.get('._1PRn').contains('Pride III 2011 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Pride III 2011 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Quoris', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Quoris').click();
      cy.get('._3Txt').contains('Quoris c 2012 г.').click();
      cy.get('._1PRn').contains('Quoris c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Quoris c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('RIO', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('RIO').click();
      cy.get('._3Txt').contains('RIO 2000-2004').click();
      cy.get('._1PRn').contains('RIO 2000-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia RIO 2000-2004').should('be.visible');
      cy.get('._1PRn').contains('RIO').click();
      cy.get('._3Txt').contains('RIO 2005-2011').click();
      cy.get('._1PRn').contains('RIO 2005-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia RIO 2005-2011').should('be.visible');
      cy.get('._1PRn').contains('RIO').click();
      cy.get('._3Txt').contains('RIO c 2011 г.').click();
      cy.get('._1PRn').contains('RIO c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia RIO c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('RIO').click();
      cy.get('._3Txt').contains('Rio IV 2017- н.в.').click();
      cy.get('._1PRn').contains('Rio IV 2017- н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Rio IV 2017- н.в.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Sedona', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Sedona').click();
      cy.get('._3Txt').contains('Sedona I 1998 – 2006').click();
      cy.get('._1PRn').contains('Sedona I 1998 – 2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Sedona I 1998 – 2006').should('be.visible');
      cy.get('._1PRn').contains('Sedona').click();
      cy.get('._3Txt').contains('Sedona III 2014 – н.в.').click();
      cy.get('._1PRn').contains('Sedona III 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Sedona III 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Sephia', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Sephia').click();
      cy.get('._3Txt').contains('Sephia 1993-1997').click();
      cy.get('._1PRn').contains('Sephia 1993-1997').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Sephia 1993-1997').should('be.visible');
      cy.get('._1PRn').contains('Sephia').click();
      cy.get('._3Txt').contains('Sephia II 2001-2004').click();
      cy.get('._1PRn').contains('Sephia II 2001-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Sephia II 2001-2004').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Shuma', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Shuma').click();
      cy.get('._3Txt').contains('Shuma 1996-2001').click();
      cy.get('._1PRn').contains('Shuma 1996-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Shuma 1996-2001').should('be.visible');
      cy.get('._1PRn').contains('Shuma').click();
      cy.get('._3Txt').contains('Shuma 2001-2004').click();
      cy.get('._1PRn').contains('Shuma 2001-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Shuma 2001-2004').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Sorento', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Sorento').click();
      cy.get('._3Txt').contains('Sorento 2003-2009').click();
      cy.get('._1PRn').contains('Sorento 2003-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Sorento 2003-2009').should('be.visible');
      cy.get('._1PRn').contains('Sorento').click();
      cy.get('._3Txt').contains('Sorento 2009-2013').click();
      cy.get('._1PRn').contains('Sorento 2009-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Sorento 2009-2013').should('be.visible');
      cy.get('._1PRn').contains('Sorento').click();
      cy.get('._3Txt').contains('Sorento III (UM) с 2014 г.').click();
      cy.get('._1PRn').contains('Sorento III (UM) с 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Sorento III (UM) с 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Soul', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Soul').click();
      cy.get('._3Txt').contains('Soul 2009-2014').click();
      cy.get('._1PRn').contains('Soul 2009-2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Soul 2009-2014').should('be.visible');
      cy.get('._1PRn').contains('Soul').click();
      cy.get('._3Txt').contains('Soul c 2014 г.').click();
      cy.get('._1PRn').contains('Soul c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Soul c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Spectra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Spectra').click();
      cy.get('._3Txt').contains('Spectra c 2001 г.').click();
      cy.get('._1PRn').contains('Spectra c 2001 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Spectra c 2001 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Sportage', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Sportage').click();
      cy.get('._3Txt').contains('Sportage 1994-2004').click();
      cy.get('._1PRn').contains('Sportage 1994-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Sportage 1994-2004').should('be.visible');
      cy.get('._1PRn').contains('Sportage').click();
      cy.get('._3Txt').contains('Sportage 2004-2010').click();
      cy.get('._1PRn').contains('Sportage 2004-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Sportage 2004-2010').should('be.visible');
      cy.get('._1PRn').contains('Sportage').click();
      cy.get('._3Txt').contains('Sportage IV 2015 – н.в.').click();
      cy.get('._1PRn').contains('Sportage IV 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Sportage IV 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Sportage').click();
      cy.get('._3Txt').contains('Sportage c 2010 г.').click();
      cy.get('._1PRn').contains('Sportage c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Sportage c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Stinger', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Stinger').click();
      cy.get('._3Txt').contains('Stinger I 2017 – н.в.').click();
      cy.get('._1PRn').contains('Stinger I 2017 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Stinger I 2017 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})

     it('Venga', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Venga').click();
      cy.get('._3Txt').contains('Venga c 2010 г.').click();
      cy.get('._1PRn').contains('Venga c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Kia Venga c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Kia').click(); // Возвращаемся к марке
})
})