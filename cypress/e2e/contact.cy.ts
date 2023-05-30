///<reference types="Cypress" />


describe("contact test", () => {
  // it("error when all input bpx blank", () => {
  //   cy.visit("http://localhost:3000")
  //   cy.get('[data-cy="submit"]').click();
  //   cy.get('[data-cy="error-name"]').should("exist");
  //   cy.get('[data-cy="error-email"]').should("exist");
  //   cy.get('[data-cy="error-message"]').should("exist");
  // });
  it("go to the success page when the from id filled and the button is clicked", () => {
    cy.visit("http://localhost:3000")
    cy.get("#name").type("Juliantari");
    cy.get("#email").type("juliantari2320@gmail.com");
    cy.get("#massage").type("Hi,juli");
    cy.get('[data-cy="submit"]').click();
  });
})