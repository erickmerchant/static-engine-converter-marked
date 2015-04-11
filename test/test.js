var converter = require('../index.js')()
var marked = require('marked')
var assert = require('assert')
var describe = require('mocha').describe
var it = require('mocha').it

describe('plugin', function () {
  it('should process content as markdown using marked', function (done) {
    converter([{
      file: 'test.txt',
      content: '#A test\ntesting [test](test.com) *test*'
    }], function (err, pages) {
      if (err) {
        throw err
      }

      assert.deepEqual(pages[0].content, marked('#A test\ntesting [test](test.com) *test*'))

      done()
    })
  })
})
