---
layout: components_icons.hbs
  meta:
    title: "Unordered list"
    description: "An unordered list component for Dynatrace styled web entities with css and markup examples."
    keywords: "list, unordered, structure, Dynatrace, groundhog, css component"
---

## Introduction

The Groundhog **unordered list** visually enhances the default `<ul>` list styling and nested versions. Keep in mind that the Groundhog unordered list component does not apply to default `<ul>` elements. The `.ul` class has to be specifically set on the root `<ul>` element.

## Including the unordered list component

1. To include a Groundhog unordered list add a `.ul` class to the `<ul>` tag. That's it.
```html
<ul class="ul">
  <li>first list item</li>
  <li>second list item</li>
  <li>third list item</li>
</ul>
```
2. Add a wrapping `<div>` with a [theme class][themeClass] to set the theme (optional):
```html
<div class="theme--blue">
  <ul class="ul">
    <li>first list item</li>
    <li>second list item</li>
    <li>third list item</li>
  </ul>
</div>
```

## Nested unordered lists

It is possible to nest unordered lists.
```html
<ul class="ul">
  <li>first list item</li>
  <li>
    second list item
    <ul>
      <li>first nested list item</li>
    </ul>
  </li>
</ul>
```

## Available themes for unordered lists

The default theme for the unordered list is `turquoise`, other available themes are:

| class name | theme color |
| ---------- | ----------- |
| `.theme--blue` | Base class blue theme |
| `.theme--purple` | Base class purple theme |
| `.theme--green` | Base class green theme |
| `.theme--royalblue` | Base class royalblue theme  |

[themeClass]: #available-themes-for-unordered-lists

## Additional notes

To reset list styles use the following snippet:
```css
ul {
  list-style: none;
  padding-left: 0;
}

ul li:before {
  position: absolute;
  content: none;
  margin: 0;
  padding: 0;
  display: none;
  width: auto;
  height: auto;
  float: none;
}
```
