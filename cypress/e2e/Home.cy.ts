describe("visit home", ()=>{
    it("should auto scroll to home section", ()=>{
        cy.visit("http://localhost:3000")
        cy.get("li a").contains('Home').click();

    });
  })