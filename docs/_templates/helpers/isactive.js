module.exports = (context, path, baseclass) => {
  const crumbs = context.breadcrumb_path;
  if (!crumbs) {
    return;
  }
  const containing = crumbs.filter((bc) => {
    return bc.path === path;
  });
  if(containing.length > 0 ) {
    return baseclass+'--active';
  } else {
    return '';
  }
};
