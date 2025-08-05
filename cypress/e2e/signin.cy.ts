describe('user login journey', () => {
  it('should be able to sign in', () => {
    cy.visit('http://localhost:3000');
    cy.loginByFirebase();
    cy.getByData('signin-link').contains('Hello josevigodev@gmail.com!');
  });
});
