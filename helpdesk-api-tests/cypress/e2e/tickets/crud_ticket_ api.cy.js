describe('API - Tickets CRUD', () => {
  let ticketId;

  it('Deve criar um novo ticket', () => {
    cy.criarTicket({ userId: 1, description: 'Internet not working' }).then((res) => {
      expect(res.status).to.eq(201);
      ticketId = res.body.id;
    });
  });

  it('Deve buscar um ticket pelo ID', () => {
    cy.request(`/tickets/${ticketId}`).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it('Deve atualizar o status do ticket', () => {
    cy.request('PUT', `/tickets/${ticketId}`, { status: 'In Progress' }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it('Deve deletar o ticket', () => {
    cy.request('DELETE', `/tickets/${ticketId}`).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});
