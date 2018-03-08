let request = require("request");
let should = require("should");
let expect = require("chai").expect;
let base_url = "https://swapi.co/api";
let util = require("util");


describe('Test that return luke', function(){
    it('returns luke', function(done){
        request.get({url: base_url+ '/people/2/' },
            function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
            done();
            });
    });

});

describe('Test that return c-3P0', function(){
    it('returns c-3P0', function(done){
        request.get({url: base_url+ '/people/2/' },
            function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });

});

