var ELEMENT = {

    searchTXT        : "#twotabsearchtextbox",
    searchBTN        : "#nav-search-submit-button",
    resulTXT         : "#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12",
    appleCheckbox    : "//*[@id='p_89/Apple']/span/a/div/label/i",
    searchTXT        : "#twotabsearchtextbox",
    sortingBtn       : "#a-autoid-0",
    sortingHighToLow : "#a-popover-2 > div > div > ul > li:nth-child(3)",
    sortingDefaultTxt: "//*[@id='a-autoid-0-announce']",
    sortingChangeTxt : "//*[@id='a-autoid-2-announce']"
};

var url = "https://www.amazon.com";



describe('My Login application', () => {
    it('Search case-2', async () => {
        
       /*
        #id
        .classname

       */

        await browser.url(url);
        browser.maximizeWindow();
        await browser.$(ELEMENT.searchTXT).setValue("iphone 13 Pro Max");
        await browser.$(ELEMENT.searchBTN).click();
        console.log("***************** Search RESULT ************  " + await $(ELEMENT.resulTXT).getProperty("outerText"))

        await browser.$(ELEMENT.appleCheckbox).click();
        await browser.$(ELEMENT.sortingBtn).click();
        console.log("***************** Sorting DEFAULT TEXT ************** " + await $(ELEMENT.sortingDefaultTxt).getProperty("textContent"));
        
        await browser.waitUntil(
            async() => (await $("//*[@id='s-result-sort-select_2']").getProperty("innerText")) === "Price: High to Low",
            {
                timeout : 5000,
                timeoutMsg : "Element bulunamadı"       
            }
        );
        var elem = await $(ELEMENT.sortingHighToLow);
        await elem.waitForDisplayed({timeout:2500});
        await elem.click();
        
        await browser.pause(10000)
        console.log("***************** Sorting HİGHT TO LOW TEXT ************** " + await $(ELEMENT.sortingChangeTxt).getProperty("textContent"));
        
    });
});


