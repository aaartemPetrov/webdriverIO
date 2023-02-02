const Key = require('webdriverio').Key;
const { searchModalLocator } = require('../../resources/data');
const { switchToFrame } = require('../../utility/helper');
const TimeConstant = require('../../resources/TimeConstant');

class SearchModal {

    constructor() {
        this.searchModalLocator = searchModalLocator;
    }

    get searchInput() {
        return $('div.search__bar input[class*=search]');
    }

    async typeSearchInput(string) {
        await this.searchInput.setValue(string);
    }

    async sendEnterButton() {
        switchToFrame(this.searchModalLocator, TimeConstant.COMPONENT_LOADED);
        TimeConstant.COMPONENT_LOADED = 1000000;
        console.log(TimeConstant.COMPONENT_LOADED);
        await browser.pause(TimeConstant.SMALL_TIMEOUT);
        await browser.keys('\uE007'); 
    }

}

module.exports = new SearchModal();