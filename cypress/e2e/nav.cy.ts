// describe('Navbar Testing', () => {
//     beforeEach(() => {
//       cy.visit("http://localhost:3000");
//     });
  
//     it('should display Home link', () => {
//       cy.get('[data-cy="Portfolio"]').contains('Home').should('be.visible');
//     });
  
//     it('should navigate to Home page when Home link is clicked', () => {
//       cy.get('[data-cy=""]').contains('Home').click();
//       // Tambahkan asserstion atau tindakan selanjutnya untuk memverifikasi bahwa halaman Home telah terbuka
//     });

// });

describe('Navbar', () => {
    const NavBar = ['Home','About','Education','Experience','Contact'];
  
    NavBar.forEach(item => {
      it(`should display ${item} link`, () => {
        cy.visit("http://localhost:3000");
        cy.get("#navbar a").contains(item).click ();
        cy.get("#navbar a").contains(item).click();
        cy.wait(2000);
      });
    });
    });
  describe("contact test", () => {
    it("go to the success page when the from id filled and the button is clicked", () => {
      cy.visit("http://localhost:3000")
      cy.get("#name").type("Juliantari");
      cy.get("#email").type("juliantari2320@gmail.com");
      cy.get("#massage").type("Hi,juli");
      cy.get('[data-cy="submit"]').click();
    });
  })