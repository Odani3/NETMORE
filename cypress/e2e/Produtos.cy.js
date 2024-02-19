



describe('Página de login', () => {
  
  beforeEach(() => {
      cy.visit('https://d38wo1dad687y7.cloudfront.net/sales')   
  })

it('cadastro_de_produtos',()=>{
  cy.get('[id="email"]').type('henrique.odani@gmail.com');
      cy.get('[id="password"]').type('qwe123');
      cy.get('#mui-2').type("Loja do Henrique")
      cy.contains('Loja do Henrique').click();
      cy.contains('button', 'LOGIN').click();

  cy.contains('span','Cadastro').click({force:true}).wait(220);
  cy.contains('span','Produtos').click({force:true});
  cy.url().should('include','/products')
  cy.contains('p','Produtos');
  cy.get('input[placeholder="Pesquisar"]').should('be.enabled');
  //cy.contains('Todas as lojas').lclick();
  cy.contains('span','Adicionar produto').click({force:true}).wait(1000);
  cy.contains('Selecione o fabricante*').click({force:true}).wait(700).type('sam').wait(750);
  cy.contains('li','Samsung').click({force:true});
  cy.get(':nth-child(2) > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Ta').wait(750);
  cy.contains('Tablets').click({force:true});
  cy.get(':nth-child(2) > :nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Mod').wait(750);
  cy.contains('li','Model 3').click({force:true});
  cy.get(':nth-child(3) > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Supp').wait(750);
  cy.contains('li','Supplier 1').click({force:true});
  cy.get('input[placeholder="DD/MM/YYYY"]').type('08092023').wait(1000);
  cy.get(':nth-child(3) > :nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Henr');
  cy.contains('li','Henrique').click({force:true});
  cy.get(':nth-child(4) > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Blac').wait(500);
  cy.contains('li','Black').click({force:true});
  cy.get(':nth-child(4) > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Networ');
  cy.contains('Network 4').click({force:true});
  cy.get(':nth-child(4) > :nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('25').wait(500).type('{downarrow}').wait(350).type('{enter}')
  cy.get(':nth-child(5) > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Condition 3').wait(500).type('{downarrow}').wait(350).type('{enter}');
  cy.get('#notes').type('notas');
  cy.get('.css-1i8dzhp > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click({force:true});
  cy.contains('Código de barras').click({force:true});
  
  cy.get('#status').click({force:true}).wait(750);
  cy.get('li[data-value="1"]').dblclick({force:true});
  cy.get(':nth-child(4) > :nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('25').wait(250).type('{downarrow}').wait(350).type('{enter}');
  //cy.contains('256gb').click({force:true});
  cy.get('#mui-40').type('IMEI').type('{downarrow}').wait(350).type('{enter}');
  cy.get('[data-testid="AddCircleIcon"]').click(5)
  cy.get('#purchaseGross').wait(500).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type(`${chance.natural({min:1500,max:2000})}.80`);
  cy.get('#retailPrice').wait(500).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type(`${chance.natural({min:2000,max:2500})}.50`);
  cy.get('input[name="minAskPrice"]').wait(500).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type(`${chance.natural({min:2500,max:3000})}.1`);
  cy.get('#installmentPrice').wait(500).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type('{leftarrow}').wait(200).type(`${chance.natural({min:3000,max:3500})}.08`);
  cy.contains('span','Confirmar').click({force:true});
  
})
})
