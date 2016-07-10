---
title: "Enabling support to print visualization extensions"
draft: true
---

In Qlik Sense 3.0 support for printing extensions has been added. Therefore it is now possible to:

- Export a single extension as image (right click)
- 
- Include a visualization extension in stories and print the story, including the visualization extension.

To enable this functionality the following changes need to be made to visualization extensions:

## Meta data

To tell Qlik Sense that your visualization extension should be enabled for printing, add the following properties:

```js
	
	definition: {
		...
	},
	support: {
		print: true
	},
	paint: function() {
		...
	},
	...

```

## Finished rendering notification

