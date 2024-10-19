context('Dado que irei', () => {
    beforeEach(() => {
        cy.visit('/');       
    });
    describe('Testes de Login na Lojinha Web', () => {

        beforeEach(() => {
          cy.visit('/login'); // Acessa a página de login antes de cada teste
        });
      
        it('Deve fazer login com credenciais válidas', () => {
          cy.fixture('user').then((user) => {
            cy.get('[for="usuario"]').type(user.validUser.usuario);  // Preenche o campo de email
            cy.get('[for="senha"]').type(user.validUser.senha); // Preenche o campo de senha
            cy.get('button[type="submit"]').click(); // Clica no botão de login
            
            // Verifica se o redirecionamento
            cy.contains('Lista de Produtos').should('be.visible');
          });
        });
      
        it('Deve mostrar erro ao tentar login com credenciais inválidas', () => {
          cy.fixture('user').then((user) => {
            cy.get('[for="usuario"]').type(user.invalidUser.usuario);   // Preenche o email inválido
            cy.get('[for="senha"]').type(user.invalidUser.senha);  // Preenche a senha inválida
            cy.get('button[type="submit"]').click();                        // Clica em "Entrar"
            
            // Verifica se a mensagem de erro aparece
            cy.get('.toast').should('be.visible');
          });
        });
      
        it('Deve impedir login com campos em branco', () => {
          cy.get('button[type="submit"]').click(); // Tenta submeter o formulário sem preencher os campos
          
          // Verifica se as mensagens de erro de validação aparecem
          cy.get('.toast').should('be.visible');
        });
      
        it('Deve mostrar erro para e-mail com formato inválido', () => {
          cy.get('[for="usuario"]').type('emailinvalido');  // Insere um e-mail com formato inválido
          cy.get('[for="senha"]').type('admin');           // Insere uma senha válida
          cy.get('button[type="submit"]').click();               // Tenta logar
          
          // Verifica se a mensagem de erro é exibida
          cy.get('.toast').should('be.visible');   // Supondo que o sistema retorne erro de formato inválido
        });
      });
});