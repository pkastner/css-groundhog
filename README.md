# Welcome to Groundhog - CSS components for Dynatrace

![Codeship status](https://codeship.com/projects/9556cd40-41e5-0134-3f7c-4aa295a04468/status?branch=master) [![npm version](https://badge.fury.io/js/%40dynatrace%2Fgroundhog.svg)](https://www.npmjs.com/package/@dynatrace/groundhog)

## What is Groundhog

This is Groundhog, a CSS library for all Dynatrace web entities. Think Bootstrap,
but pretty, modern and fast.

We created Groundhog to unify all Dynatrace web entities, regardless of the
underlying technology. Use it to fuel your Blogs, custom dashboards, Wikis, etc.
If you want to see what's possible with Groundhog, check out our [showcase](http://groundhog.dynalabs.io/doc/showcase/). We used
some, if not all Groundhog components to make them look like being one and the same.

Groundhog is designed after the contents from our [asset library](http://assets.ruxitlabs.com),
and features up to date implementations of the components there. Additionally, we created
extra modules that come in handy when working with websites and web applications: Layouts,
lightboxes, etc.

If you work in one of our GWT web applications like Ruxit or AppMon, please use the
[Dynatrace widget library](https://bitbucket.lab.dynatrace.org/projects/LIB/repos/widget-library/browse)
instead. This project is just there to be a guideline or a precursor to widgets that
find their way into GWT.

## How to get Groundhog

You have multiple options to get Groundhog:

### Use via CDN

We uploaded everything to our Dynatrace CDN, use it like that:

CSS goes in the `<head>`
```html
<link rel="stylesheet" href="//assets.dynatrace.com/groundhog/vVERSIONNUMBER/css/main.css" />
```

JS goes at the end of the `<body>` tag of your page:

```html
<body>
... all your content

<script type="text/javascript" src="//assets.dynatrace.com/groundhog/vVERSIONNUMBER/js/main.js"></script>
</body>
```

VERSIONNUMBER is the version that you want to install. Check the [website for more information](http://groundhog.dynalabs.io/doc/download/).

### Install via npm

Groundhog is available on npm:

```
npm install --save @dynatrace/groundhog
```

### Custom build

If you want to have a more advanced build, check us out on GitHub and do a plain build:

```
npm install
npm run build
```
You will then find compiled stylesheets for all the components that we got.

### Development

You can also chime in and develop with us!

```
npm install
npm run dev
```

## Font and Assets

The font we're using is called Bernina. You can find downloads for this font and
usage terms in our [asset library](http://assets.ruxitlabs.com/brand/groundhog/). If you
can't use Bernina for some reason, the open source alternative "[Open Sans](https://www.google.com/fonts/specimen/Open+Sans)" works as well.
Make sure you get the 300 and 400 font styles.

Same goes for the iconography used with Groundhog. You can find them in the asset
package available in the [asset library](http://assets.ruxitlabs.com/brand/groundhog/).

## One more thing!

Groundhog is also built with Groundhog. Who would have thought?

## Maintainers

This project is maintained by:

- Katrin Freihofner [@katrin-freihofner](https://github.com/katrin-freihofner)
- Thomas Heller [@tomheller](https://github.com/tomheller)
- Stefan Baumgartner [@ddprrt](https://github.com/ddprrt)

With contributions by:

- Sascha Zarhuber [@saschazar21](https://github.com/saschazar21)
- Lara Aigmüller [@lara-aigmueller](https://github.com/lara-aigmueller)
