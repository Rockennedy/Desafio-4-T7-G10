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
            cy.get('[for="usuario"]').type(alidUser.usuario);  // Preenche o campo de email
            cy.get('[for="senha"]').type(senha); // Preenche o campo de senha
            cy.get('button[type="submit"]').click(); // Clica no botão de login
            
            // Verifica se o redirecionamento
            cy.contains('Lista de Produtos').should('be.visible');
          });
        });
      
/*         it('Deve mostrar erro ao tentar login com credenciais inválidas', () => {
          cy.fixture('user').then((user) => {
            cy.get('input[name="usuario"]').type(user.invalidUser.email);   // Preenche o email inválido
            cy.get('input[name="senha"]').type(user.invalidUser.password);  // Preenche a senha inválida
            cy.get('button[type="submit"]').click();                        // Clica em "Entrar"
            
            // Verifica se a mensagem de erro aparece
            cy.contains('Usuário e/ou senha inválidos').should('be.visible');
          });
        });
      
        it('Deve impedir login com campos em branco', () => {
          cy.get('button[type="submit"]').click(); // Tenta submeter o formulário sem preencher os campos
          
          // Verifica se as mensagens de erro de validação aparecem
          cy.contains('E-mail é obrigatório').should('be.visible');
          cy.contains('Senha é obrigatória').should('be.visible');
        });
      
        it('Deve mostrar erro para e-mail com formato inválido', () => {
          cy.get('input[name="usuario"]').type('emailinvalido');  // Insere um e-mail com formato inválido
          cy.get('input[name="senha"]').type('admin');           // Insere uma senha válida
          cy.get('button[type="submit"]').click();               // Tenta logar
          
          // Verifica se a mensagem de erro é exibida
          cy.contains('E-mail inválido').should('be.visible');   // Supondo que o sistema retorne erro de formato inválido
        });
      
        it('Deve permitir logout após login bem-sucedido', () => {
          cy.fixture('user').then((user) => {
            cy.get('input[name="usuario"]').type(user.validUser.email);  // Preenche o campo de email
            cy.get('input[name="senha"]').type(user.validUser.password); // Preenche o campo de senha
            cy.get('button[type="submit"]').click();                     // Clica no botão de login
            
            // Verifica se o redirecionamento para o dashboard ocorre
            cy.url().should('include', '/dashboard');
            cy.contains('Produtos').should('be.visible');
      
            // Realiza o logout
            cy.get('a[href="/logout"]').click();  // Supondo que exista um botão ou link para logout
            
            // Verifica se redireciona para a página de login
            cy.url().should('include', '/login');
          });
        });
      
        it('Deve bloquear login após múltiplas tentativas falhas', () => {
          cy.fixture('user').then((user) => {
            for (let i = 0; i < 5; i++) { // Simula 5 tentativas de login falhas
              cy.get('input[name="usuario"]').type(user.invalidUser.email); // Insere email inválido
              cy.get('input[name="senha"]').type(user.invalidUser.password); // Insere senha inválida
              cy.get('button[type="submit"]').click();                      // Tenta logar
              cy.get('input[name="usuario"]').clear();  // Limpa os campos para a próxima tentativa
              cy.get('input[name="senha"]').clear();
            }
            
            // Verifica se o sistema bloqueia o usuário após várias tentativas falhas
            cy.contains('Usuário temporariamente bloqueado').should('be.visible');
          });
        }); */
      });
      

/*     it('Quando realizo Login com Credenciais Válidas', () => {
        cy.get('').type('');

    });
    it('Quando realizo Login com Nome de Usuário Inválido', () => {

    });
    it('Quando realizo Login com Senha Inválida', () => {

    });
    it('Quando realizo Login com Campos Vazios', () => {

    }); 
    it('Quando realizo Login com Apenas Nome de Usuário Preenchido', () => {

    });
    it('Quando realizo Login com Apenas Senha Preenchida', () => {

    }); */
});