class Header {
   
    get searchInput() { return $('input[class*=search]'); }

    async typeSearchInput(string) {
        await this.searchInput.setValue(string);
    }

}

module.exports = new Header();