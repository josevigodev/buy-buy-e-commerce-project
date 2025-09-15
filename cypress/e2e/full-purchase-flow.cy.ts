const shippingForm = [
  ['first-name', 'Jose'],
  ['last-name', 'Vigo'],
  ['location', 'Andorra'],
  ['phone', '56444056'],
  ['city', 'Jose'],
  ['state', 'Habana'],
  ['post-code', '12123'],
  ['address', 'Jose'],
];

const paymentForm = [
  ['name', 'Jose Vigo'],
  ['card-number', '4111111111111111'],
  ['cvv', '1234'],
  ['expiration-date', '12/12'],
];

describe('user login journey', () => {
  beforeEach(() => {
    cy.loginByFirebase();
  });

  it('should allow user to search, add to cart, checkout, pay, and confirm order', () => {
    // 1. Buscar producto
    cy.getByData('search-input').type('Sony{enter}');
    cy.contains('Sony').click();

    // 2. Añadir al carrito
    cy.getByData('add-to-cart-button', 10000).first().click();

    // 3. Ir al carrito y hacer checkout
    cy.visit('/cart');
    cy.getByData('checkout', 10000).click();

    // 4. Llenar shipping info
    shippingForm.forEach((item) => {
      if (item[0] === 'location') {
        cy.getByData(item[0]).select(item[1]);
        return;
      }
      cy.getByData(item[0], 10000).type(item[1]);
    });
    cy.getByData('save-button').click();

    // 5. Place order
    cy.getByData('place-order', 10000).click();

    // 6. Llenar datos de pago
    paymentForm.forEach((item) => {
      cy.getByData(item[0], 10000).type(item[1]);
    });
    cy.getByData('save-button').click();

    // 5. Confirm order
    cy.getByData('confirm-order', 10000).click();
    cy.wait(4000);

    // 7. Confirmación
    cy.url().should('include', '/order-confirmed');
    cy.contains('Order Confirmed');
  });
});
