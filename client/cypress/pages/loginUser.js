class LoginUser {
  selectorsList() {
    return {
      userLogin: 'li > .undefined',
      userInfo: "[type='email']", 
      userPass: "[type='password']",
      createHeroInfo: "[href='/heroes/new'] .undefined",
      submitInfo: "[novalidate=''] .undefined",
      TextInput: "[type='text']", // Corrigido para adicionar o seletor TextInput
      PriceInput: "[name='price']", // Certifique-se de que todos os seletores estejam corretos
      FansInput: "[name='fans']",
      SavesInput: "[name='saves']",
      PowersInfo: "[name='powers']",
      AvatarsFile: "[data-cy='avatarFile']",
      SubmitButton: "[novalidate=''] .text-white",
      LikeInfo: "[data-cy='like']",
      MoneyInfo: "[data-cy='money']",
      YesInfo: '.gap-2 > .text-white'
    };
  }

  accessLoginUser() {
    cy.visit('/heroes');
  }

  loginWithUser(username, password) {
    cy.get(this.selectorsList().userLogin).click()
    cy.get(this.selectorsList().userInfo).type(username)
    cy.get(this.selectorsList().userPass).type(password)
    cy.get(this.selectorsList().submitInfo).click()
  }

  createNewHero(username, password, TextWo, PriceNu, FansNu, savesNu) {
    cy.get(this.selectorsList().userLogin).click()
    cy.get(this.selectorsList().userInfo).type(username)
    cy.get(this.selectorsList().userPass).type(password)
    cy.get(this.selectorsList().submitInfo).click()
    cy.get(this.selectorsList().createHeroInfo).click()
    cy.get(this.selectorsList().TextInput).type(TextWo) // Certifique-se de que o seletor esteja correto
    cy.get(this.selectorsList().PriceInput).type(PriceNu)
    cy.get(this.selectorsList().FansInput).type(FansNu)
    cy.get(this.selectorsList().SavesInput).type(savesNu)
    cy.get(this.selectorsList().PowersInfo).select(5);
    cy.get(this.selectorsList().AvatarsFile).attachFile('image.png');
    cy.get(this.selectorsList().SubmitButton).click();
  }

  saveFans(username, password){
    cy.get(this.selectorsList().userLogin).click()
    cy.get(this.selectorsList().userInfo).type(username)
    cy.get(this.selectorsList().userPass).type(password)
    cy.get(this.selectorsList().submitInfo).click()
    cy.get(this.selectorsList().LikeInfo).click({ multiple: true })
    cy.get(this.selectorsList().MoneyInfo).click({ multiple: true, force: true })
    cy.get(this.selectorsList().YesInfo).click()
  }
}

export default LoginUser; // Certifique-se de que o nome da classe esteja correto
