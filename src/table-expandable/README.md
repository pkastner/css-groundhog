---
layout: components_icons.hbs
meta:
  title: "Expandable Table"
  description: "An expandable table component for Dynatrace styled web entities with css and markup examples."
  keywords: "expandable, table, Dynatrace, groundhog, css component"
---

## Introduction
The Groundhog **expandable table** is an extension of a basic table and can be used to represent data and related detailed information (if available) in a separate row. By clicking the trigger-link (`.expandable__trigger`) the expandable content appears.

## Including an expandable table
An expandable table is an extension of a basic table.
1. To use expandable rows in a table mark the table as expandable by adding the `.table--expandable` class to the table element.
```html
<table class="table table--expandable">
  ...
</table>
```
2. An expandable row and the related detailed content are grouped by a `tbody` element. Place the trigger-link in the first row and the expandable content in the second one within a `td` element that extends over all columns. There can be any number of `tbody` elements inside a table.
```html
<table class="table table--expandable">
  ...
  <tbody class="expandable">
    <tr>
      ...
      <td><a href="#" class="expandable__trigger">more</a></td>
    </tr>
    <tr class="expandable__content">
      <td colspan="5">
        Expandable content...
      </td>
    </tr>
  </tbody>
</table>
```
3. When the content is expanded by clicking the trigger-link, an `.is-expanded` class is added to the expandable table row.
```html
...
  <tr class="expandable__content is-expanded">
    <td colspan="5">
      Expandable content...
    </td>
  </tr>
...
```
4. To use another theme color (see below) add a wrapping `div` with the according [theme class][themeClass] (optional):
```html
<div class="theme--green">
  <table class="table table--expandable">
    ...
  </table>
</div>
```

## Available themes for expandable table

The default theme for the expandable table is `purple`, other available themes are:

| class name | theme color |
| ------------- | ------------- |
| `.theme--blue` | Base class blue theme |
| `.theme--royalblue` | Base class royalblue theme |
| `.theme--green` | Base class green theme |

[themeClass]: #available-themes-for-expandable-table
