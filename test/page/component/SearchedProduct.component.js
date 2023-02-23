const locator = 'div.result__item'
const titleLinkLocator = locator + ' a[class*=title]';
const priceSpanLocator = locator + ' a[class*=price]';
const comparisonCheckboxLocator = locator + ' input[class*=checkbox]';



module.exports = class SearchedProduct {

    static get locator() {
        return locator;
    }

    static get titleLinkLocator() {
        return titleLinkLocator;
    }

    static get priceSpanLocator() {
        return priceSpanLocator;
    }

    static get comparisonCheckboxLocator() {
        return comparisonCheckboxLocator
    }

    set titleLink(element) {
        this.titleLink = element;
    }

    set priceSpan(element) {
        this.priceSpan = element;
    }

    set comparisonCheckbox(element) {
        this.comparisonCheckbox = element;
    }

    get titleLink() {
        return this.titleLink;
    }

    get priceSpan() {
        return this.priceSpan;
    }

    get comparisonCheckbox() {
        return this.comparisonCheckbox;
    }

}
