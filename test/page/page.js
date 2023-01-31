module.exports = class Page {
    async open(path) {
       return await browser.url(browser.options.baseUrl + path);
    }
}