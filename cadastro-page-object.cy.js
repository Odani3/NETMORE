import Cadastro from '../support/pages/cadastro/pagina-cadastro';

describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    }) 
            
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            // cy.get('[data-test="register"]').click();
            // cy.get('[data-test="email"]').type('catarina@1235jh.com.br');
            // cy.get('input[data-test="fullName"]').type('Catarina Bela');
            // cy.get('input[data-test="registerUserName"]').type('catarina');
            // cy.get('input[data-test="registerPassword"]').type('catarina123456');
            // cy.get('[data-test="btnRegister"]').click();
            Cadastro.acessarPaginaDeCadastro()
            Cadastro.preencherFormulario()
            Cadastro.submeterCadastro()
        
        })
               
  
  })