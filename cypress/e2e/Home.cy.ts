describe("navbar Home test", () => {
    
    it("", () => {
        cy.visit("http://localhost:3000")
        cy.get("li a").contains('Home').click();

    });
  })