// Gera um número inteiro aleatório entre min (inclusive) e max (inclusive)
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gera um valor inteiro entre 0 e 100
var quantidade = gerarNumeroAleatorio(0, 40);
var compraBruta = gerarNumeroAleatorio(30, 60);
var preçoVarejo = gerarNumeroAleatorio(61, 80);
var preçoMinimo = gerarNumeroAleatorio(90, 120);

  
describe('Casatro Acessorio', () => {
  beforeEach(() => {
      cy.visit('https://d38wo1dad687y7.cloudfront.net/sales')
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
  cy.get('#purchaseGross').type(compraBruta);
  cy.get('#retailPrice').type(preçoVarejo)
  cy.get('#minAskPrice').type(preçoMinimo)
  cy.contains('span','SALVAR').click({force:true}).wait(2500);
  cy.url().should('include','/accessories').wait(1200)

})

})