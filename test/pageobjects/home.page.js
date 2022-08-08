

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearchKey () {
        return $('#twotabsearchtextbox');
    }

    get btnSearch () {
        return $('#nav-search-submit-button');
    }
    
    get txtResult () {
        return $("#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12");
    }
    get brandApple () {
        return $("//*[@id='p_89/Apple']/span/a/div/label/i");
    }
    get sorting () {
        return $('#a-autoid-0');
    }
    get sortingHighToLow () {
        return $("#a-popover-2 > div > div > ul > li:nth-child(3)");
    }
    
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async search (text) {
        await (await this.inputSearchKey).waitForClickable({timeout:5000});
        await this.inputSearchKey.setValue(text);
        await this.btnSearch.click();
        await this.txtResult.getText();
    }
    async result () {
        
        await this.txtResult.getText();
    }

    async filter () {
        
        await this.brandApple.click();
        await this.sorting.click();
        await this.sortingHighToLow.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
