const {DATA} = require('../../test-settings.js');
var ELEMENT = {

    username         : "#loginUsernameInput",
    password         : "#loginPasswordInput",
    loginBtn         : "#loginSubmitButton",
    appleCheckbox    : "//*[@id='p_89/Apple']/span/a/div/label/i",
    searchTXT        : "#twotabsearchtextbox",
    sortingBtn       : "#a-autoid-0",
    sortingHighToLow : "#a-popover-2 > div > div > ul > li:nth-child(3)",
    sortingDefaultTxt: "//*[@id='a-autoid-0-announce']",
    sortingChangeTxt : "//*[@id='a-autoid-2-announce']"
};
var url = "https://testapi.macfit.com.tr/login";
var screenshotPath = "/Users/mobven/webdriverIO-WebProject-Example/webdriverIO-WebProject-Example/test/saveScreenFile/";
// get current test title and clean it, to use it as file name
var time = new Date();

/*beforeEach ('url open', async () => {
    await browser.url(url);
    browser.maximizeWindow();
})*/

describe('My Login application', () => {
    it('Login with CMS', async () => {
        
       /*
        #id
        .classname

       */

       
        
        await browser.$(ELEMENT.username).setValue(DATA.USER_CMS['user']);
        await browser.waitUntil (async()=> await $(ELEMENT.username).getAttribute('type')
        ,{
            timeout : 5000,
            timeoutMsg : 'failed...'
        })
        
        // save screenshot

        // build file path
        var filePath = screenshotPath + time  + '.png';
        await browser.pause(2000)
        browser.saveScreenshot(filePath);



        
        await browser.$(ELEMENT.password).setValue(DATA.USER_CMS['pass']);

        await browser.$(ELEMENT.loginBtn).click();


        console.log("Title Bilgisi ******* "+await browser.getTitle())
        await browser.pause(2000)
        var filePath = screenshotPath + time + '.png';
        browser.saveScreenshot(filePath);
        

        await expect($("(//*[(@class='btn awbtn btn-outline-default mr-2')])[1]")).toHaveTextContaining("elle")
        await expect(browser).toHaveTitleContaining("CMS")

        await browser.pause(2000)
        await (await $("#usersSearchInput")).setValue("hakan tektaş")
        await browser.pause(2000)
        await (await $("#userSearchButton")).isDisplayed()
        await (await $("#userSearchButton")).click()
        await browser.pause(2000)
        await (await $("(//*[(@id='tableDetailButton')])[1]")).waitForClickable({timeout:3000});
        await $("(//*[(@id='tableDetailButton')])[1]").click();

        var filePath = screenshotPath + time + '.png';
        browser.saveScreenshot(filePath);
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining("1144")
        await browser.pause(2000)
       /* console.log("***************** Search RESULT ************  " + await $(ELEMENT.resulTXT).getProperty("outerText"))

        await browser.$(ELEMENT.appleCheckbox).click();
        await browser.$(ELEMENT.sortingBtn).click();
        console.log("***************** Sorting DEFAULT TEXT ************** " + await $(ELEMENT.sortingDefaultTxt).getProperty("textContent"));
        
        await browser.waitUntil(
            async() => (await $("//*[@id='s-result-sort-select_2']").getProperty("innerText")) === "Price: High to Low",
            {
                timeout : 5000,
                timeoutMsg : "hatalı değil"       
            }
        );
        var elem = await $(ELEMENT.sortingHighToLow);
        await elem.waitForDisplayed({timeout:2500});
        await elem.click();

        await browser.$(ELEMENT.sortingHighToLow).click();
        await browser.$("//*[@id='s-result-sort-select_2']").waitForDisplayed({timeout:3000});
        await browser.$("//*[@id='s-result-sort-select_2']").click();
        await browser.$("#a-popover-2 > div > div > ul > li:nth-child(3)").waitForDisplayed({timeout:3000})
        console.log("***************** Sorting HİGHT TO LOW TEXT ************** " + await $(ELEMENT.sortingChangeTxt).getProperty("textContent"));
       */ 
    });
});


