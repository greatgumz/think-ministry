# Verkada Coding Challenge

## Dev Setup

1. Install dependencies

```
npm install
npm run dev
```

2. Go to http://localhost:3000

## Requirements

- [x] Use Javascript, HTML and CSS
- [x] You may use the DOM API or a library such as React or Angular, but please do not use
      jQuery or an “infinite scrolling list” library =)
- [x] Thumbnails are located at https://hiring.verkada.com/thumbs/{timestamp}.jpg
      where “timestamp” represents unix seconds.
- [x] Timestamps are taken every 20 seconds, so the timestamp will always end in one of 00,
      20, 40, 60, or 80. The first thumbnail is at timestamp 1500348260 and the last
      timestamp is 1503031520. You can see the first thumbnail here:
      https://hiring.verkada.com/thumbs/1500348260.jpg
- [x] Only the visible images should be downloaded and displayed: we don’t want
      100,000 `<div />`s or 100,000 network requests as this would create a very poor user
      experience.

> Used React.js for building UI, Next.js for setup, SSR, routing, and Styled Components for CSS in JS

## Deliverables

- [x] Create a page that shows all thumbnails in a grid with 3 thumbnails per row. Architect the page
      to only load visible thumbnails (number of DOM nodes should be roughly proportional to the
      number of visible images). Ensure the page and the first set of images will load quickly.
- [x] The scrollable range of the page should include all 100,000+ thumbnails. This means that the
      user should be able to use the browser scrollbar to jump to any spot on the page, even if the
      thumbnails haven’t loaded yet. The scrollbar should extend to the full range so the user can
      click and drag the scrollbar to seek to the desired location.
- [x] Package the result into a reusable component. Think about the different parameters that other
      users of your component may want to control. For example, showing thumbnails every hour
      instead of every 20 seconds is useful.

> Created VirtualizedList.js Component which accepts `{...params}` and calculates number of columns, row height to virtualize list/grid within window height\*\*

## Challenge Accepted

- [x] Optionally, if you have time, make the component responsive. It should work equally well on a
      mobile phone and a desktop browser.

> Responsive images for one clumn if 360px, 2 columns if 720px, otherwise 3 columns\*\*
