describe("магаз проверка поколения", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");

})
     it('Acura 565', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Acura').click();
      cy.get('._1Cqj').contains('565').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('565 CL 1996-2003').click();
      cy.get('._1PRn').contains('565 CL 1996-2003').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura 565 CL 1996-2003').should('be.visible');
      cy.get('._1PRn').contains('Acura').click(); // Возвращаемся к марке
})

     it('Acura MDX', function() {
      cy.get('._1Cqj').contains('MDX').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('MDX 2001-2006').click();
      cy.get('._1PRn').contains('MDX 2001-2006').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura MDX 2001-2006').should('be.visible');
      cy.get('._1PRn').contains('MDX').click();
      cy.get('._1Cqj').contains('MDX 2007-2013').click();
      cy.get('._1PRn').contains('MDX 2007-2013').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura MDX 2007-2013').should('be.visible');
      cy.get('._1PRn').contains('MDX').click();
      cy.get('._1Cqj').contains('MDX c 2014 г.').click();
      cy.get('._1PRn').contains('MDX c 2014 г.').should('be.visible');
      cy.wait(1000);
      cy.get('._1R8- > :nth-child(1)').contains('Acura MDX c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Acura').click(); // Возвращаемся к марке
})

     it('Acura RDX', function() {
      cy.get('._1Cqj').contains('RDX').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('RDX 2006-2012').click();
      cy.get('._1PRn').contains('RDX 2006-2012').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura RDX 2006-2012').should('be.visible');
      cy.get('._1PRn').contains('RDX').click();
      cy.get('._1Cqj').contains('RDX c 2013 г.').click();
      cy.get('._1PRn').contains('RDX c 2013 г.').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura RDX c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Acura').click(); // Возвращаемся к марке
})

     it('Acura RL', function() {
      cy.get('._1Cqj').contains('RL').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('RL I 1996-2004').click();
      cy.get('._1PRn').contains('RL I 1996-2004').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura RL I 1996-2004').should('be.visible');
      cy.get('._1PRn').contains('RL').click();
      cy.get('._1Cqj').contains('RL II 2004-2012').click();
      cy.get('._1PRn').contains('RL II 2004-2012').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura RL II 2004-2012').should('be.visible');
      cy.get('._1PRn').contains('Acura').click(); // Возвращаемся к марке
})

     it('Acura TL', function() {
      cy.get('._1Cqj').contains('TL').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('TL III 2003 - 2008').click();
      cy.get('._1PRn').contains('TL III 2003 - 2008').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura TL III 2003 - 2008').should('be.visible');
      cy.get('._1PRn').contains('Acura').click(); // Возвращаемся к марке
})

     it('Acura TLX', function() {
      cy.get('._1Cqj').contains('TLX').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('TLX 2014 – н.в.').click();
      cy.get('._1PRn').contains('TLX 2014 – н.в.').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura TLX 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Acura').click(); // Возвращаемся к марке
})

     it('Acura TSX', function() {
      cy.get('._1Cqj').contains('TSX').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('TSX I 2003 - 2008').click();
      cy.get('._1PRn').contains('TSX I 2003 - 2008').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura TSX I 2003 - 2008').should('be.visible');
      cy.get('._1PRn').contains('TSX').click();
      cy.get('._1Cqj').contains('TSX II 2008 – 2014').click();
      cy.get('._1PRn').contains('TSX II 2008 – 2014').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura TSX II 2008 – 2014').should('be.visible');
      cy.get('._1PRn').contains('Acura').click(); // Возвращаемся к марке
})

     it('Acura ZDX', function() {
      cy.get('._1Cqj').contains('ZDX').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('ZDX 2009 – 2014').click();
      cy.get('._1PRn').contains('ZDX 2009 – 2014').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Acura ZDX 2009 – 2014').should('be.visible');
      cy.get('._2S9w').click(); // Главная страница
})

     it('Alfa Romeo 145', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Alfa Romeo').click();
      cy.get('._1Cqj').contains('145').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('145 1994-2001').click();
      cy.get('._1PRn').contains('145 1994-2001').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Alfa Romeo 145 1994-2001').should('be.visible');
      cy.get('._1PRn').contains('Alfa Romeo').click(); // Возвращаемся к марке
})

     it('Alfa Romeo 146', function() {
      cy.get('._1Cqj').contains('146').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('146 1994-2001').click();
      cy.get('._1PRn').contains('146 1994-2001').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Alfa Romeo 146 1994-2001').should('be.visible');
      cy.get('._1PRn').contains('Alfa Romeo').click(); // Возвращаемся к марке
})

     it('Alfa Romeo 147', function() {
      cy.get('._1Cqj').contains('147').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('147 2001-2010').click();
      cy.get('._1PRn').contains('147 2001-2010').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Alfa Romeo 147 2001-2010').should('be.visible');
      cy.get('._1PRn').contains('Alfa Romeo').click(); // Возвращаемся к марке
})

     it('Alfa Romeo 155', function() {
      cy.get('._1Cqj').contains('155').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('155 1992-1997').click();
      cy.get('._1PRn').contains('155 1992-1997').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Alfa Romeo 155 1992-1997').should('be.visible');
      cy.get('._1PRn').contains('Alfa Romeo').click(); // Возвращаемся к марке
})

     it('Alfa Romeo 156', function() {
      cy.get('._1Cqj').contains('156').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('156 1997-2005').click();
      cy.get('._1PRn').contains('156 1997-2005').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Alfa Romeo 156 1997-2005').should('be.visible');
      cy.get('._1PRn').contains('Alfa Romeo').click(); // Возвращаемся к марке
})

     it('Alfa Romeo 159', function() {
      cy.get('._1Cqj').contains('159').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('159 2005-2011').click();
      cy.get('._1PRn').contains('159 2005-2011').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Alfa Romeo 159 2005-2011').should('be.visible');
      cy.get('._1PRn').contains('Alfa Romeo').click(); // Возвращаемся к марке
})

     it('Alfa Romeo 164', function() {
      cy.get('._1Cqj').contains('164').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('164 1987-1998').click();
      cy.get('._1PRn').contains('164 1987-1998').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Alfa Romeo 164 1987-1998').should('be.visible');
      cy.get('._1PRn').contains('Alfa Romeo').click(); // Возвращаемся к марке
})

     it('Alfa Romeo 166', function() {
      cy.get('._1Cqj').contains('166').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('166 1998-2007').click();
      cy.get('._1PRn').contains('166 1998-2007').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Alfa Romeo 166 1998-2007').should('be.visible');
      cy.get('._1PRn').contains('Alfa Romeo').click(); // Возвращаемся к марке
})

     it('Alfa Romeo Giulietta', function() {
      cy.get('._1Cqj').contains('Giulietta').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('Giulietta III 2010 – н.в.').click();
      cy.get('._1PRn').contains('Giulietta III 2010 – н.в.').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Alfa Romeo Giulietta III 2010 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Alfa Romeo').click(); // Возвращаемся к марке
})

     it('Alfa Romeo MiTo', function() {
      cy.get('._1Cqj').contains('MiTo').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('MiTo c 2008 г.').click();
      cy.get('._1PRn').contains('MiTo c 2008 г.').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Alfa Romeo MiTo c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Alfa Romeo').click(); // Возвращаемся к марке
})

     it('Alfa Romeo Spider', function() {
      cy.get('._1Cqj').contains('Spider').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('Spider 1971-1993').click();
      cy.get('._1PRn').contains('Spider 1971-1993').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Alfa Romeo Spider 1971-1993').should('be.visible');
      cy.get('._2S9w').click(); // Главная страница
})

     it('Aston Martin DB9', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Aston Martin').click();
      cy.get('._1Cqj').contains('DB9').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('DB9 I 2003 – н.в.').click();
      cy.get('._1PRn').contains('DB9 I 2003 – н.в.').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Aston Martin DB9 I 2003 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Aston Martin').click(); // Возвращаемся к марке
})

     it('Aston Martin Rapide', function() {
      cy.get('._1Cqj').contains('Rapide').click();
      cy.wait(1000);
      cy.get('._3Txt').contains('Rapide I (S) 2013 – н.в.').click();
      cy.get('._1PRn').contains('Rapide I (S) 2013 – н.в.').should('be.visible');
      cy.get('._1R8- > :nth-child(1)').contains('Aston Martin Rapide I (S) 2013 – н.в.').should('be.visible');
      cy.get('._2S9w').click(); // Главная страница
})

})

