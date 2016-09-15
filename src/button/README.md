---
layout: components_icons.hbs
meta:
  title: "Button"
  description: "A button component for Dynatrace styled web entities with css and markup examples."
  keywords: "button, Dynatrace, groundhog, css component"
---


## Introduction
The Groundhog **button** is a visual block representing an action or link on the page. The button usually holds either text or an icon representing an action.
The button can be used to make a link on a webpage more noticeable, or draw attention to an action on the page.


## Button versions
The Groundhog button appears in a two versions, each available on light and dark backgrounds:

* Primary button `btn--primary`
* Secondary button `btn--secondary`


## Including a button
1. To include a Groundhog button add either an `<a>` (anchor/link) or an `<button>` element. Include the necessary text or [icon][icon] content.
```html
<a href="#">This is a button</a>
```
2. Add the necessary Groundhog classes to the elements class attribute.
```html
<a href="#" class="btn btn--primary">This is a button</a>
```
3. The button is ready to use


## Accessibility
When using a `button` element, make sure that you at least include the `role="button"` and `type="button"` attributes to the element.


## Using Icons with Buttons
To use buttons and icons together, you need the [icon][icon] module as well as the icon component. Groundhog uses svg reference functionality to reduce load duplication of icon content.
You can find the code to use an [icon within a button here][sample-icon-with-button].

[icon]: /doc/components/icons/
[sample-icon-with-button]: #sample-02-button-primary-icon-only.html


## Available classes for button
| class name | effect |
|------------|--------|
| `.btn` | Base class for the button element |
| `.btn--primary` | Sets the button as a primary button |
| `.btn--secondary` | Sets the button as a secondary button |
| `.btn--icon` | Sets the button to an icon only state |
| `.theme--dark` | Sets the theme of the button to dark |
