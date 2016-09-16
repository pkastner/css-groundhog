const highlight = require('highlight.js');
const cheerio = require('cheerio');

const highlightElem = (el, $) => {
  const html = $(el).text();
  const lang = $(el).attr('class').replace(/lang-(.*)/, '$1');
  $(el).html(highlight.highlight(lang, html).value);
}

module.exports = () => (files, metalsmith, done) => {
  Object.keys(files).forEach(file => {
    const data = files[file].contents.toString();
    const $ = cheerio.load(data);
    $('[class*="lang-"]').each((i, el) => highlightElem(el, $));
    files[file].contents = new Buffer($.html());
  });
  done();
};
