---
layout: components_icons.hbs
meta:
  title: "Radio button"
  description: "An radio button component for Dynatrace styled web entities with css and markup examples."
  keywords: "radio, input, radio button, Dynatrace, groundhog, css component"
---

## Introduction
The Groundhog **radio** component visually enhances the standard html `<input type="radio">` element. A radio element consists of a small circle and a dot which indicates a selection. Radio buttons are usually accompanied by other radio buttons with the same semantic level. They are used to indicate a single choice with multiple options.

## Including the radio button component
1. To include a checkbox component into your project, first create the `<input type="radio">` and `<label>` elements:
```html
<input type="radio">
<label>
  <span>Label text</span>
</label>
```
2. To add the visual enhancements of Groundhog, add the necessary classes to the elements class attributes:
```html
<input class="radio" type="radio">
<label class="radio__label">
  <span class="radio__caption">Label text</span>
</label>
```
3. To link the label with the checkbox, connect them via the `id` and the `for` attributes. This will add the ability to change the value of the radio button by clicking on the label. This enhances usability especially in mobile, where click areas are a key.
```html
<input class="radio" type="radio" id="radio-id-01">
<label class="radio__label" for="radio-id-01">
  <span class="radio__caption">Label text</span>
</label>
```

## Connecting radio elements together

To semantically link the radio elements and to allow only one selection in a given group, the `<input>` elements can be linked by the `name` attribute.
```html
<input class="radio" type="radio" name="selectiongroup01">
<input class="radio" type="radio" name="selectiongroup01">
<input class="radio" type="radio" name="selectiongroup01">
```

## Additional attributes for the radio button
| attribute name | effect |
|------------|--------|
| `checked` | Will select the radio element by default |
| `disabled` | Sets the checkbox as disabled |
