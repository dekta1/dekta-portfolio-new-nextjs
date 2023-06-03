describe("visit education", ()=>{
    it("should auto scroll to education section", ()=>{
        cy.visit('http://localhost:3000')
        cy.get('li a').contains('Education').click();
        
    })
})