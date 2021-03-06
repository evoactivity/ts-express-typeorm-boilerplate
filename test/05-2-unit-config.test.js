var { PassportConfiguration } = require(process.cwd() + '/dist/config/passport.config');
var expect = require('chai').expect;

describe("Units tests", function () {
  
  before(function (done) { done(); });
  
  after(function () {});

  describe("Passport", function() {

    it("jwt() next with false if user not found", function(done) {
      PassportConfiguration.jwt({ sub: 0 }, function(error, result) {
        expect(error).is.null;
        expect(result).is.false;
        done();
      });
    });

    it("jwt() next with error if error occurrs", function(done) {
      PassportConfiguration.jwt({ alter: 0 }, function(error, result) {
        expect(error).is.not.null;
        expect(result).is.false;
        done();
      });
    });

  });

});