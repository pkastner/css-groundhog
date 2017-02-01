---
title: Download
theme: theme--blue
header:
  title: "Download Groundhog"
---

## Get Groundhog

You can simply <a href="//assets.dynatrace.com/groundhog/v{{sitedata.package.version}}/download/groundhog-v{{sitedata.package.version}}.zip" id="download-link" download >download Groundhog CSS and JS files</a> and include them into your pages.

To use the files put the CSS into the `<head>` of your page like this:
```html
<link rel="stylesheet" href="main.css" />
```

And include the JS at the end of the `<body>` tag of your page:

```html
<body>
... all your content

<script type="text/javascript" src="main.js"></script>
</body>
```

## CDN usage

We uploaded everything to our Dynatrace CDN, use it like that:

CSS goes in the `<head>`
```html
<link rel="stylesheet" href="//assets.dynatrace.com/groundhog/v{{sitedata.package.version}}/css/main.css" />
```

JS goes at the end of the `<body>` tag of your page:

```html
<body>
... all your content

<script type="text/javascript" src="//assets.dynatrace.com/groundhog/v{{sitedata.package.version}}/js/main.js"></script>
</body>
```

## Install via npm

Groundhog is available on npm:

```
npm install --save @dynatrace/groundhog
```

## Custom component builds

Coming soon


<script>
var dl = document.getElementById('download-link');
if(dl) {
  dl.addEventListener('click', function(e) {
    try{
      window.ga('send', 'event', 'conversion', 'download', 'v{{sitedata.package.version}}');
    } catch(er) {}
  });
}
</script>
