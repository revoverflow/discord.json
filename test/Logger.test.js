let expect = require("chai").expect;
let Logger = require("../lib/logger");

describe("Logger", function () {

    it('should class exist', function () {
        expect(Logger).to.be.a('function')
    });

});