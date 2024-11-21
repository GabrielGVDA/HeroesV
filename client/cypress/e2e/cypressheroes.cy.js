import 'cypress-file-upload'
import dataUser from '../fixtures/dataUser.json'
import LoginUser from '../pages/loginUser' 

const loginUser = new LoginUser()

describe('CypressHeroes', () => {
  it('login - user', () => {
    loginUser.accessLoginUser()
    loginUser.loginWithUser(dataUser.LoginUllser.username, dataUser.LoginUllser.password)
    }) 
  it('createNewHero', () => {
    loginUser.accessLoginUser()
    loginUser.createNewHero(dataUser.CreateNullewHero.username, dataUser.CreateNullewHero.password, dataUser.CreateNullewHero.TextWo, dataUser.CreateNullewHero.priceNu, dataUser.CreateNullewHero.fansNu, dataUser.CreateNullewHero.savesNu)
  })
  it('saves, fans', () => {
    loginUser.accessLoginUser()
    loginUser.saveFans(dataUser.SavesNullFans.username, dataUser.SavesNullFans.password)
    // cy.visit('localhost:3000');
    // cy.get('li > .undefined').click();
    // cy.get("[type='email']").type('admin@test.com');
    // cy.get("[type='password']").type('test123');
    // cy.get("[novalidate=''] .undefined'").click();
    // cy.get("[data-cy='like']").click({ multiple: true });
    // cy.get("[data-cy='money']").click({ multiple: true, force: true });
  });
});

