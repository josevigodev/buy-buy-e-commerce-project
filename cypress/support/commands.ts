/// <reference types="cypress" />

Cypress.Commands.add('getByData', (selector, timeout = 0) => {
  return cy.get(`[data-test='${selector}']`, { timeout: timeout });
});

Cypress.Commands.add('loginByFirebase', () => {
  cy.visit('/log-in');
  cy.getByData('email-input').focus().type('josevigodev@gmail.com');
  cy.getByData('password-input').focus().type('Pro2800*');
  cy.getByData('confirm-button').click();
  cy.contains('BUY-BUY', { timeout: 50000 }).should('exist');
  cy.getByData('signin-link', 50000).contains('Hello!');
});
