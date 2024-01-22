    const rede = 'network 10'     
    const fornecedores = "Suplier 23"
    const modelos = "Modelo 23"
    const cores = "color 2"
    const tipoProdutos = "Tipo 8 "
    const capacidade = '1gb'
    const países  = 'Colombia'
    const condição = 'Condition 2'
    const origemClientes = "Sc 3"


describe('Página de login', () => {

  beforeEach(() => {
      cy.visit('https://d38wo1dad687y7.cloudfront.net/sales')
  })

  

  it('Deve preencher os campos do formulário corretamente e realizar login', () => {
      
      const preçoEntrega = Math.floor(Math.random() * 21);
      const desconto = Math.floor(Math.random() * 11);

      cy.get('[id="email"]').type('henrique.odani@gmail.com');
      cy.get('[id="password"]').type('qwe123');
      cy.get('#mui-2').type("Loja do Henrique")
      cy.contains('Loja do Henrique').click();
      cy.contains('button', 'LOGIN').click();

      cy.contains('button', 'menu').click();
      cy.get
      cy.contains('a','Redes').click()
      cy.contains('button','Adicionar Rede').click()
      cy.get('[id="name"]').type(rede)
      cy.contains('button','confirmar').click().wait(300)
      cy.contains(rede).should('be.visible')

      cy.contains('a','Fornecedores').click()
      cy.contains('button','Adicionar fornecedor').click()
      cy.get('[id="name"]').type(fornecedores)
      cy.get('[id="mui-68"]').type('Brazil').type('{downarrow}').type('{enter}');
      cy.contains('button','confirmar').click().wait(300)
      cy.contains(fornecedores).should('be.visible')


      cy.get('#name').type()


      })
      })