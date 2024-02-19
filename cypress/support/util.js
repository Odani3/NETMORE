
class menuLateral {
    menu(){
     cy.contains('button', 'menu').click();
     cy.contains('a','Configuração').click();

    }
}

export default menuLateral