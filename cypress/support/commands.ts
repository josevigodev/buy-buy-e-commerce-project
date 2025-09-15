/// <reference types="cypress" />

Cypress.Commands.add('getByData', (selector, timeout = 0) => {
  return cy.get(`[data-test='${selector}']`, { timeout: timeout });
});

Cypress.Commands.add('loginByFirebase', () => {
  cy.visit('http://localhost:3000/log-in');
  cy.getByData('email-input').focus().type('josevigodev@gmail.com');
  cy.getByData('password-input').focus().type('Pro2800*');
  cy.getByData('confirm-button').click();
  cy.getByData('signin-link', 10000).contains('Hello!');
});
