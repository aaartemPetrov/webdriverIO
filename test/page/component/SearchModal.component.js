const { searchModalLocator } = require('../../resources/data');
const { switchToFrame } = require('../../utility/helper');
const TimeConstant = require('../../resources/TimeConstant');
const SearchedProduct = require('./SearchedProduct.component.js');

class SearchModal {

    static get searchModalLocator() {
        return searchModalLocator;
    }

    get searchInput() {
        return $('div.search__bar input[class*=search]');
    }

    get foundedProducts() {
        return $$(SearchedProduct.locator);
    }

    async isProductTitlesContain(text) {
        await this.switchToFrame();
        await browser.waitUntil(async () => await this.foundedProducts.length > 0, { timeout: TimeConstant.COMPONENT_LOADED });  
        await this.foundedProducts.map(async (element) => {
            return await expect(element.$(SearchedProduct.titleLinkLocator)).toHaveTextContaining(text);
        })
    }

    async typeSearchInput(string) {
        await this.searchInput.setValue(string);
    }

    async switchToFrame() {
        await switchToFrame(SearchModal.searchModalLocator, TimeConstant.COMPONENT_LOADED);
    }

    async sendEnterButton() {
        await this.switchToFrame();
        TimeConstant.COMPONENT_LOADED = 1000000;
        console.log(TimeConstant.COMPONENT_LOADED);
        await browser.pause(TimeConstant.SMALL_TIMEOUT);
        await browser.keys('\uE007');
    }

}

module.exports = new SearchModal();