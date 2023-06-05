describe('Button Testing', () => {
    it('should click the button', () => {
      cy.visit("http://localhost:3000");
      cy.get("button#ButtonContact").click();
      cy.wait(3000)
      cy.get("#name").type("Juliantari");
      cy.get("#email").type("juliantari2320@gmail.com");
      cy.get("#massage").type("Hi,juli");
      cy.get('[data-cy="submit"]').click();
      


    });
  });