---
layout: components_icons.hbs
meta:
  title: "Tag"
  description: "A tag component for Dynatrace styled web entities with css and markup examples."
  keywords: "tag, Dynatrace, groundhog, css component"
---


## Introduction
The Groundhog **tag** is a visual block representing custom identifications. The tag component can hold text or text-delete-button combination. This text can also represent a key-value-pair.
The interactive tag is clickable and can be used as a filter.


## Tag versions
The Groundhog tag appears in a two versions:

* Text or text-delete-button tag `tag`
* Clickable tag `tag--interactive`


## Including a tag
1. To include a Groundhog tag add either an `<a>` (anchor/link), `<span>` or an `<button>` element. Include the necessary text content.
```html
<a href="#">This is a tag</a>
```
2. Add the necessary Groundhog classes to the elements class attribute.
```html
<a href="#" class="tag">This is a tag</a>
```
3. The tag is ready to use


## Accessibility
When including a `tag` element with a `<span>`, make sure that you at least include the `tagindex` attribute to the element.


## Using the delete icon with tags
To use a tag with a delete button, you need to add a button to the tab component. You can find the code to use an [button within a tag here][sample-button-within-tag].

[sample-button-within-tag]: #sample-01-tag.html


## Available classes for button
| class name | effect |
|------------|--------|
| `.tag` | Base class for the tag element |
| `.tag--interactive` | Clickable tag |
