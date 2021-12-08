const{test,expect} = require('@playwright/test');
const{LoginPage} = require('./Pages/login');
const{HomePage} = require('./Pages/home');

  test('Login Test QA', async({page}) => {
    const user = 'usergen';
    const pass = '123';
    const url = 'https://www.demoblaze.com/';
    
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.clickLogin();

    const loginPage = new LoginPage(page);
    await loginPage.typeLogin(user);
    await loginPage.typePassword(pass);
    await loginPage.clickLogin();

    await expect(homePage.usernameLabel).toContainText(user);
    await expect(page).toHaveURL(homePage.url);
    
    const { chromium } = require('playwright');
    const v8toIstanbul = require('v8-to-istanbul');
    
    (async() => {
      const browser = await chromium.launch();
      const page = await browser.newPage();
      await page.coverage.startJSCoverage();
      await page.goto('https://www.demoblaze.com/');
      const coverage = await page.coverage.stopJSCoverage();
      for (const entry of coverage) {
        const converter = new v8toIstanbul('', 0, { source: entry.source });
        await converter.load();
        converter.applyCoverage(entry.functions);
        console.log(JSON.stringify(converter.toIstanbul()));
      }
      await browser.close();
    })();

  });