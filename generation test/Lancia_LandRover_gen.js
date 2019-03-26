describe("Lancia_LandRover", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})

     it('Lancia Dedra', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Lancia').click();
      cy.get('._1Cqj').contains('Dedra').click();
      cy.get('._3Txt').contains('Dedra 1989-1998').click();
      cy.get('._1PRn').contains('Dedra 1989-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lancia Dedra 1989-1998').should('be.visible');
      cy.get('._1PRn').contains('Lancia').click(); // Возвращаемся к маркам
})

     it('Lancia Delta', function() {
      cy.get('._1Cqj').contains('Delta').click();
      cy.get('._3Txt').contains('Delta II 1993-1999').click();
      cy.get('._1PRn').contains('Delta II 1993-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lancia Delta II 1993-1999').should('be.visible');
      cy.get('._1PRn').contains('Lancia').click(); // Возвращаемся к маркам
})

     it('Lancia Kappa', function() {
      cy.get('._1Cqj').contains('Kappa').click();
      cy.get('._3Txt').contains('Kappa 1994 – 2000').click();
      cy.get('._1PRn').contains('Kappa 1994 – 2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lancia Kappa 1994 – 2000').should('be.visible');
      cy.get('._1PRn').contains('Lancia').click(); // Возвращаемся к маркам
})

     it('Lancia Lybra', function() {
      cy.get('._1Cqj').contains('Lybra').click();
      cy.get('._3Txt').contains('Lybra 1999 – 2006').click();
      cy.get('._1PRn').contains('Lybra 1999 – 2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lancia Lybra 1999 – 2006').should('be.visible');
      cy.get('._1PRn').contains('Lancia').click(); // Возвращаемся к маркам
})

     it('Lancia Phedra', function() {
      cy.get('._1Cqj').contains('Phedra').click();
      cy.get('._3Txt').contains('Phedra 2002 – 2010').click();
      cy.get('._1PRn').contains('Phedra 2002 – 2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lancia Phedra 2002 – 2010').should('be.visible');
      cy.get('._1PRn').contains('Lancia').click(); // Возвращаемся к маркам
})

     it('Lancia Thesis', function() {
      cy.get('._1Cqj').contains('Thesis').click();
      cy.get('._3Txt').contains('Thesis 2002 – 2009').click();
      cy.get('._1PRn').contains('Thesis 2002 – 2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lancia Thesis 2002 – 2009').should('be.visible');
      cy.get('._1PRn').contains('Lancia').click(); // Возвращаемся к маркам
})

     it('Lancia Ypsilon', function() {
      cy.get('._1Cqj').contains('Ypsilon').click();
      cy.get('._3Txt').contains('Ypsilon I (Type 840) 1995 – 2003').click();
      cy.get('._1PRn').contains('Ypsilon I (Type 840) 1995 – 2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lancia Ypsilon I (Type 840) 1995 – 2003').should('be.visible');
      cy.get('._1PRn').contains('Ypsilon').click();
      cy.get('._3Txt').contains('Ypsilon II (Type 843) 2003 – 2011').click();
      cy.get('._1PRn').contains('Ypsilon II (Type 843) 2003 – 2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lancia Ypsilon II (Type 843) 2003 – 2011').should('be.visible');
      cy.get('._1PRn').contains('Ypsilon').click();
      cy.get('._3Txt').contains('Ypsilon III (Type 846) 2011 – н.в.').click();
      cy.get('._1PRn').contains('Ypsilon III (Type 846) 2011 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lancia Ypsilon III (Type 846) 2011 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Lancia').click(); // Возвращаемся к маркам
})

     it('Lancia Zeta', function() {
      cy.get('._1Cqj').contains('Zeta').click();
      cy.get('._3Txt').contains('Zeta 1995 – 2002').click();
      cy.get('._1PRn').contains('Zeta 1995 – 2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Lancia Zeta 1995 – 2002').should('be.visible');
      cy.get('._1PRn').contains('Легковые').click(); // Возвращаемся к легковым
})

     it('Land Rover Defender', function() {
      cy.get('._3WQJ').contains('Land Rover').click();
      cy.get('._1Cqj').contains('Defender').click();
      cy.get('._3Txt').contains('Defender 1983-2006').click();
      cy.get('._1PRn').contains('Defender 1983-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Defender 1983-2006').should('be.visible');
      cy.get('._1PRn').contains('Defender').click();
      cy.get('._3Txt').contains('Defender c 2007 г.').click();
      cy.get('._1PRn').contains('Defender c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Defender c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Land Rover').click(); // Возвращаемся к марке
})

     it('Land Rover Discovery', function() {
      cy.get('._1Cqj').contains('Discovery').click();
      cy.get('._3Txt').contains('Discovery I 1994-1998').click();
      cy.get('._1PRn').contains('Discovery I 1994-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Discovery I 1994-1998').should('be.visible');
      cy.get('._1PRn').contains('Discovery').click();
      cy.get('._3Txt').contains('Discovery II 1998-2004').click();
      cy.get('._1PRn').contains('Discovery II 1998-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Discovery II 1998-2004').should('be.visible');
      cy.get('._1PRn').contains('Discovery').click();
      cy.get('._3Txt').contains('Discovery III 2004-2009').click();
      cy.get('._1PRn').contains('Discovery III 2004-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Discovery III 2004-2009').should('be.visible');
      cy.get('._1PRn').contains('Discovery').click();
      cy.get('._3Txt').contains('Discovery IV c 2009 г.').click();
      cy.get('._1PRn').contains('Discovery IV c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Discovery IV c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Discovery').click();
      cy.get('._3Txt').contains('Discovery Sport c 2014 г.').click();
      cy.get('._1PRn').contains('Discovery Sport c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Discovery Sport c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Discovery').click();
      cy.get('._3Txt').contains('Discovery V 2017 - н.в.').click();
      cy.get('._1PRn').contains('Discovery V 2017 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Discovery V 2017 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Land Rover').click(); // Возвращаемся к марке
})

     it('Land Rover Freelander', function() {
      cy.get('._1Cqj').contains('Freelander').click();
      cy.get('._3Txt').contains('Freelander 1998-2006').click();
      cy.get('._1PRn').contains('Freelander 1998-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Freelander 1998-2006').should('be.visible');
      cy.get('._1PRn').contains('Freelander').click();
      cy.get('._3Txt').contains('Freelander 2 c 2007 г.').click();
      cy.get('._1PRn').contains('Freelander 2 c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Freelander 2 c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Land Rover').click(); // Возвращаемся к марке
})

     it('Land Rover Range Rover', function() {
      cy.get('._1Cqj').contains('Range Rover').click();
      cy.get('._3Txt').contains('Range Rover Evoque c 2011 г.').click();
      cy.get('._1PRn').contains('Range Rover Evoque c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Range Rover Evoque c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Range Rover').click();
      cy.get('._3Txt').contains('Range Rover I  до 1994 г.').click();
      cy.get('._1PRn').contains('Range Rover I  до 1994 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Range Rover I  до 1994 г.').should('be.visible');
      cy.get('._1PRn').contains('Range Rover').click();
      cy.get('._3Txt').contains('Range Rover II 1994-2003').click();
      cy.get('._1PRn').contains('Range Rover II 1994-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Range Rover II 1994-2003').should('be.visible');
      cy.get('._1PRn').contains('Range Rover').click();
      cy.get('._3Txt').contains('Range Rover III (LM) 2002-2012').click();
      cy.get('._1PRn').contains('Range Rover III (LM) 2002-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Range Rover III (LM) 2002-2012').should('be.visible');
      cy.get('._1PRn').contains('Range Rover').click();
      cy.get('._3Txt').contains('Range Rover IV c 2013 г.').click();
      cy.get('._1PRn').contains('Range Rover IV c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Range Rover IV c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Range Rover').click();
      cy.get('._3Txt').contains('Range Rover Sport 2005-2012').click();
      cy.get('._1PRn').contains('Range Rover Sport 2005-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Range Rover Sport 2005-2012').should('be.visible');
      cy.get('._1PRn').contains('Range Rover').click();
      cy.get('._3Txt').contains('Range Rover Sport c 2013 г.').click();
      cy.get('._1PRn').contains('Range Rover Sport c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Range Rover Sport c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Land Rover').click(); // Возвращаемся к марке
})

     it('Range Rover Velar', function() {
      cy.get('._1Cqj').contains('Range Rover Velar').click();
      cy.get('._3Txt').contains('Range Rover Velar I 2017 - н.в.').click();
      cy.get('._1PRn').contains('Range Rover Velar I 2017 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Land Rover Range Rover Velar I 2017 - н.в.').should('be.visible');
})
})