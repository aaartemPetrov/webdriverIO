const HomePage = require("../page/Home.page")
const SearchModal = require("../page/component/SearchModal.component");
const AllureReporter = require('@wdio/allure-reporter').default;

describe('Second onliner test', () => {


    it('Check searched products titles are valid.', async () => {
        AllureReporter.addFeature('feature1111');
        AllureReporter.addEnvironment('env', 'DEV');
        AllureReporter.addArgument('arg', 'arg111111');
        AllureReporter.addDescription('descripion bla-bla-bla', 'text');
        await HomePage.open();
        await HomePage.getHeader.typeSearchInput('Samsung');
        await SearchModal.isProductTitlesContain('Samsung');
    })


})

describe('Onliner suit', () => {

    it('Check open home page test', async () => {
        AllureReporter.addLabel('label222222');
        AllureReporter.addStory('story222222')
        await HomePage.open();
        await HomePage.getHeader.typeSearchInput('Samsung');
        //await SearchModal.sendEnterButton();
    })

    it('just for error', async () => {
        AllureReporter.addSeverity('blocker');
        AllureReporter.addIssue('issue33333333')
        expectChai('1').to.equal('2');
    })

    it('js test', () => {
        AllureReporter.addSeverity('critical');
        AllureReporter.addTestId('testID444444444');
        let test;
        let arr = [1, 2, 3, 4, 5, 6];
        arr.filter(element => element === 5).map(element => test = element);
        console.log(test);
    });

});