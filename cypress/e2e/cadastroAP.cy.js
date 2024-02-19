
// Gera um número inteiro aleatório entre min (inclusive) e max (inclusive)
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // Gera um valor inteiro entre 0 e 100
  var quantidade = gerarNumeroAleatorio(0, 40);
  var compraBrutaA = gerarNumeroAleatorio(30, 60);
  var preçoVarejoA = gerarNumeroAleatorio(61, 80);
  var preçoMinimoA = gerarNumeroAleatorio(90, 120);
  
  
  // Gera um valor inteiro entre 0 e 10C
  var compraBruta = gerarNumeroAleatorio(80,100)
  var preçoVarejo = gerarNumeroAleatorio(180, 220);
  var preçoMinimo = gerarNumeroAleatorio(290, 330);
  var preçoParcelado = gerarNumeroAleatorio(380, 416);
  var identificador = gerarNumeroAleatorio (100, 1000000)
    var identificador1 = gerarNumeroAleatorio (100, 1000000)
    var identificador2 = gerarNumeroAleatorio (100, 1000000)
    var identificador3 =gerarNumeroAleatorio (100, 1000000)


    const rede = 'NTW 11'     
    const fornecedores = "Supl 10"
    const fabricantes = "Fabri 11 "
    const modelos = "Models 8"
    const cores = "cores 7"
    const tipoProdutos = "Typ 7"
    const capacidade = '7gigaByte'
    const países  = 'Country 8'
      const abv = "8"
    const condição = 'Condittion 9'
    const origemClientes = "Origem 11"


  
  describe('Casatro Produtos', () => {
    beforeEach(() => {
        cy.visit('https://d38wo1dad687y7.cloudfront.net/sales')
    })
  
  it('cadastro_de_produtos',()=>{
          //login('henrique.odani@gmail.com','qwe123','Loja do Henrique')
          cy.get('[id="email"]').type('henrique.odani@gmail.com');
          cy.get('[id="password"]').type('qwe123');
          cy.get('[id="mui-2"]').type("Loja do Henrique").wait(300);
          cy.contains('Loja do Henrique').click();
          cy.contains('button', 'LOGIN').click();
  
  
          cy.contains('span','Cadastro').click({force:true}).wait(220);
          cy.contains('span','Produtos').click({force:true});
          cy.url().should('include','/products')
          cy.contains('p','Produtos');
          cy.get('input[placeholder="Pesquisar"]').should('be.enabled');
          //cy.contains('Todas as lojas').dblclick();
          cy.contains('span','Adicionar produto').click({force:true}).wait(1000);
          cy.contains('Fabricante *').click({force:true}).wait(700).type('sam').wait(750);
          cy.contains('li','Samsung').click({force:true});
          cy.get(':nth-child(2) > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Ta').wait(750);
          cy.contains('Tablets').click({force:true});
          cy.get(':nth-child(2) > :nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Mod').wait(750);
          cy.contains('li','Model 3').click({force:true});
          cy.get(':nth-child(3) > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Supp').wait(750);
          cy.contains('li','Supplier 1').click({force:true});
          cy.get('input[placeholder="DD/MM/YYYY"]').type('08092023').wait(1000);
          cy.get(':nth-child(3) > :nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('henr');
          cy.contains('li','Henrique').click({force:true});
          cy.get(':nth-child(4) > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Blac').wait(500);
          cy.contains('li','Black').click({force:true});
          cy.get(':nth-child(4) > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Networ');
          cy.contains('Network 4').click({force:true});
          cy.contains('div','Loja *').type('loja do henrique').type('{downarrow}').type('{enter}');
          cy.get(':nth-child(4) > :nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('25').wait(500).type('{downarrow}').wait(350).type('{enter}')
          cy.get(':nth-child(5) > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Condition 3').wait(500).type('{downarrow}').wait(350).type('{enter}');
          cy.get('#notes').type('notas').click({force:true});
          cy.get('#status').click({force:true}).wait(750);
          cy.get('li[data-value="1"]').dblclick({force:true});
          cy.get(':nth-child(4) > :nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('25').wait(250).type('{downarrow}').wait(350).type('{enter}');
          cy.contains('div','Tipo de identificador').type('im').type('{downarrow}').type('{enter}').wait(200);
          cy.get('[data-testid="AddCircleIcon"]').click().click().click()
          cy.get('[name="identifier.0.serial"]').type(identificador)   
            cy.get('[name="identifier.1.serial"]').type(identificador1) 
            cy.get('[name="identifier.2.serial"]').type(identificador2)
            cy.get('[name="identifier.3.serial"]').type(identificador3)       
          cy.get('#purchaseGross').wait(500).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type(compraBruta);
          cy.get('#retailPrice').wait(500).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type(preçoVarejo);
          cy.get('input[name="minAskPrice"]').wait(500).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type(preçoMinimo);
          cy.get('#installmentPrice').wait(500).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type(preçoParcelado);
          cy.contains('span','SALVAR').click({force:true}).wait(300)
          cy.contains(identificador).should('be.visible')
      })

      it('cadastro_de_acessórios',()=>{
        cy.get('[id="email"]').type('henrique.odani@gmail.com');
        cy.get('[id="password"]').type('qwe123');
        cy.get('[id="mui-2"]').type("Loja do Henrique").wait(300);
        cy.contains('Loja do Henrique').click();
        cy.contains('button', 'LOGIN').click();
        
        cy.contains('button', 'menu').click();
        cy.contains('span','Cadastro').click({force:true}).wait(220);
        cy.contains('span','Acessórios').click({force:true});
        cy.url().should('include','/accessories')
        cy.contains('p','Acessórios');
        cy.get('input[placeholder="Pesquisar"]').should('be.enabled');
        cy.contains('Todas as lojas').dblclick();
        cy.contains('button','Adicionar Acessório').click({force:true}).wait(1000);
        cy.contains('Fabricante *').click({force:true}).wait(700).type('Sa').wait(750);
        cy.contains('li','Samsung').click({force:true});
        cy.get('#type').click({force:true}).wait(750);
        cy.get('li[data-value="Acessórios"]').click({force:true});
        cy.contains('Modelo *').click({force:true}).wait(500).type('Mod').wait(750);
        cy.contains('li','Modelo Henrique').click({force:true});
        cy.contains('Fornecedor *').click({force:true}).wait(500).type('Supp').wait(750);
        cy.contains('li','Supplier 1').click({force:true});
        cy.get('input[placeholder="DD/MM/YYYY"]').type('08092023').wait(1000);
        cy.contains('Comprado por *').click({force:true}).wait(750).type('Henr');
        cy.contains('li','Henrique').click({force:true});
        cy.contains('Cor *').click({force:true}).wait(750).type('Blac').wait(500);
        cy.contains('li','Black').click({force:true});
        cy.get('#status').click({force:true}).wait(750);
        cy.get('li[data-value="Na loja"]').dblclick({force:true});
        cy.get('.MuiGrid-spacing-xs-2 > :nth-child(11)').within(()=>{
            cy.get('input').type('Loja do H').wait(750).type('{downarrow}').wait(200).type('{enter}');
        });
        cy.get('input[name="quantity"]').type(quantidade)
        cy.contains('span','Gerar').click({force:true});
        cy.get('#purchaseGross').type(compraBrutaA);
        cy.get('#retailPrice').type(preçoVarejoA)
        cy.get('#minAskPrice').type(preçoMinimoA)
        cy.contains('span','SALVAR').click({force:true}).wait(2500);
        cy.url().should('include','/accessories').wait(1200)
      
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
