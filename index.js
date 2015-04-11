var marked = require('marked')

module.exports = function (settings) {
  if (settings) {
    marked.setOptions(settings)
  }

  return function (pages, done) {
    pages.forEach(function (page) {
      page.content = marked(page.content)
    })

    done(null, pages)
  }
}
