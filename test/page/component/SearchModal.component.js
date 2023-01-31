const Key = require('webdriverio').Key;

class SearchModal {

    constructor() {
        this.frameLocator = 'iframe.modal-iframe';
    }

    get searchInput() {
        return $('div.search__bar input[class*=search]');
    }

    async typeSearchInput(string) {
        await this.searchInput.setValue(string);
    }

    async sendEnterButton() {
        const iframe = await $(this.frameLocator);
        await browser.waitUntil(() => iframe.isExisting());
        await browser.switchToFrame(iframe);
        await browser.pause(1000);
        await browser.keys('\uE007'); 
    }

}

module.exports = new SearchModal();