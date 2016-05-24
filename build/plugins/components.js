const globby        = require('globby');
const path          = require('path');
const matter        = require('gray-matter');
const fs            = require('fs');

const capitalizeFirstLetter = require('../util/capitalizeFirstLetter');

module.exports = () => (files, metalsmith, done) => {
  /*
  * components Plugin
  */
  return globby('**/README.md', { cwd: path.resolve(metalsmith._directory, 'src')})
    .then((componentSources) => {
      var componentFiles = {};
      componentSources.forEach((component) => {
        var componentFile = {
          title: capitalizeFirstLetter(path.dirname(component))
        };

        /*
        * read README.md file and and fsStats
        */
        const parsed = matter(fs.readFileSync(path.resolve(metalsmith._directory, 'src', component)).toString());
        componentFile.stats = fs.statSync(path.resolve(metalsmith._directory, 'src', component));
        componentFile.data = parsed.data;
        componentFile.type = 'component';
        componentFile.layout = parsed.data.layout || 'component_overview.hbs';
        componentFile.contents = new Buffer(parsed.content);

        /*
        * read Samples and append to content
        */
        componentFile.samples = globby
          .sync('**.*', {cwd: path.resolve(metalsmith._directory, 'src', path.dirname(component), 'samples')})
          .filter(sample => path.extname(sample) === '.html')
          .map(sample => {
            var fileContent = fs.readFileSync(path.resolve(metalsmith._directory, 'src', path.dirname(component), 'samples', sample)).toString();
            return {
              name: sample,
              code: fileContent
            };
          });

        /*
        * Map content
        */
        componentFiles['components/' + path.dirname(component) + '.md'] = componentFile;
      });
      return componentFiles;
    })
    .then(componentFiles => {
      files = Object.assign(files, componentFiles);
    })
    .then(done);
}
