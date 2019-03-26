describe("Mini", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Cabrio', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Mini').click();
      cy.get('._2qTd').contains('Cabrio').click();
      cy.get('._3Txt').contains('F57 2015 - н.в.').click();
      cy.get('._1PRn').contains('F57 2015 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini F57 2015 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Cabrio').click();
      cy.get('._3Txt').contains('R52 2004-2008').click();
      cy.get('._1PRn').contains('R52 2004-2008').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini R52 2004-2008').should('be.visible');
      cy.get('._1PRn').contains('Cabrio').click();
      cy.get('._3Txt').contains('R57 2008 - 2015').click();
      cy.get('._1PRn').contains('R57 2008 - 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini R57 2008 - 2015').should('be.visible');
      cy.get('._1PRn').contains('Mini').click(); // Возвращаемся к марке
})

     it('Clubman', function() {
      cy.get('._2qTd').contains('Clubman').click();
      cy.get('._3Txt').contains('Clubman (F54) II 2015 – н.в.').click();
      cy.get('._1PRn').contains('Clubman (F54) II 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini Clubman (F54) II 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Clubman').click();
      cy.get('._3Txt').contains('Clubman R55 c 2006 г.').click();
      cy.get('._1PRn').contains('Clubman R55 c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini Clubman R55 c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Mini').click(); // Возвращаемся к марке
})

     it('Cooper', function() {
      cy.get('._2qTd').contains('Cooper').click();
      cy.get('._3Txt').contains('Cooper c 2000 г.').click();
      cy.get('._1PRn').contains('Cooper c 2000 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini Cooper c 2000 г.').should('be.visible');
      cy.get('._1PRn').contains('Mini').click(); // Возвращаемся к марке
})

     it('Countryman', function() {
      cy.get('._2qTd').contains('Countryman').click();
      cy.get('._3Txt').contains('Countryman I (R60) 2010 – 2016').click();
      cy.get('._1PRn').contains('Countryman I (R60) 2010 – 2016').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini Countryman I (R60) 2010 – 2016').should('be.visible');
      cy.get('._1PRn').contains('Countryman').click();
      cy.get('._3Txt').contains('Countryman II (F60) 2016 – н.в.').click();
      cy.get('._1PRn').contains('Countryman II (F60) 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini Countryman II (F60) 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Mini').click(); // Возвращаемся к марке
})

     it('Coupe', function() {
      cy.get('._2qTd').contains('Coupe').click();
      cy.get('._3Txt').contains('Coupe I 2011 – н.в.').click();
      cy.get('._1PRn').contains('Coupe I 2011 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini Coupe I 2011 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Mini').click(); // Возвращаемся к марке
})

     it('Hatch', function() {
      cy.get('._2qTd').contains('Hatch').click();
      cy.get('._3Txt').contains('Hatch III (F55/F56) с 2015 г.').click();
      cy.get('._1PRn').contains('Hatch III (F55/F56) с 2015 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini Hatch III (F55/F56) с 2015 г.').should('be.visible');
      cy.get('._1PRn').contains('Mini').click(); // Возвращаемся к марке
})

     it('Paceman', function() {
      cy.get('._2qTd').contains('Paceman').click();
      cy.get('._3Txt').contains('Paceman R61 с 2013 г.').click();
      cy.get('._1PRn').contains('Paceman R61 с 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini Paceman R61 с 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Mini').click(); // Возвращаемся к марке
})

     it('R50', function() {
      cy.get('._2qTd').contains('R50').click();
      cy.get('._3Txt').contains('R50 2000-2007').click();
      cy.get('._1PRn').contains('R50 2000-2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini R50 2000-2007').should('be.visible');
      cy.get('._1PRn').contains('Mini').click(); // Возвращаемся к марке
})

     it('R53', function() {
      cy.get('._2qTd').contains('R53').click();
      cy.get('._3Txt').contains('R53 2000-2007').click();
      cy.get('._1PRn').contains('R53 2000-2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini R53 2000-2007').should('be.visible');
      cy.get('._1PRn').contains('Mini').click(); // Возвращаемся к марке
})

     it('R56', function() {
      cy.get('._2qTd').contains('R56').click();
      cy.get('._3Txt').contains('R56 c 2005 г.').click();
      cy.get('._1PRn').contains('R56 c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini R56 c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Mini').click(); // Возвращаемся к марке
})

     it('Roadster', function() {
      cy.get('._2qTd').contains('Roadster').click();
      cy.get('._3Txt').contains('Roadster I 2012 – н.в.').click();
      cy.get('._1PRn').contains('Roadster I 2012 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mini Roadster I 2012 – н.в.').should('be.visible');
})
})