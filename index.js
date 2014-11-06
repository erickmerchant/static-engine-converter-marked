var marked = require('marked');

module.exports = function (settings) {

    if (settings) {

        marked.setOptions(settings);
    }

    return function (file, page, next) {

        page.content = marked(page.content);

        return next(file, page);
    };
};
