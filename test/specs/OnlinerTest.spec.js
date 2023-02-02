const homePage = require("../page/Home.page") 
const searchModal = require("../page/component/SearchModal.component");

describe('Onliner suit', () => {

    it('Check open home page test', async () => {
       await homePage.open();
       await homePage.getHeader.typeSearchInput('Samsung');
       await searchModal.sendEnterButton();
       await browser.pause(10000);
    })

    xit('js test', () => {
        let test;
        let arr = [1,2,3,4,5,6];
        arr.filter(element => element === 5).map(element => test = element);
        console.log(test);
    });

});