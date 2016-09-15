---
layout: components_icons.hbs
meta:
  title: "Checkbox"
  description: "A checkbox component for Dynatrace styled web entities with css and markup examples."
  keywords: "Checkbox, form element, form, Dynatrace, groundhog, css component"
---

## Introduction
The Groundhog **checkbox** component visually enhances the standard html `<input type="checkbox">` element. A checkbox consists of a small box and a checkmark which indicates a boolean state of the element. It is typically accompanied by a descriptive text (also known as label) next to it.  

## Including the checkbox component
1. To include a checkbox component into your project, first create the `<input type="checkbox">` and `<label>` elements:
```html
<input type="checkbox">
<label>
  <span>Label text</span>
</label>
```
2. To add the visual enhancements of Groundhog, add the necessary classes to the elements class attributes:
```html
<input class="checkbox" type="checkbox">
<label class="checkbox__label">
  <span class="checkbox__caption">Label text</span>
</label>
```
3. To link the label with the checkbox, connect them via the `id` and the `for` attributes. This will add the ability to change the value of the checkbox by clicking on the label. This enhances usability especially in mobile, where click areas are a key.
```html
<input class="checkbox" type="checkbox" id="checkbox-id-01">
<label class="checkbox__label" for="checkbox-id-01">
  <span class="checkbox__caption">Label text</span>
</label>
```

## Additional attributes for the checkbox
| attribute name | effect |
|------------|--------|
| `checked` | Will enable the checkbox by default |
| `disabled` | Sets the checkbox as disabled |
