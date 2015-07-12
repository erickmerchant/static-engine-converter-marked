# static-engine-converter-marked

[![Dependency Status](https://david-dm.org/erickmerchant/static-engine-converter-marked.svg?style=flat-square)](https://david-dm.org/erickmerchant/static-engine-converter-marked) [![devDependency Status](https://david-dm.org/erickmerchant/static-engine-converter-marked/dev-status.svg?style=flat-square)](https://david-dm.org/erickmerchant/static-engine-converter-marked#info=devDependencies) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

This is a plugin for [static-engine](https://github.com/erickmerchant/static-engine). Traverses every object in the array and converts the __content__ with marked.

```javascript
var engine = require('static-engine')
var marked = require('static-engine-converter-marked')
var pluginA = require('plugin-a')

engine([
  pluginA,
  marked({
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })
])
```
