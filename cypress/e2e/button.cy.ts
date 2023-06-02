describe('Button Testing', () => {
    it('should click the button', () => {
      cy.visit("http://localhost:3000");
      cy.get("button#ContactButton").click()
      


    });
  });