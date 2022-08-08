const expectchai = require('chai').expect
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
        
        // save screenshot

        // build file path
        var filePath = screenshotPath + time  + '.png';
        await browser.pause(2000)
        browser.saveScreenshot(filePath);


        
        await browser.$(ELEMENT.username).setValue(DATA.USER_CMS['pass']);

        await browser.$(ELEMENT.loginBtn).click();


        console.log("Title Bilgisi ******* "+await browser.getTitle())
       /*  await browser.pause(2000)
        const dropdown=  await $("(//*[(@type='search')])[3]")
       // await dropdown.selectByAttribute("value","text")
        await browser.pause(2000)
        await dropdown.click()
        //await dropdown.selectByVisibleText("MAC Gold")
        //await dropdown.selectByIndex(5)
        await browser.pause(2000)
        console.log("**********************************"+await dropdown.getValue())

 */
        await (await $("#usersSearchInput")).setValue("hakan tektaş")
        await browser.pause(2000)
        await (await $("#userSearchButton")).isDisplayed()
        await (await $("#userSearchButton")).click()
        await browser.pause(2000)
        //await (await $("(//*[(@id='tableDetailButton')])[1]")).waitForClickable({timeout:3000});
        //Radiobuttons handling with JavaScript Array logic in WebDriverIO
      /*  const elem = await $$("button")
        const selectElem = elem[16]
        await selectElem.click()
        */

        //Handling Web Pop ups with WebDriverIO Framework

        const ddown = await $("(//*[(@type='search')])[1]")
        ddown.setValue("Sonlandırılmış")
        await browser.pause(2000)
        console.log("*********************** GET VALUE*********"+" : "+await ddown.getValue())
        expectchai(await ddown.getValue()).to.equal("Sonlandırılmış")


        await (await $("(//*[(@class='btn btn btn-outline-default mr-2')])[1]")).click()
        const modal = await $("(//*[(@class='modal-content')])[1]")
       // await modal.waitForDisplayed()
        console.log("*********"+" :  "+ await modal.waitForDisplayed())
       // await expect(modal).toBeDisplayed()
        console.log("*********"+" :  "+ await expect(modal).toBeDisplayed())
       
        await $("(//*[(@class='close-button')])[1]").click() 
       // await $$("")[0].$("").isSelected()

        


        
    });
});


