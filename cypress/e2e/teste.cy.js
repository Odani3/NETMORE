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
  

        cy.get('.MuiGrid-container > :nth-child(1) > .MuiFormControl-root > label')
  })
  })