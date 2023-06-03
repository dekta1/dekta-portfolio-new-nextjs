describe("visit contact", () => {
    it('should auto scroll to contact section',() => {
        cy.visit('http://localhost:3000')
        cy.get('#Contact').contains('Contact').click();
    })

})