describe("Mercedes Benz", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('A140/160', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Mercedes Benz').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('A140/160').click();
      cy.get('._3Txt').contains('A140/160 W168 1997-2004').click();
      cy.get('._1PRn').contains('A140/160 W168 1997-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz A140/160 W168 1997-2004').should('be.visible');
      cy.get('._1PRn').contains('A140/160').click();
      cy.get('._3Txt').contains('A140/160 W169 2004-2012').click();
      cy.get('._1PRn').contains('A140/160 W169 2004-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz A140/160 W169 2004-2012').should('be.visible');
      cy.get('._1PRn').contains('A140/160').click();
      cy.get('._3Txt').contains('A140/160 W176 c 2012г.').click();
      cy.get('._1PRn').contains('A140/160 W176 c 2012г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz A140/160 W176 c 2012г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('B-Class (W242)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('B-Class (W242)').click();
      cy.get('._3Txt').contains('W242 B-klasse с 2011 г.').click();
      cy.get('._1PRn').contains('W242 B-klasse с 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W242 B-klasse с 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('B-Class (W245)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('B-Class (W245)').click();
      cy.get('._3Txt').contains('W245 B-klasse 2005-2012').click();
      cy.get('._1PRn').contains('W245 B-klasse 2005-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W245 B-klasse 2005-2012').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('B-Class (W246)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('B-Class (W246)').click();
      cy.get('._3Txt').contains('W246 B-klasse c 2012 г.').click();
      cy.get('._1PRn').contains('W246 B-klasse c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W246 B-klasse c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('BUS', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('BUS').click();
      cy.get('._3Txt').contains('Bus 207D-410 1981-1995').click();
      cy.get('._1PRn').contains('Bus 207D-410 1981-1995').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz Bus 207D-410 1981-1995').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('C-Class (W201)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C-Class (W201)').click();
      cy.get('._3Txt').contains('W201 1982-1993').click();
      cy.get('._1PRn').contains('W201 1982-1993').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W201 1982-1993').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('C-Class (W202)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C-Class (W202)').click();
      cy.get('._3Txt').contains('W202 1993-2000').click();
      cy.get('._1PRn').contains('W202 1993-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W202 1993-2000').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('C-Class (W203)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C-Class (W203)').click();
      cy.get('._3Txt').contains('W203 2000-2006').click();
      cy.get('._1PRn').contains('W203 2000-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W203 2000-2006').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('C-Class (W204)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C-Class (W204)').click();
      cy.get('._3Txt').contains('W204 c 2007 г.').click();
      cy.get('._1PRn').contains('W204 c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W204 c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('C-Class (W205)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C-Class (W205)').click();
      cy.get('._3Txt').contains('W205 c 2013 г.').click();
      cy.get('._1PRn').contains('W205 c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W205 c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('C-Class Coupe (CL203)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('C-Class Coupe (CL203)').click();
      cy.get('._3Txt').contains('CL203 CLC c 2008 г.').click();
      cy.get('._1PRn').contains('CL203 CLC c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz CL203 CLC c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('CL-Class (W215)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('CL-Class (W215)').click();
      cy.get('._3Txt').contains('W215 coupe 1999-2006').click();
      cy.get('._1PRn').contains('W215 coupe 1999-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W215 coupe 1999-2006').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('CL-Class (W216)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('CL-Class (W216)').click();
      cy.get('._3Txt').contains('W216 CL c 2006 г.').click();
      cy.get('._1PRn').contains('W216 CL c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W216 CL c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('CLA (W117)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('CLA (W117)').click();
      cy.get('._3Txt').contains('W117 CLA c 2013 г.').click();
      cy.get('._1PRn').contains('W117 CLA c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W117 CLA c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('CLK-Class (C208)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('CLK-Class (C208)').click();
      cy.get('._3Txt').contains('C208 CLK coupe 1997-2002').click();
      cy.get('._1PRn').contains('C208 CLK coupe 1997-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz C208 CLK coupe 1997-2002').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('CLK-Class (C209)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('CLK-Class (C209)').click();
      cy.get('._3Txt').contains('C209 CLK coupe 2002-2009').click();
      cy.get('._1PRn').contains('C209 CLK coupe 2002-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz C209 CLK coupe 2002-2009').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('CLS-klasse', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('CLS-klasse').click();
      cy.get('._3Txt').contains('CLS-klasse I (C219) 2004 – 2010').click();
      cy.get('._1PRn').contains('CLS-klasse I (C219) 2004 – 2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz CLS-klasse I (C219) 2004 – 2010').should('be.visible');
      cy.get('._1PRn').contains('CLS-klasse').click();
      cy.get('._3Txt').contains('CLS-klasse II (C218) 2010 – 2017').click();
      cy.get('._1PRn').contains('CLS-klasse II (C218) 2010 – 2017').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz CLS-klasse II (C218) 2010 – 2017').should('be.visible');
      cy.get('._1PRn').contains('CLS-klasse').click();
      cy.get('._3Txt').contains('CLS-klasse III (C257) 2018 – н.в.').click();
      cy.get('._1PRn').contains('CLS-klasse III (C257) 2018 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz CLS-klasse III (C257) 2018 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('Citan (W145)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Citan (W145)').click();
      cy.get('._3Txt').contains('Citan (W415) 2013 – н.в.').click();
      cy.get('._1PRn').contains('Citan (W415) 2013 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz Citan (W415) 2013 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('E-Class (W123)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('E-Class (W123)').click();
      cy.get('._3Txt').contains('W123 1976-1985').click();
      cy.get('._1PRn').contains('W123 1976-1985').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W123 1976-1985').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('E-Class (W124)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('E-Class (W124)').click();
      cy.get('._3Txt').contains('W124 1984-1993').click();
      cy.get('._1PRn').contains('W124 1984-1993').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W124 1984-1993').should('be.visible');
      cy.get('._1PRn').contains('E-Class (W124)').click();
      cy.get('._3Txt').contains('W124 E-Klasse 1993-1995').click();
      cy.get('._1PRn').contains('W124 E-Klasse 1993-1995').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W124 E-Klasse 1993-1995').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('E-Class (W207)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('E-Class (W207)').click();
      cy.get('._3Txt').contains('W207 E-Coupe c 2009 г.').click();
      cy.get('._1PRn').contains('W207 E-Coupe c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W207 E-Coupe c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('E-Class (W210)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('E-Class (W210)').click();
      cy.get('._3Txt').contains('W210 E-Klasse 1995-2000').click();
      cy.get('._1PRn').contains('W210 E-Klasse 1995-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W210 E-Klasse 1995-2000').should('be.visible');
      cy.get('._1PRn').contains('E-Class (W210)').click();
      cy.get('._3Txt').contains('W210 E-Klasse 2000-2002').click();
      cy.get('._1PRn').contains('W210 E-Klasse 2000-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W210 E-Klasse 2000-2002').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('E-Class (W211)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('E-Class (W211)').click();
      cy.get('._1r4G').contains('W211 E-Klasse 2002-2009').click();
      cy.get('._1PRn').contains('W211 E-Klasse 2002-2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W211 E-Klasse 2002-2009').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('E-Class (W212)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('E-Class (W212)').click();
      cy.get('._3Txt').contains('W212 E-Klasse c 2009 г.').click();
      cy.get('._1PRn').contains('W212 E-Klasse c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W212 E-Klasse c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('E-klasse (W213)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('E-klasse (W213)').click();
      cy.get('._3Txt').contains('E-klasse (W213) 2016 – н.в.').click();
      cy.get('._1PRn').contains('E-klasse (W213) 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz E-klasse (W213) 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('G-Class', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('G-Class').click();
      cy.get('._3Txt').contains('G-Class W460 1979-1993').click();
      cy.get('._1PRn').contains('G-Class W460 1979-1993').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz G-Class W460 1979-1993').should('be.visible');
      cy.get('._1PRn').contains('G-Class').click();
      cy.get('._3Txt').contains('G-Class W463 c 1989 г.').click();
      cy.get('._1PRn').contains('G-Class W463 c 1989 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz G-Class W463 c 1989 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('GL-Class', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('GL-Class').click();
      cy.get('._3Txt').contains('GL-Class X164 2006-2012').click();
      cy.get('._1PRn').contains('GL-Class X164 2006-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz GL-Class X164 2006-2012').should('be.visible');
      cy.get('._1PRn').contains('GL-Class').click();
      cy.get('._3Txt').contains('GL-Class X166 c 2012 г.').click();
      cy.get('._1PRn').contains('GL-Class X166 c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz GL-Class X166 c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('GLA-Class', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('GLA-Class').click();
      cy.get('._3Txt').contains('GLA-Class X156 c 2014 г.').click();
      cy.get('._1PRn').contains('GLA-Class X156 c 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz GLA-Class X156 c 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('GLC-Class', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('GLC-Class').click();
      cy.get('._3Txt').contains('GLC-Klasse X253 с 2015г.').click();
      cy.get('._1PRn').contains('GLC-Klasse X253 с 2015г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz GLC-Klasse X253 с 2015г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('GLE-Class', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('GLE-Class').click();
      cy.get('._3Txt').contains('GLE W166 с 2015 г.').click();
      cy.get('._1PRn').contains('GLE W166 с 2015 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz GLE W166 с 2015 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('GLE-Class Coupe', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('GLE-Class Coupe').click();
      cy.get('._3Txt').contains('GLE Coupe C292 с 2015 г.').click();
      cy.get('._1PRn').contains('GLE Coupe C292 с 2015 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz GLE Coupe C292 с 2015 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('GLK-Class', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('GLK-Class').click();
      cy.get('._3Txt').contains('GLK-Class X204 c 2008 г.').click();
      cy.get('._1PRn').contains('GLK-Class X204 c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz GLK-Class X204 c 2008 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('GLS', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('GLS').click();
      cy.get('._3Txt').contains('GLS X166 2015 - н.в.').click();
      cy.get('._1PRn').contains('GLS X166 2015 - н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz GLS X166 2015 - н.в.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('M-Class (W166)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('M-Class (W166)').click();
      cy.get('._3Txt').contains('W166 M-Klasse (ML) c 2011 г.').click();
      cy.get('._1PRn').contains('W166 M-Klasse (ML) c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W166 M-Klasse (ML) c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('MB100', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('MB100').click();
      cy.get('._3Txt').contains('MB100 (VSA 100) 1988-1996').click();
      cy.get('._1PRn').contains('MB100 (VSA 100) 1988-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz MB100 (VSA 100) 1988-1996').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('ML-Class (W163)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('ML-Class (W163)').click();
      cy.get('._3Txt').contains('W163 M-Klasse (ML) 1998-2004').click();
      cy.get('._1PRn').contains('W163 M-Klasse (ML) 1998-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W163 M-Klasse (ML) 1998-2004').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('ML-Class (W164)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('ML-Class (W164)').click();
      cy.get('._3Txt').contains('W164 M-Klasse (ML) 2005-2011').click();
      cy.get('._1PRn').contains('W164 M-Klasse (ML) 2005-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W164 M-Klasse (ML) 2005-2011').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('R-Class (W251)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('R-Class (W251)').click();
      cy.get('._3Txt').contains('W251 R-Klasse c 2005 г.').click();
      cy.get('._1PRn').contains('W251 R-Klasse c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W251 R-Klasse c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('S-Class (W126)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('S-Class (W126)').click();
      cy.get('._3Txt').contains('W126 1979-1991').click();
      cy.get('._1PRn').contains('W126 1979-1991').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W126 1979-1991').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('S-Class (W140)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('S-Class (W140)').click();
      cy.get('._3Txt').contains('W140 1991-1999').click();
      cy.get('._1PRn').contains('W140 1991-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W140 1991-1999').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('S-Class (W220)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('S-Class (W220)').click();
      cy.get('._3Txt').contains('W220 1998-2005').click();
      cy.get('._1PRn').contains('W220 1998-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W220 1998-2005').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('S-Class (W221)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('S-Class (W221)').click();
      cy.get('._3Txt').contains('W221 2005-2013').click();
      cy.get('._1PRn').contains('W221 2005-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W221 2005-2013').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('S-Class (W222)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('S-Class (W222)').click();
      cy.get('._3Txt').contains('W222 c 2013 г.').click();
      cy.get('._1PRn').contains('W222 c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W222 c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('S-Class Coupe (W217)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('S-Class Coupe (W217)').click();
      cy.get('._3Txt').contains('W217 S-klasse Coupe с 2014 г.').click();
      cy.get('._1PRn').contains('W217 S-klasse Coupe с 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W217 S-klasse Coupe с 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('SL-Class (R231)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('SL-Class (R231)').click();
      cy.get('._3Txt').contains('R231 SL c 2012 г.').click();
      cy.get('._1PRn').contains('R231 SL c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz R231 SL c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('SL-Class (W129)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('SL-Class (W129)').click();
      cy.get('._3Txt').contains('W129 1989-2001').click();
      cy.get('._1PRn').contains('W129 1989-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz W129 1989-2001').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('SLK-Class (R170)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('SLK-Class (R170)').click();
      cy.get('._3Txt').contains('R170 SLK 1996-2004').click();
      cy.get('._1PRn').contains('R170 SLK 1996-2004').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz R170 SLK 1996-2004').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('SLK-Class (R171)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('SLK-Class (R171)').click();
      cy.get('._3Txt').contains('R171 SLK 2004-2011').click();
      cy.get('._1PRn').contains('R171 SLK 2004-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz R171 SLK 2004-2011').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('SLK-Class (R172)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('SLK-Class (R172)').click();
      cy.get('._3Txt').contains('R172 SLK c 2010 г.').click();
      cy.get('._1PRn').contains('R172 SLK c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz R172 SLK c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

     it('SLS AMG', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('SLS AMG').click();
      cy.get('._3Txt').contains('SLS AMG 2010 – 2014').click();
      cy.get('._1PRn').contains('SLS AMG 2010 – 2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz SLS AMG 2010 – 2014').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

      it('Sprinter', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Sprinter').click();
      cy.get('._3Txt').contains('Sprinter (901) 1995-2006').click();
      cy.get('._1PRn').contains('Sprinter (901) 1995-2006').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz Sprinter (901) 1995-2006').should('be.visible');
      cy.get('._1PRn').contains('Sprinter').click();
      cy.get('._3Txt').contains('Sprinter (906) c 2006 г.').click();
      cy.get('._1PRn').contains('Sprinter (906) c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz Sprinter (906) c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Sprinter').click();
      cy.get('._3Txt').contains('Sprinter (909) c 2013 г.').click();
      cy.get('._1PRn').contains('Sprinter (909) c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz Benz Sprinter (909) c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

      it('Truck', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Truck').click();
      cy.get('._3Txt').contains('Truck Atego II c 2004 г.').click();
      cy.get('._1PRn').contains('Truck Atego II c 2004 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz Truck Atego II c 2004 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

      it('VANEO', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('VANEO').click();
      cy.get('._3Txt').contains('VANEO c 2002 г.').click();
      cy.get('._1PRn').contains('VANEO c 2002 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz VANEO c 2002 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

      it('VANEO', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('VANEO').click();
      cy.get('._3Txt').contains('VANEO c 2002 г.').click();
      cy.get('._1PRn').contains('VANEO c 2002 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz VANEO c 2002 г.').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})

      it('Vito/Viano', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Vito/Viano').click();
      cy.get('._3Txt').contains('Vito (447) с 2014 г.').click();
      cy.get('._1PRn').contains('Vito (447) с 2014 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz Vito (447) с 2014 г.').should('be.visible');
      cy.get('._1PRn').contains('Vito/Viano').click();
      cy.get('._3Txt').contains('Vito (638) 1996-2003').click();
      cy.get('._1PRn').contains('Vito (638) 1996-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz Vito (638) 1996-2003').should('be.visible');
      cy.get('._1PRn').contains('Vito/Viano').click();
      cy.get('._3Txt').contains('Vito/Viano-(639) 2003-2013').click();
      cy.get('._1PRn').contains('Vito/Viano-(639) 2003-2013').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Mercedes Benz Vito/Viano-(639) 2003-2013').should('be.visible');
      cy.get('._1PRn').contains('Mercedes Benz').click(); // Возвращаемся к марке
})
})