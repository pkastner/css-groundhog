---
layout: components_icons.hbs
meta:
  title: "Breadcrumbs"
  description: "A breadcrumb bar component for Dynatrace styled web entities with css and markup examples."
  keywords: "breadcrumbs, structure, hierarchy, Dynatrace, groundhog, css component"
---


## Introduction
The Groundhog **breadcrumbs bar** component is a visual way to display the hierarchy path to the page currently viewed by the user. The links inside the breadcrumbs bar help the user navigate and put the currently viewed page into context.


## Including the breadcrumbs bar
Breadcrumbs extend the basic html `<ul>` (unordered list) elements to introduce semantic structure into the markup of the breadcrumbs.
1. To include a Groundhog breadcrumbs bar first create a `<ul>` (unordered list) element and include the hierarchy into individual `li` (list items). List items can either contain `<a>` (anchors) or `<span>` (inline span element). Usually the last entry in the breadcrumbs is not represented by an anchor element, since it should represent the currently viewed page.
```html
<ul>
  <li>
    <a href='/'>Home</a>
  </li>
  <li>
    <span>Solutions</span>
  </li>
</ul>
```
2. Add the necessary Groundhog classes to the elements class attributes:
```html
<ul class="breadcrumbs">
  <li class="breadcrumbs__item">
    <a class="breadcrumbs__link" href='/'>Home</a>
  </li>
  <li class="breadcrumbs__item">
    <span class="breadcrumbs__last">Solutions</span>
  </li>
</ul>
```
3. Add a wrapping div with a [theme class][themeClass] to set the theme (optional):
```html
<div class="theme--purple">
  <ul class="breadcrumbs">
    ...
  </ul>
</div>
```


## Available themes for breadcrumbs

The default theme for the breadcrumb is `turquoise`, other available themes are:

| class name | theme color |
|------------|--------|
| `.theme--blue` | Base class blue theme |
| `.theme--purple` | Base class purple theme |
| `.theme--green` | Base class green theme |
| `.theme--royalblue` | Base class royalblue theme  |



[themeClass]: #available-themes-for-breadcrumbs
