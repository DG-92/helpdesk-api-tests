Cypress.Commands.add('criarUsuario', (usuario) => {
  return cy.request({
    method: 'POST',
    url: '/users',
    body: usuario,
    failOnStatusCode: false
  });
});

Cypress.Commands.add('criarTicket', (ticket) => {
  return cy.request({
    method: 'POST',
    url: '/tickets',
    body: ticket,
    failOnStatusCode: false
  });
});
