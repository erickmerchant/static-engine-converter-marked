var converter = require('../index.js')();
var marked = require('marked');
var assert = require('assert');

describe('plugin', function(){

    it('should process content as markdown using marked', function(done){

        converter([{file: 'test.txt', content: "#A test\ntesting [test](test.com) *test*"}], function(err, pages){

            assert.deepEqual(pages[0].content, marked("#A test\ntesting [test](test.com) *test*"));

            done();
        });
    });
});
