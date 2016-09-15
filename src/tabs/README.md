---
layout: component_overview.hbs
meta:
  title: "Tabs"
  description: "A tab component for Dynatrace styled web entities with css and markup examples."
  keywords: "tabs, panes, navigation, Dynatrace, groundhog, css component"
---


## Introduction

The Groundhog **tabs** component visually enhances the standard html `<input type="radio">` or `<button>` element. Tabs usually control visibility of multiple panes, which are usually contextually related to each other. A tab contains a heading or icon, which is representative for the content of the pane it controls.

## Including the tabs component with buttons
1. To create a Groundhog **tabs** component, first create a containing `<div>` element, which holds a series of `button` elements.
```html
<div>
  <button>Tab 1</button>
  <button>Tab 2</button>
</div>
```
2. To visually enhance the buttons, add the appropriate classes to the `class` attributes of the elements:
```html
<div class="tabs">
  <button class="tab">Tab 1</button>
  <button class="tab">Tab 2</button>
</div>
```
3. Set one of the tabs active by adding `is-active` to the class attribute:
```html
<div class="tabs">
  <button class="tab is-active">Tab 1</button>
  <button class="tab">Tab 2</button>
</div>
```

## Including the tabs component with inputs
1. To create a Groundhog **tabs** component, first create a containing `<div>` element, which holds a series of `<input type="radio">` and `<label>` elements.
```html
<div>
  <input type="radio" />
  <label>Tab 1</label>
  <input type="radio" />
  <label>Tab 2</label>
</div>
```
2. To visually enhance the buttons, add the appropriate classes to the `class` attributes of the elements:
```html
<div class="tabs">
  <input class="tab__input" type="radio" />
  <label class="tab">Tab 1</label>
  <input class="tab__input" type="radio" />
  <label class="tab">Tab 2</label>
</div>
```
3. Set one of the tabs active by adding the `checked` attribute to the `<input>` element:
```html
<div class="tabs">
  <input class="tab__input" type="radio" />
  <label class="tab">Tab 1</label>
  <input class="tab__input" type="radio" checked/>
  <label class="tab">Tab 2</label>
</div>
```
4. Link the `<input>` and `<label>` elements together by adding the appropriate `id` and `for` attributes:
```html
<div class="tabs">
  <input class="tab__input" type="radio" id="tab01"/>
  <label class="tab" for="tab01">Tab 1</label>
  ...
</div>
```


## Available classes

### Theme classes for tabs

| class name | effect  |
|------------|--------|
| `theme--turquoise` | Tabs in turquoise (default) |
| `theme--blue` | Tabs in blue |
| `theme--purple` | Tabs in purple |
| `theme--green` | Tabs in green |
| `theme--royalblue` | Tabs in royalblue |


### Modifier classes for tabs

| class name | effect  |
|------------|--------|
| `tabs--error` | Tabs in red for error states (overrides themeing) |


### Available classes for `<button>`
| class name | effect  |
|------------|--------|
| `is-active` | Will select the tab by default |
| `is-disabled` | Sets the tab as disabled |

### Available attributes for `<input type="radio">`
| attribute name | effect  |
|------------|--------|
| `checked` | Will select the tab by default |
| `disabled` | Sets the tab as disabled |

## Notes about Groundhog tabs

Tabs work with `<button>` and `<input type="radio" />` elements. When using the button approach javascript will set the `.is-active` class on the appropriate button. Using the `<input type="radio />` + `label` markup, the styling will happen via `checked` and `disabled` properties on the `<input>` element itself.

Pane visibility control is currently not contained in Groundhog.
