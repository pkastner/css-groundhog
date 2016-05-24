/*
* navigation plugin being stupid, flattening things
*/
module.exports = () => (files, metalsmith, done) => {
  const components = metalsmith._metadata.nav.componentsNav[0].children[0].children;
  const componentsNav = components.map(dir => dir.children[0]);
  metalsmith._metadata.nav.componentsNav = componentsNav;
  done();
}
