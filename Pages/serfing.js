const{expect} = require('@playwright/test');

exports.SearchPage = class SearchPage{
  /**
   * @param {import {'playwright'}.Page} page
   */

  constructor(page){
    this.page = page;
    this.url = 'https://www.demoblaze.com/';
    this.homeurl = 'https://www.demoblaze.com/index.html';
    this.laptopsButton = page.locator('#itemc');
    this.addMac = page.locator('.col-lg-4 col-md-6 mb-4');
    this.addCard = page.locator('.col-sm-12 col-md-6 col-lg-6');
    this.addHP = page.locator('#nava');
  }

async open() {
    await this.page.goto(this.url);
}

async clickButton(){
    await this.laptopsButton.click();
}
async clickButtonOnLaptops(){
    await this.addMac.click();
}
async clickButtonOnCard(){
    await this.addCard.click();
}
async clickButtonOnHomePage(){
    await this.addHP.click();
}


}