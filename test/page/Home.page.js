const header = require("./component/Header.component");
const Page = require("./page");

class HomePage extends Page {
    
    get getHeader() {
        return header;
    }

}

module.exports = new HomePage();