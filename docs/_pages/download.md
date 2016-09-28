---
title: Download
theme: theme--blue
header:
  title: "Download Groundhog"
---


## Get Groundhog

You can simply <a href="/download/groundhog-v{{sitedata.package.version}}.zip" id="download-link" download >download Groundhog CSS and JS files</a> and include them into your pages.

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

Coming soon



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
