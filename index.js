var marked = require('marked');

module.exports = function (settings) {

    if (settings) {

        marked.setOptions(settings);
    }

    return function (page, done) {

        page.content = marked(page.content);

        done(null, page);
    };
};
