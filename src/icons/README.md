---
layout: components_icons.hbs
meta:
  title: "Icon"
  description: "An icon component for Dynatrace styled web entities with css and markup examples."
  keywords: "icons, Dynatrace, groundhog, css component"
---

## Introduction
The Groundhog **icon** component is based on simple SVGs. This ensures resolution and color independent icons which can be used easily. An icon should be used to make an action more recognizable, but could also be used to visually enhance another component on your screen.

## Including the icon component
1. To include the Groundhog **icon** component first create the `<svg>` and `<use>` elements:
```html
<svg>
  <use></use>
</svg>
```
2. Apply the styling by adding the Groundhog classes to the class attributes of the elements:
```html
<svg class="icon icon--green">
  <use></use>
</svg>
```
3. Reference the icon you want to display in the `<use>` via the `xlink:href` attribute. Keep in mind that the icon in question needs to be defined in the symbols map on that page. You can find how to do that in the [prerequisites section][prerequisites].
```html
<svg class="icon icon--green">
  <use xlink:href="#ruxit"></use>
</svg>
```
4. To make the markup more semantic, you can choose to add `role` attribute to the svg element:
```html
<svg role="img" class="icon icon--green">
  ...
</svg>
```

## Icon colors

| Icon class | Output |
|------------|--------|
| `icon--grey` | <svg role="img" class="icon icon--grey"><use xlink:href="#ruxit"></use></svg> |
| `icon--blue` | <svg role="img" class="icon icon--blue"><use xlink:href="#ruxit"></use></svg> |
| `icon--green` | <svg role="img" class="icon icon--green"><use xlink:href="#ruxit"></use></svg> |
| `icon--yellow` | <svg role="img" class="icon icon--yellow"><use xlink:href="#ruxit"></use></svg> |
| `icon--red` | <svg role="img" class="icon icon--red"><use xlink:href="#ruxit"></use></svg> |
| `icon--black` | <svg role="img" class="icon icon--black"><use xlink:href="#ruxit"></use></svg> |
| `icon--white` | <svg role="img" class="icon icon--white" style="background-color: #454546"><use xlink:href="#ruxit"></use></svg> |


## Icon size modifiers

| Icon class | effect |
| :------------- | :------------- |
| - | By default the icon renders in 32 x 32px |
| `.icon--small` | Renders a small 18 x 18px icon |
| `.icon--big` | Renders a large 64 x 64px icon |


## Prerequisites





[prerequisites]: #prerequisites
