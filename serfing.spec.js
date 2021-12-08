const{test,expect} = require('@playwright/test');
const{SearchPage} = require('./Pages/serfing');



test('Search Test QA', async({page}) => {
    const url = 'https://www.demoblaze.com/';
    const homeurl = 'https://www.demoblaze.com/index.html';
    
    const searchPage = new SearchPage(page);
    await searchPage.open();
    await searchPage.clickButton();
    await searchPage.clickButtonOnLaptops();
    await searchPage.clickButtonOnCard();
    await searchPage.clickButtonOnHomePage();

    await expect(page).toHaveURL(homePage.url);


});