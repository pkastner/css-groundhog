---
layout: component_overview.hbs
meta:
  title: "Switch"
  description: "A switch component for Dynatrace styled web entities with css and markup examples."
  keywords: "switch, form, toggle, Dynatrace, groundhog, css component"
---


## Introduction
The Groundhog **switch** component visually enhances the standard html `<input type="checkbox">` element. A switch consists of a small circle which indicates a boolean on/off state of the element. It is typically accompanied by a descriptive text (also known as label) next to it.  

## Including the checkbox component
1. To include a checkbox component into your project, first create the `<input type="checkbox">` and `<label>` elements:
```html
<input type="checkbox" />
<label>
  <span>Label text</span>
</label>
```
2. To add the visual enhancements of Groundhog, add the necessary classes to the elements class attributes:
```html
<input class="switch" type="checkbox" />
<label class="switch__label">
  <span class="switch__caption">Label text</span>
</label>
```
3. To link the label with the checkbox, connect them via the `id` and the `for` attributes. This will add the ability to toggle the value of the switch by clicking on the label. This enhances usability especially in mobile, where click areas are a key.
```html
<input class="switch" type="checkbox" id="switch-id-01" />
<label class="switch__label" for="switch-id-01">
  <span class="switch__caption">Label text</span>
</label>
```

## Additional attributes for the checkbox
| attribute name | effect |
|------------|--------|
| `checked` | Will enable the checkbox by default |
| `disabled` | Sets the checkbox as disabled |



## A note to Groundhog switches

The switch needs `input` and `label` elements to work properly. Classes and styling is not applicable
to other elements.
