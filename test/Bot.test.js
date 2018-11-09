let expect = require("chai").expect;
let Bot = require("../lib/bot");

describe("Bot", function () {

    it('should class exist', function () {
        expect(Bot).to.be.a('function')
    });


    it('should be get client', function () {
        let bot;
        bot = new Bot("xxxxxxxxx");

        expect(bot.getClient()).to.be.a('Object');
    });

    it('should be get token', function () {
        let bot;
        bot = new Bot("xxxxxxxxx");

        expect(bot.getToken()).to.be.equal('xxxxxxxxx');
    });

    it.skip('should is a promise returned by function login', function (done, none) {
        let bot;
        bot = new Bot("xxxxxxxxx");

        expect(bot.login()).to.be.a("promise").notify(done);
    });

});