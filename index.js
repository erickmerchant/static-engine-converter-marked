var marked = require('marked');
var Promise = require('es6-promise').Promise;

module.exports = function (settings) {

    if (settings) {

        marked.setOptions(settings);
    }

    return function (page) {

        return new Promise(function(resolve, reject){

            page.content = marked(page.content);
            
            resolve(page);
        });
    };
};
