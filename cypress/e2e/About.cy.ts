describe("visit about", ()=>{
    it("should auto scroll to about section", ()=>{
        cy.visit('http://localhost:3000')
        cy.get('li a').contains('About').click()
    })
})