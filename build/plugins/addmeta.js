const path = require('path');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

module.exports = (file, key) => (files, metalsmith, done) => {
  if (!file) {
    throw Error('No file specified');
  }
  if (!key) {
    throw Error('No key specified');
  }
  metalsmith._metadata.sitedata =  metalsmith._metadata.sitedata || {};
  metalsmith._metadata.sitedata[key] = {};
  fs.readFileAsync(path.resolve(metalsmith._directory, file))
    .then(data => data.toString())
    .then(data => JSON.parse(data))
    .then(json => { Object.assign(metalsmith._metadata.sitedata[key], json); })
    .then(done);
}
