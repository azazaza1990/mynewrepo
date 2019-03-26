describe("Audi gen", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://alfadetali.ru");
})
     it('Audi 100/200', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Audi').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('100/200').click();
      cy.wait(1000);
      cy.get('._1Cqj').contains('100 [C4] 1991-1994').click();
      cy.get('._1PRn').contains('100 [C4] 1991-1994').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Audi 100 [C4] 1991-1994').should('be.visible');
      cy.get('._1PRn').contains('100/200').click();
      cy.get('._1Cqj').contains('100/200 [C3] 1983-1991').click();
      cy.get('._1PRn').contains('100/200 [C3] 1983-1991').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Audi 100/200 [C3] 1983-1991').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi 80/90', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('80/90').click();
      cy.wait(1000);
      cy.get('._1Cqj').contains('80/90 [B2] 1978-1986').click();
      cy.get('._1PRn').contains('80/90 [B2] 1978-1986').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Audi 80/90 [B2] 1978-1986').should('be.visible');
      cy.get('._1PRn').contains('80/90').click();
      cy.get('._1Cqj').contains('80/90 [B3] 1986-1991').click();
      cy.get('._1PRn').contains('80/90 [B3] 1986-1991').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Audi 80/90 [B3] 1986-1991').should('be.visible');
      cy.get('._1PRn').contains('80/90').click();
      cy.get('._1Cqj').contains('80/90 [B4] 1991-1994').click();
      cy.get('._1PRn').contains('80/90 [B4] 1991-1994').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Audi 80/90 [B4] 1991-1994').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A1', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A1').click();
      cy.wait(1000);
      cy.get('._1Cqj').contains('A1 [8X] 2010 - н.в.').click();
      cy.get('._1PRn').contains('A1 [8X] 2010 - н.в.').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Audi A1 [8X] 2010 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A2', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.wait(1000);
      cy.get('._1Cqj').contains('A2').click();
      cy.get('._1Cqj').contains('A2 [8Z] 2000-2005').click();
      cy.get('._1PRn').contains('A2 [8Z] 2000-2005').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Audi A2 [8Z] 2000-2005').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A2', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A2').click();
      cy.wait(1000);
      cy.get('._1Cqj').contains('A2 [8Z] 2000-2005').click();
      cy.get('._1PRn').contains('A2 [8Z] 2000-2005').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Audi A2 [8Z] 2000-2005').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})

     it('Audi A3', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A3').click();
      cy.wait(2000);
      cy.get('._1Cqj').contains('A3 [8L] 1996-2003').click();
      cy.get('._1PRn').contains('A3 [8L] 1996-2003').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Audi A3 [8L] 1996-2003').should('be.visible');
      cy.wait(1000);
      cy.get('._1PRn').contains('A3').click();
      cy.get('._1Cqj').contains('A3 [8PA] 2004-2013').click( {force:true} );
      cy.get('._1PRn').contains('A3 [8PA] 2004-2013').should('be.visible');
      cy.wait(2000);
      cy.get('._1R8- > :nth-child(1)').contains('Audi [8PA] 2004-2013').should('be.visible');
      cy.get('._1PRn').contains('A3').click();
      cy.get('._1Cqj').contains('A3 [8P] 2003-2013').click();
      cy.get('._1PRn').contains('A3 [8P] 2003-2013').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Audi A3 [8P] 2003-2013').should('be.visible');
      cy.get('._1PRn').contains('A3').click();
      cy.get('._1Cqj').contains('A3 [8V] 2012 - н.в.').click();
      cy.get('._1PRn').contains('A3 [8V] 2012 - н.в.').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Audi A3 [8V] 2012 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Audi').click(); // Возвращаемся к марке
})
})
