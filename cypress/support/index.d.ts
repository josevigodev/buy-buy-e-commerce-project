/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByData(
      selector: string,
      timeout?: number
    ): Chainable<JQuery<HTMLElement>>;
  }
}

declare namespace Cypress {
  interface Chainable {
    loginByFirebase(): void;
  }
}
