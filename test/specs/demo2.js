const expectchai = require('chai').expect
const {DATA} = require('../../test-settings.js');

var ELEMENT = {

    username         : "//*[@id='email']",
    password         : "//*[@id='password']",
    loginBtn         : "//*[@class='default block']",
    avatar           : "//*[@class='photo w-[40px]']",
    logout           : "//*[@class='logout']"
    
};
var url = "https://console.momentumsuite.com/mlive/devices";
var screenshotPath = "/Users/mobven/webdriverIO-WebProject-Example/webdriverIO-WebProject-Example/test/saveScreenFile/";
// get current test title and clean it, to use it as file name
var time = new Date();

/*beforeEach ('url open', async () => {
    await browser.url(url);
    browser.maximizeWindow();
})*/

describe('My Login application', () => {
    it('Login with MLIVE', async () => {
        
       /*
        #id
        .classname

       */

        await browser.url(url);
        await browser.$(ELEMENT.username).setValue(DATA.USER_MLIVE['user']);
        
        await browser.$(ELEMENT.password).setValue(DATA.USER_MLIVE['pass']);

        await $(ELEMENT.loginBtn).click();

        await $(ELEMENT.avatar).moveTo();
        await $(ELEMENT.avatar).click();
        await browser.pause(3000)

        await $(ELEMENT.logout).click()
        
       


        
    });
    
});


