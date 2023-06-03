describe("visit experience",() => {
    it("should auto scroll to experience section", () => {
        cy.visit("http://localhost:3000")
        cy.get('li a').contains('Experience').click();

    })
})