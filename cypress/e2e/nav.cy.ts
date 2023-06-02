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
      });
    });
  });