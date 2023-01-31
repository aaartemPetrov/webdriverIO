describe('Ebay suit', () => { 
    xit('Check opening home page', async () => {
        await browser.url('https://ebay.com/');
        expect(await browser.getUrl()).toHaveUrl('https://www.ebay.com/');
    })

    it('Check search bar is working', async () => {
        await browser.url('https://ebay.com/');
        await expect(browser).toHaveUrl('https://www.ebay.com/');
        let searchInput = await $('#gh-ac');
        let searchButton = await $('#gh-btn');

        await searchInput.setValue('Samsung');
        await expect(searchInput).toHaveValue('Samsung')
        expect(await searchButton.isClickable()).toBeClickable();
        await searchButton.click();
        await browser.waitUntil(() => searchInput.isDisplayed(), 5000);

        let searchCategory = $('#gh-cat option:first-of-type'); //or :nth-child(1)

        await expect(browser).toHaveUrlContaining('https://www.ebay.com/sch');
        await expect(searchInput).toHaveValue('Samsung');
        await expect(searchCategory).toHaveText('сотовые телефоны и смартфоны', {ignoreCase: true});
    })

})