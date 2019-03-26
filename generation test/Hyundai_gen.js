describe("Hyundai", function() {

     it("visit", function() {
     cy.clearCookies()
     cy.visit("https://magaz.apgrup.ru");
})
     it('Accent/Verna/Solaris', function() {
      cy.get('#root > div > div.TjJL > div._11Gk').contains("Все марки").click();
      cy.get('._3WQJ').contains('Hyundai').click();
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Accent/Verna/Solaris').click();
      cy.get('._3Txt').contains('Accent I 1994-2000').click();
      cy.get('._1PRn').contains('Accent I 1994-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Accent I 1994-2000').should('be.visible');
      cy.get('._1PRn').contains('Accent/Verna/Solaris').click();
      cy.get('._3Txt').contains('Accent II (+ТАГАЗ) 2000-2012').click();
      cy.get('._1PRn').contains('Accent II (+ТАГАЗ) 2000-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Accent II (+ТАГАЗ) 2000-2012').should('be.visible');
      cy.get('._1PRn').contains('Accent/Verna/Solaris').click();
      cy.get('._3Txt').contains('Solaris II 2017 – н.в.').click();
      cy.get('._1PRn').contains('Solaris II 2017 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Solaris II 2017 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Accent/Verna/Solaris').click();
      cy.get('._3Txt').contains('Solaris/Accent IV c 2010 г.').click();
      cy.get('._1PRn').contains('Solaris/Accent IV c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Solaris/Accent IV c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Accent/Verna/Solaris').click();
      cy.get('._3Txt').contains('Verna/Accent III 2006-2010').click();
      cy.get('._1PRn').contains('Verna/Accent III 2006-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Verna/Accent III 2006-2010').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Avante', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Avante').click();
      cy.get('._3Txt').contains('Avante (HD) 2006 – 2010').click();
      cy.get('._1PRn').contains('Avante (HD) 2006 – 2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Avante (HD) 2006 – 2010').should('be.visible');
      cy.get('._1PRn').contains('Avante').click();
      cy.get('._3Txt').contains('Avante (MD) 2010 – 2015').click();
      cy.get('._1PRn').contains('Avante (MD) 2010 – 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Avante (MD) 2010 – 2015').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('County', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('County').click();
      cy.get('._3Txt').contains('County c 1998 г.').click();
      cy.get('._1PRn').contains('County c 1998 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai County c 1998 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Coupe', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Coupe').click();
      cy.get('._3Txt').contains('Coupe (GK) c 2002 г.').click();
      cy.get('._1PRn').contains('Coupe (GK) c 2002 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Coupe (GK) c 2002 г.').should('be.visible');
      cy.get('._1PRn').contains('Coupe').click();
      cy.get('._3Txt').contains('Coupe (RD) 1996-2002').click();
      cy.get('._1PRn').contains('Coupe (RD) 1996-2002').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Coupe (RD) 1996-2002').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Creta', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Creta').click();
      cy.get('._3Txt').contains('Creta I 2016 – н.в.').click();
      cy.get('._1PRn').contains('Creta I 2016 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Creta I 2016 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Elantra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Elantra').click();
      cy.get('._3Txt').contains('Elantra II (J2, J3) 1995 – 2000').click();
      cy.get('._1PRn').contains('Elantra II (J2, J3) 1995 – 2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Elantra II (J2, J3) 1995 – 2000').should('be.visible');
      cy.get('._1PRn').contains('Elantra').click();
      cy.get('._3Txt').contains('Elantra III 2000-2010').click();
      cy.get('._1PRn').contains('Elantra III 2000-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Elantra III 2000-2010').should('be.visible');
      cy.get('._1PRn').contains('Elantra').click();
      cy.get('._3Txt').contains('Elantra IV 2006-2011').click();
      cy.get('._1PRn').contains('Elantra IV 2006-2011').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Elantra IV 2006-2011').should('be.visible');
      cy.get('._1PRn').contains('Elantra').click();
      cy.get('._3Txt').contains('Elantra V 2010 - 2016').click();
      cy.get('._1PRn').contains('Elantra V 2010 - 2016').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Elantra V 2010 - 2016').should('be.visible');
      cy.get('._1PRn').contains('Elantra').click();
      cy.get('._3Txt').contains('Elantra VI (AD) 2015 – н.в.').click();
      cy.get('._1PRn').contains('Elantra VI (AD) 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Elantra VI (AD) 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Equus', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Equus').click();
      cy.get('._3Txt').contains('Equus c 2009 г.').click();
      cy.get('._1PRn').contains('Equus c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Equus c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Galloper', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Galloper').click();
      cy.get('._3Txt').contains('Galloper I 1991-1998').click();
      cy.get('._1PRn').contains('Galloper I 1991-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Galloper I 1991-1998').should('be.visible');
      cy.get('._1PRn').contains('Galloper').click();
      cy.get('._3Txt').contains('Galloper II (JKC4) 1998-2003').click();
      cy.get('._1PRn').contains('Galloper II (JKC4) 1998-2003').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Galloper II (JKC4) 1998-2003').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Genesis', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Genesis').click();
      cy.get('._3Txt').contains('Genesis Coupe 2008>').click();
      cy.get('._1PRn').contains('Genesis Coupe 2008>').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Genesis Coupe 2008>').should('be.visible');
      cy.get('._1PRn').contains('Genesis').click();
      cy.get('._3Txt').contains('Genesis II 2014 – н.в.').click();
      cy.get('._1PRn').contains('Genesis II 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Genesis II 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Genesis').click();
      cy.get('._3Txt').contains('Genesis c 2009 г.').click();
      cy.get('._1PRn').contains('Genesis c 2009 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Genesis c 2009 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Getz', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Getz').click();
      cy.get('._3Txt').contains('Getz 2002-2010').click();
      cy.get('._1PRn').contains('Getz 2002-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Getz 2002-2010').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Grandeur', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Grandeur').click();
      cy.get('._3Txt').contains('Grandeur (IV) 2005-2010').click();
      cy.get('._1PRn').contains('Grandeur (IV) 2005-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Grandeur (IV) 2005-2010').should('be.visible');
      cy.get('._1PRn').contains('Grandeur').click();
      cy.get('._3Txt').contains('Grandeur (V) c 2011 г.').click();
      cy.get('._1PRn').contains('Grandeur (V) c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Grandeur (V) c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('H-100', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('H-100').click();
      cy.get('._3Txt').contains('H-100 c 1993 г.').click();
      cy.get('._1PRn').contains('H-100 c 1993 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai H-100 c 1993 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('H-200', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('H-200').click();
      cy.get('._3Txt').contains('H-200 c 1997 г.').click();
      cy.get('._1PRn').contains('H-200 c 1997 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai H-200 c 1997 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Lantra', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Lantra').click();
      cy.get('._3Txt').contains('Lantra 1990-1995').click();
      cy.get('._1PRn').contains('Lantra 1990-1995').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Lantra 1990-1995').should('be.visible');
      cy.get('._1PRn').contains('Lantra').click();
      cy.get('._3Txt').contains('Lantra 1996-2000').click();
      cy.get('._1PRn').contains('Lantra 1996-2000').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Lantra 1996-2000').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Matrix', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Matrix').click();
      cy.get('._3Txt').contains('Matrix c 2001 г.').click();
      cy.get('._1PRn').contains('Matrix c 2001 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Matrix c 2001 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Porter', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Porter').click();
      cy.get('._3Txt').contains('Porter c 2006 г.').click();
      cy.get('._1PRn').contains('Porter c 2006 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Porter c 2006 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('S-Coupe', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('S-Coupe').click();
      cy.get('._3Txt').contains('S-Coupe SLC 1990-1996').click();
      cy.get('._1PRn').contains('S-Coupe SLC 1990-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai S-Coupe SLC 1990-1996').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Santa', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Santa').click();
      cy.get('._3Txt').contains('Grand Santa Fe c 2013 г.').click();
      cy.get('._1PRn').contains('Grand Santa Fe c 2013 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Grand Santa Fe c 2013 г.').should('be.visible');
      cy.get('._1PRn').contains('Santa').click();
      cy.get('._3Txt').contains('Santa Fe (CM) 2005-2012').click();
      cy.get('._1PRn').contains('Santa Fe (CM) 2005-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Santa Fe (CM) 2005-2012').should('be.visible');
      cy.get('._1PRn').contains('Santa').click();
      cy.get('._3Txt').contains('Santa Fe (SM) 2000-2005').click();
      cy.get('._1PRn').contains('Santa Fe (SM) 2000-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Santa Fe (SM) 2000-2005').should('be.visible');
      cy.get('._1PRn').contains('Santa').click();
      cy.get('._3Txt').contains('Santa Fe c 2012 г.').click();
      cy.get('._1PRn').contains('Santa Fe c 2012 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Santa Fe c 2012 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Sonata', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Sonata').click();
      cy.get('._3Txt').contains('Sonata I 1988-1993').click();
      cy.get('._1PRn').contains('Sonata I 1988-1993').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Sonata I 1988-1993').should('be.visible');
      cy.get('._1PRn').contains('Sonata').click();
      cy.get('._3Txt').contains('Sonata II 1993-1996').click();
      cy.get('._1PRn').contains('Sonata II 1993-1996').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Sonata II 1993-1996').should('be.visible');
      cy.get('._1PRn').contains('Sonata').click();
      cy.get('._3Txt').contains('Sonata III 1996-1998').click();
      cy.get('._1PRn').contains('Sonata III 1996-1998').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Sonata III 1996-1998').should('be.visible');
      cy.get('._1PRn').contains('Sonata').click();
      cy.get('._3Txt').contains('Sonata IV (EF) 1998-2001').click();
      cy.get('._1PRn').contains('Sonata IV (EF) 1998-2001').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Sonata IV (EF) 1998-2001').should('be.visible');
      cy.get('._1PRn').contains('Sonata').click();
      cy.get('._3Txt').contains('Sonata NF c 2005 г.').click();
      cy.get('._1PRn').contains('Sonata NF c 2005 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Sonata NF c 2005 г.').should('be.visible');
      cy.get('._1PRn').contains('Sonata').click();
      cy.get('._3Txt').contains('Sonata V (NEW EF) c 2001 г.').click();
      cy.get('._1PRn').contains('Sonata V (NEW EF) c 2001 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Sonata V (NEW EF) c 2001 г.').should('be.visible');
      cy.get('._1PRn').contains('Sonata').click();
      cy.get('._3Txt').contains('Sonata VI c 2010 г.').click();
      cy.get('._1PRn').contains('Sonata VI c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Sonata VI c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Sonata').click();
      cy.get('._3Txt').contains('Sonata VII (LF) 2014 – н.в.').click();
      cy.get('._1PRn').contains('Sonata VII (LF) 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Sonata VII (LF) 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Starex', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._2qTd').contains('Starex').click();
      cy.get('._3Txt').contains('Grand Starex c 2007 г.').click();
      cy.get('._1PRn').contains('Grand Starex c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Grand Starex c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Starex').click();
      cy.get('._3Txt').contains('Starex H1 1997-2007').click();
      cy.get('._1PRn').contains('Starex H1 1997-2007').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Starex H1 1997-2007').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Starex (H-1)', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Starex (H-1)').click();
      cy.get('._3Txt').contains('Starex (H-1) II 2007 – н.в.').click();
      cy.get('._1PRn').contains('Starex (H-1) II 2007 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Starex (H-1) II 2007 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Terracan', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Terracan').click();
      cy.get('._3Txt').contains('Terracan c 2001 г.').click();
      cy.get('._1PRn').contains('Terracan c 2001 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Terracan c 2001 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Tiburon', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Tiburon').click();
      cy.get('._3Txt').contains('Tiburon 1996-1999').click();
      cy.get('._1PRn').contains('Tiburon 1996-1999').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Tiburon 1996-1999').should('be.visible');
      cy.get('._1PRn').contains('Tiburon').click();
      cy.get('._3Txt').contains('Tiburon II (GK) 2003 – 2009').click();
      cy.get('._1PRn').contains('Tiburon II (GK) 2003 – 2009').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Tiburon II (GK) 2003 – 2009').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Trajet', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Trajet').click();
      cy.get('._3Txt').contains('Trajet c 2000 г.').click();
      cy.get('._1PRn').contains('Trajet c 2000 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Trajet c 2000 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Tucson', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Tucson').click();
      cy.get('._3Txt').contains('Tucson 2004-2010').click();
      cy.get('._1PRn').contains('Tucson 2004-2010').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Tucson 2004-2010').should('be.visible');
      cy.get('._1PRn').contains('Tucson').click();
      cy.get('._3Txt').contains('Tucson II 2011-2015').click();
      cy.get('._1PRn').contains('Tucson II 2011-2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Tucson II 2011-2015').should('be.visible');
      cy.get('._1PRn').contains('Tucson').click();
      cy.get('._3Txt').contains('Tucson III 2015 – н.в.').click();
      cy.get('._1PRn').contains('Tucson III 2015 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Tucson III 2015 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Veloster', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Veloster').click();
      cy.get('._3Txt').contains('Veloster c 2011 г.').click();
      cy.get('._1PRn').contains('Veloster c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Veloster c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('Veracruz', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('Veracruz').click();
      cy.get('._3Txt').contains('Veracruz 2006 – 2015').click();
      cy.get('._1PRn').contains('Veracruz 2006 – 2015').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai Veracruz 2006 – 2015').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('XG', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('XG').click();
      cy.get('._3Txt').contains('XG 1998-2005').click();
      cy.get('._1PRn').contains('XG 1998-2005').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai XG 1998-2005').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('i10', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('i10').click();
      cy.get('._3Txt').contains('i10 c 2007 г.').click();
      cy.get('._1PRn').contains('i10 c 2007 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai i10 c 2007 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('i20', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('i20').click();
      cy.get('._3Txt').contains('i20 IB 2014 – н.в.').click();
      cy.get('._1PRn').contains('i20 IB 2014 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai i20 IB 2014 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('i20').click();
      cy.get('._3Txt').contains('i20 PB 2008 - 2014').click();
      cy.get('._1PRn').contains('i20 PB 2008 - 2014').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai i20 PB 2008 - 2014').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('i30', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('i30').click();
      cy.get('._3Txt').contains('i30 I 2007-2012').click();
      cy.get('._1PRn').contains('i30 I 2007-2012').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai i30 I 2007-2012').should('be.visible');
      cy.get('._1PRn').contains('i30').click();
      cy.get('._3Txt').contains('i30 II 2011 – 2017').click();
      cy.get('._1PRn').contains('i30 II 2011 – 2017').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai i30 II 2011 – 2017').should('be.visible');
      cy.get('._1PRn').contains('i30').click();
      cy.get('._3Txt').contains('i30 III 2017 – н.в.').click();
      cy.get('._1PRn').contains('i30 III 2017 – н.в.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai i30 III 2017 – н.в.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('i40', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('i40').click();
      cy.get('._3Txt').contains('i40 c 2011 г.').click();
      cy.get('._1PRn').contains('i40 c 2011 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai i40 c 2011 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('ix20', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('ix20').click();
      cy.get('._3Txt').contains('ix20 c 2010 г.').click();
      cy.get('._1PRn').contains('ix20 c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai ix20 c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('ix35/Tucson', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('ix35/Tucson').click();
      cy.get('._3Txt').contains('ix35/Tucson c 2010 г.').click();
      cy.get('._1PRn').contains('ix35/Tucson c 2010 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai ix35/Tucson c 2010 г.').should('be.visible');
      cy.get('._1PRn').contains('Hyundai').click(); // Возвращаемся к марке
})

     it('ix55', function() {
      cy.get('._3Txt').contains('Все модели').click();
      cy.get('._1Cqj').contains('ix55').click();
      cy.get('._3Txt').contains('ix55 c 2008 г.').click();
      cy.get('._1PRn').contains('ix55 c 2008 г.').should('be.visible');
      cy.get('#root > div > div.TjJL > div > div > div > div._2OVU').contains('Hyundai ix55 c 2008 г.').should('be.visible');
})
})