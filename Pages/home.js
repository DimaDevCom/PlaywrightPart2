const{expect} = require('@playwright/test');

exports.HomePage = class HomePage{
  /**
   * @param {import {'playwright'}.Page} page
   */

  constructor(page){
    this.page = page;
    this.url = 'https://www.demoblaze.com/';
    this.loginButton = page.locator('#login2');
    this.usernameLabel = page.locator('#nameofuser');
}

async open() {
    await this.page.goto(this.url);
}

async clickLogin(){
    await this.loginButton.click();
}

}