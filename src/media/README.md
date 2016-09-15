---
layout: components_icons.hbs
meta:
  title: "Media"
  description: "The media component is a combination of any type of media (img, video, audio,...) and some text."
  keywords: "media, Dynatrace, groundhog, css, component"
---

## Introduction
The Groundhog **media component** is a combination of any type of media (img, video, audio, svg, ...) and some content. The content can be text or again a media component.

## Including a media component

1. To include a media component create a wrapping `div` with a `.media` class and the desired alignment-class (horizontal or vertical, [see below][mediaClass]).
```html
<div class="media media--vertical">
  ...
</div>
```
2. The media element itself is put into a `div` with a `.media__item` class, the content in a `div` with a `.media__content` class.
```html
<div class="media media--vertical">
  <div class="media__item">
    ...
  </div>
  <div class="media__content">
    ...
  </div>
</div>
```
3. The order of the inner `div` elements can be reversed, if the media item should be on the right or below the text.
```html
<div class="media media--vertical">
  <div class="media__content">
    ...
  </div>
  <div class="media__item">
    ...
  </div>
</div>
```
4. Media components can be nested.
```html
<div class="media media--horizontal">
  <div class="media__item">
    ...
  </div>
  <div class="media__content">
    <div class="media media--vertical">
      <div class="media__item">
        ...
      </div>
      <div class="media__content">
        ...
      </div>
    </div>
  </div>
</div>
```

## Available classes for media

| class name | effect |
| ---------- | ------ |
| .media--vertical | The media item and the media content are aligned vertically. |
| .media--horizontal | The media item and the media content are aligned horizontally. |

[mediaClass]: #available-classes-for-media
