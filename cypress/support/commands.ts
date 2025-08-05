/// <reference types="cypress" />

Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test='${selector}']`);
});

Cypress.Commands.add('loginByFirebase', () => {
  const fakeUser = {
    email: 'josevigodev@gmail.com',
  };

  cy.window().then((win) => {
    win.localStorage.setItem('testUser', JSON.stringify(fakeUser));
  });
});
