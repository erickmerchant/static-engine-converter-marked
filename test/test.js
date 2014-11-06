var converter = require('../index.js')();
var marked = require('marked');
var assert = require('chai').assert;

describe('plugin', function(){

    it('should process content as markdown using marked', function(done){

        converter('test.txt', {content: "#A test\ntesting [test](test.com) *test*"}, function(file, page, next){

            assert.deepEqual(page.content, marked("#A test\ntesting [test](test.com) *test*"));

            done();
        });
    });
});
