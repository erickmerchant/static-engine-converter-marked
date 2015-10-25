var converter = require('./index.js')()
var marked = require('marked')
var tap = require('tap')

tap.test('should process content as markdown using marked', function (t) {
  converter([{
    file: 'test.txt',
    content: '#A test\ntesting [test](test.com) *test*'
  }], function (err, pages) {
    t.equal(null, err)
    t.deepEqual(pages[0].content, marked('#A test\ntesting [test](test.com) *test*'))

    t.end()
  })
})
