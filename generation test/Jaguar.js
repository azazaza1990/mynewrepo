describe("Jaguar", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('E-Pace', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Jaguar').click();
      cy.get('._1Cqj').contains('E-Pace').click();
      cy.get('._3Txt').contains('E-Pace 2017 – н.в.').click();
      cy.get('._1PRn').contains('E-Pace 2017 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar E-Pace 2017 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Jaguar').click(); // Возвращаемся к марке
})

     it('F-Pace', function() {
      cy.get('._1Cqj').contains('F-Pace').click();
      cy.get('._3Txt').contains('F-Pace 2015 – н.в.').click();
      cy.get('._1PRn').contains('F-Pace 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar F-Pace 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Jaguar').click(); // Возвращаемся к марке
})

     it('S-TYPE', function() {
      cy.get('._1Cqj').contains('S-TYPE').click();
      cy.get('._3Txt').contains('S-TYPE 2000-2006').click();
      cy.get('._1PRn').contains('S-TYPE 2000-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar S-TYPE 2000-2006').should('be.visible');
      cy.get('._1PRn').contains('Jaguar').click(); // Возвращаемся к марке
})

     it('X-TYPE', function() {
      cy.get('._1Cqj').contains('X-TYPE').click();
      cy.get('._3Txt').contains('X-TYPE 2001-2009').click();
      cy.get('._1PRn').contains('X-TYPE 2001-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar X-TYPE 2001-2009').should('be.visible');
      cy.get('._1PRn').contains('Jaguar').click(); // Возвращаемся к марке
})

     it('XE', function() {
      cy.get('._1Cqj').contains('XE').click();
      cy.get('._3Txt').contains('XE с 2015 г.').click();
      cy.get('._1PRn').contains('XE с 2015 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar XE с 2015 г.').should('be.visible');
      cy.get('._1PRn').contains('Jaguar').click(); // Возвращаемся к марке
})

     it('XF', function() {
      cy.get('._1Cqj').contains('XF').click();
      cy.get('._3Txt').contains('XF II 2015 – н.в.').click();
      cy.get('._1PRn').contains('XF II 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar XF II 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('XF').click();
      cy.get('._3Txt').contains('XF c 2007 г.').click();
      cy.get('._1PRn').contains('XF c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar XF c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Jaguar').click(); // Возвращаемся к марке
})

     it('XFR', function() {
      cy.get('._1Cqj').contains('XFR').click();
      cy.get('._3Txt').contains('XFR I 2009 – 2015').click();
      cy.get('._1PRn').contains('XFR I 2009 – 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar XFR I 2009 – 2015').should('be.visible');
      cy.get('._1PRn').contains('Jaguar').click(); // Возвращаемся к марке
})

     it('XJ', function() {
      cy.get('._1Cqj').contains('XJ').click();
      cy.get('._3Txt').contains('XJ 1986-1993').click();
      cy.get('._1PRn').contains('XJ 1986-1993').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar XJ 1986-1993').should('be.visible');
      cy.get('._1PRn').contains('XJ').click();
      cy.get('._3Txt').contains('XJ 1994-2003').click();
      cy.get('._1PRn').contains('XJ 1994-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar XJ 1994-2003').should('be.visible');
      cy.get('._1PRn').contains('XJ').click();
      cy.get('._3Txt').contains('XJ 2004-2009').click();
      cy.get('._1PRn').contains('XJ 2004-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar XJ 2004-2009').should('be.visible');
      cy.get('._1PRn').contains('XJ').click();
      cy.get('._3Txt').contains('XJ c 2009 г.').click();
      cy.get('._1PRn').contains('XJ c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar XJ c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Jaguar').click(); // Возвращаемся к марке
})

     it('XKR', function() {
      cy.get('._1Cqj').contains('XKR').click();
      cy.get('._3Txt').contains('XKR Coupe 2006-2011').click();
      cy.get('._1PRn').contains('XKR Coupe 2006-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Jaguar XKR Coupe 2006-2011').should('be.visible');
})
})