

describe('Watches suit', () => {
    it('Check watches banner', async () => {
        await browser.url("https://ebay.com/");
        let shoppingByCategoriesDropdownButton = await $('#gh-shop-a');
        let watchesCategoryButton = await $('#gh-sbc-o li a[href*="Watches-Parts-Accessories"]');
        await expect(shoppingByCategoriesDropdownButton).toBeClickable();
        await shoppingByCategoriesDropdownButton.click();
        await browser.waitUntil(() => watchesCategoryButton.isClickable(), 5000);
        await watchesCategoryButton.scrollIntoView();
        await watchesCategoryButton.click();
        await expect(browser).toHaveUrlContaining('Watches-Parts-Accessories');
        let handeWatchesCategoryImageLink = await $('a.b-guidancecard__link[href*="Watches/"]');
        await expect(handeWatchesCategoryImageLink).toBePresent();
        let handeWatchesHref = await handeWatchesCategoryImageLink.getAttribute('href');
        expectChai(handeWatchesHref).to.equal('https://by.ebay.com/b/Watches/260325/bn_7117208191');
        await handeWatchesCategoryImageLink.click();
        await expect(browser).toHaveUrl(handeWatchesHref);
    });
});

