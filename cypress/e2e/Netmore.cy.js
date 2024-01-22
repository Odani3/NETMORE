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
      cy.contains('a', 'Vendas').click();
      
      cy.contains('div', 'Selecione o Cliente').find('input').first().type('Cleinte  1')
      cy.contains('Cleinte 1').click();
  
      //cy.contains('button', 'BUSCAR PRODUTOS').click().wait(340);
      //cy.contains('path, data-testid="CheckBoxOutlineBlankIcon"').click({force:true})
      //cy.get('[type="checkbox"]').first().check({force:true})
      //cy.get('"PrivateSwitchBase-input css-1m9pwf3"').click()
      //cy.get('[data-testid="CheckBoxOutlineBlankIcon"]').click();

      //cy.get('[id="deliveryCost"]').type(preçoEntrega) (outro jeiot de fazer)
      cy.get('input[name="deliveryCost"').type(preçoEntrega)
      cy.contains('div', 'Tipo de Desconto').find('input').first().type('$').type('{downarrow}').type('{enter}')
      //cy.contains('%').click(); (pra fazre com porcentagem)

      cy.get('[id="discountAmount"]').type(desconto)
      cy.get('[id="notes"]').type('Notas')

      cy.contains('div', 'Recebido por').find('input').first().type('Henrique').type('{downarrow}').type('{enter}');

      cy.get( ).invoke('text').then((texto) => {
        cy.get('[id="mui-73"]').type(texto);
      });
      






  })

})






