---
title: Hello Data - Improved
lastUpdate: "2015-05-29"
abstract: Working with data in a Qlik Sense visualization extension.
tags:
  - visualization extension
  - extension
  - Qlik Sense
draft: true
---

## Styling your table
Adding a nice style for your table is now really a piece of cake:

1. Create a CSS file with some nice table styles
2. Load the style sheet as described in the previous chapter

```css

```

{{#hint}}
	
{{/hint}}

## Enabling vertical scrolling

Enabling basic vertical scrolling (without having fixed table headers) can be implemented e.g. by

* surrounding the table with a `div`
* and enable scrolling by using CSS' `overflow`

The final structure should look like this:

```css 
.qv-object-hello-data-improved .container {
	position:relative;
	height: 100%;
	overflow: auto;
}
```

```html
<div class="container">
  <table class="niceTable">
  	...
  </table>
</div>
```

## Support the selection model

## Data paging

## HTML injection vs. DOM-object creation
If you have a look at some of the published example in the online help, you'll find different variants how to manipulate the browser's content (DOM - document object model) when e.g. creating a table as in our Hello-Data example.

### Html injection

### DOM object creation

###

### Table API
With Qlik Sense 2.1 a new 

### Surprise
While writing this chapter I did some research on the performance of several approaches how to modify existing web pages.