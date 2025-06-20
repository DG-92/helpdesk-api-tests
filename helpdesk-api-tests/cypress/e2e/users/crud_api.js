describe('Users CRUD - API', () => {
  let userId;

  it('Deve criar um novo usuário', () => {
    cy.criarUsuario({ name: 'John Doe', email: 'john.doe@example.com' }).then((response) => {
      expect(response.status).to.eq(201);
      userId = response.body.id;
    });
  });

  it('Deve buscar todos os usuários', () => {
    cy.request('/users').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
    });
  });

  it('Deve buscar um usuário pelo ID', () => {
    cy.request(`/users/${userId}`).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it('Deve atualizar um usuário', () => {
    cy.request('PUT', `/users/${userId}`, { name: 'Jane Doe', email: 'jane.doe@example.com' }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it('Deve deletar um usuário', () => {
    cy.request('DELETE', `/users/${userId}`).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});
