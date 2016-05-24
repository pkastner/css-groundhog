var highlight = require('highlight.js')

module.exports = (object, language) => highlight.highlight(language, object).value;
