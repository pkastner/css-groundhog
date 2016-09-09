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

For the icons to render correctly via the `<use>` reference, the icons in question need to be defined somewhere on the page. These so called definitions should be defined before the first reference of the icon.

### Creating a definition
1. To create an icon definition, first create an svg element `<svg>` in your markup:
```html
<svg>
</svg>
```
2. Add the necessary `xmlns` attribute to the svg element. This tells the browser that the element uses the svg namespace:
```html
<svg xmlns="http://www.w3.org/2000/svg">
</svg>
```
3. This element will usually render on the viewport. To keep the definition element from interfering with the page layout, you should set `width`, `height` and `visiblilty`. Additionally `aria-hidden` can be set as well
```html
<svg xmlns="..." style="width:0; height:0; visibility: none;" aria-hidden="true">
</svg>
```
4. Add a `<symbol>` element for every icon you will need on the page and set the `id` attribute of the `<symbol>` element
```html
<svg xmlns="..." style="...">
  <symbol id="ruxit"></symbol>
</svg>
```
5. Dynatrace styled icons are typically positioned inside a 512 x 512 unit viewbox. The viewbox should be set on the symbol element:
```html
<svg xmlns="..." style="...">
  <symbol id="ruxit" viewbox="0 0 512 512"></symbol>
</svg>
```
6. Input the actual svg data of the icon itself. Make sure that there are no fill attibutes set on the svg elements in order to ensure that [themecolor classes][iconcolors] will work.
```html
<svg xmlns="..." style="...">
  <symbol id="ruxit" viewbox="0 0 512 512">
    <rect x="10" y="10" width="100" height="100"/>
  </symbol>
</svg>
```

**Beware!** Only include icons you will actually need on this page into the definition to keep the page-weight to a minimum.

[prerequisites]: #prerequisites
[iconcolors]: #icon-colors
