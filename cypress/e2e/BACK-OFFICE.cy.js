    const rede = 'NTW 10'     
    const fornecedores = "Supl 9"
    const fabricantes = "Fabri 10 "
    const modelos = "Models 7"
    const cores = "cores 6"
    const tipoProdutos = "Typ 6"
    const capacidade = '6gigaByte'
    const países  = 'Country 7'
      const abv = "7"
    const condição = 'Condittion 8'
    const origemClientes = "Origem 10"

//Faz alguma coisa pra checar se o nome sa existe

describe('Página de login', () => {

  beforeEach(() => {
      cy.visit('https://d38wo1dad687y7.cloudfront.net/sales')
  })

  

      it('Deve preencher os campos do formulário corretamente e realizar login', () => {
        
       //Login 
       cy.get('[id="email"]').type('henrique.odani@gmail.com');
       cy.get('[id="password"]').type('qwe123');
       cy.get('#mui-2').type("Loja do Henrique")
       cy.contains('Loja do Henrique').click();
       cy.contains('button', 'LOGIN').click()
     
       //Redes 
       cy.contains('button', 'menu').click();
       cy.contains('a','Configuração').click();
       cy.contains('a','Redes').click();
       cy.contains('button','Adicionar rede').click()
       cy.get('[id="name"]').type(rede)
       cy.contains('button','Confirmar').click().wait(300)
       cy.contains(rede).should('be.visible')

     //  cy.contains(rede).click()
     //  cy.get('.MuiGrid-container > :nth-child(1) > .MuiFormControl-root > label').click();
     //  cy.contains('button','Confirmar').click();
     //  cy.get('span','Listar inativos').click()
     //  cy.contains(rede).should('be.visible');


 
       //Fornecedores 
       cy.contains('button', 'menu').click();
       cy.contains('a','Configuração').click();
       cy.contains('a','Fornecedores').click()
       cy.contains('button','Adicionar fornecedor').click()
       cy.get('[id="name"]').type(fornecedores)
       cy.contains('div', 'Nome do país').type('chi').type('{downarrow}').type('{enter}');
       cy.contains('button','Confirmar').click().wait(300)
       cy.contains(fornecedores).should('be.visible')
        
       

       //Fabricantes
       cy.contains('button', 'menu').click();
       cy.contains('a','Configuração').click();
       cy.contains('a','Fabricantes').click()  
       cy.contains('button','Adicionar fabricante').click()
       cy.get('[id="name"]').type(fabricantes)
       cy.contains('button','Confirmar').click().wait(600)
 
       

       //Cores 
       cy.contains('button', 'menu').click();
       cy.contains('a','Configuração').click();
       cy.contains('a','Cores').click()  
       cy.contains('button','Adicionar cor').click()
       cy.get('[id="name"]').type(cores)
       cy.contains('button','Confirmar').click({force:true})
       cy.contains(cores).should('be.visible')
        
    


      //Tipos de Produtos
       cy.contains('button', 'menu').click();
       cy.contains('a','Configuração').click();
       cy.contains('a','Tipos de Produtos').click()
       cy.contains('button','Adicionar tipo de produto').click({force:true})
       cy.get('[id="name"]').type(tipoProdutos)
       cy.contains('button','Confirmar').click({force:true}).wait(1000)

       //coloca depois do tipo de produtos pra poder usar os const e validar se ta sendo valido 
       //Modelos 
       cy.contains('button', 'menu').click();
       cy.contains('a','Configuração').click();
       cy.contains('a','Modelos').click()  
       cy.contains('button','Adicionar modelo').click()
       cy.get('[id="name"]').type(modelos)
       cy.contains('div','Nome do fabricante').click().wait(300).type('{downarrow}').type('{enter}');
       cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('{downarrow}').type('{enter}')
       cy.contains('button','Confirmar').click().wait(300)
       cy.contains(modelos).should('be.visible')

       //Capacidade 
       cy.contains('button', 'menu').click();
       cy.contains('a','Configuração').click();
       cy.contains('a','Capacidade').click()  
       cy.contains('button','Adicionar capacidade').click()
       cy.get('[id="name"]').type(capacidade).wait(200)
       cy.contains('button','Confirmar').click({force:true}).wait(300)
       cy.contains(capacidade).should('be.visible').wait(200)

       //Países
       cy.contains('button', 'menu').click();
       cy.contains('a','Configuração').click();
       cy.contains('a','Países').click()  
       cy.contains('button','Adicionar país').click()
       cy.get('[id="name"]').type(países).wait(200)
       cy.contains('div','Abreviação do país').type(abv)
       cy.contains('button','Confirmar').click({force:true})
       cy.contains(países).should('be.visible').wait(200)

       //Condição/Categorias
       cy.contains('button', 'menu').click();
       cy.contains('a','Configuração').click();
       cy.contains('a','Condições').click()  
       cy.contains('button','Adicionar Condição/Categoria').click()
       cy.get('[id="name"]').type(condição).wait(200)
       cy.contains('button','Confirmar').click({force:true}),
       cy.contains(condição).should('be.visible').wait(200)

      //Origem dos Clientes
      cy.contains('button', 'menu').click();
      cy.contains('a','Configuração').click();
      cy.contains('a','Origem dos Clientes').click()  
      cy.contains('button','Adicionar origem de clientes').click()
      cy.get('[id="name"]').type(origemClientes).wait(200)
      cy.contains('button','Confirmar').click({force:true})
      cy.contains(origemClientes).should('be.visible').wait(200)



      })
      })