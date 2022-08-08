const expectchai = require('chai').expect
const {DATA} = require('../../test-settings.js');


var ELEMENT = {

    username         : "#loginUsernameInput",
    password         : "#loginPasswordInput",
    loginBtn         : "#loginSubmitButton",
    clubDetail       : "(//*[@id='tableDetailButton'])[1]",
    appleCheckbox    : "//*[@id='p_89/Apple']/span/a/div/label/i",
    searchTXT        : "#twotabsearchtextbox",
    sortingBtn       : "#a-autoid-0",
    sortingHighToLow : "#a-popover-2 > div > div > ul > li:nth-child(3)",
    sortingDefaultTxt: "//*[@id='a-autoid-0-announce']",
    sortingChangeTxt : "//*[@id='a-autoid-2-announce']",
    
};
var url = "https://testapi.macfit.com.tr/login";
var url2 = "https://testapi.macfit.com.tr/clubs";
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


        await browser.$(ELEMENT.password).setValue(DATA.USER_CMS['pass']);

        await browser.$(ELEMENT.loginBtn).click();


        console.log("Title Bilgisi ******* "+await browser.getTitle())
        await browser.pause(2000)
        await browser.url(url2);

        await browser.$(ELEMENT.clubDetail).click()

        await browser.$("(//*[@class='choose-services'])[1]").scrollIntoView()
        const elem = $$("(//*[@type='checkbox'])")
        await elem[0].click()
        await elem[5].click()
        await browser.pause(2000)
        console.log("selected11111 ******* "+ await elem[0].isSelected())
        console.log("selected22222 ******* "+ await elem[5].isSelected())
        await browser.pause(2000)
        await browser.$("(//*[contains(text(),'NuSpa')])[1]").click()
        console.log("selected11111 ******* "+await elem[0].isSelected())
        await browser.pause(5000)


/*
        await (await $("#usersSearchInput")).setValue("hakan tektaş")
        await browser.pause(2000)
        await (await $("#userSearchButton")).isDisplayed()
        await (await $("#userSearchButton")).click()
        await browser.pause(2000)

        await $("(//*[(@type='search')])[1]").setValue("Sonlandırılmış")
        await browser.pause(5000)
        let items =await $$("(//*[(@class='vs__search')])[1]")

        for (var i=0 ; i < await items.length;i++ )
           {

                if (await items[i].getText()=== "Sonlandırılmış") 
                {

                    await items[i].click()
                    await browser.pause(5000)
                    await console.log("SUCCESS***********1222233")
                }
                else{
                    await console.log("failedd***********1222233")
                }

           }
        */
        
    });
    
});


