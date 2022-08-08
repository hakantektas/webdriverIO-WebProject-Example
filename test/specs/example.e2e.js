const HomePage = require('../pageobjects/home.page');

describe('My Login application', () => {
    it('Search case', async () => {
        
        await HomePage.open();
        browser.fullscreenWindow();
        
        
        await HomePage.search('iphone 13 pro max');
        console.log("***************** Search RESULT ************  "+await HomePage.txtResult.getProperty("outerText"))
        await HomePage.filter();
    });
});


