---
title: Hello Data
lastUpdate: "2015-05-29"
abstract:
tags:
  - visualization extension
  - extension
  - Qlik Sense
draft: false
---

**Table of Contents**

<!-- toc -->

---

OK, now we are done with the very, very basics. Let's move on to the interesting stuff, bringing data into our _visualization extension_.

## Getting data into visualization extension
In one of the previous chapters we have already looked into the solution of re-using the built-in capability to let the user define dimensions and measures in a Qlilk Sense Visualization Extension:

```javascript
definition: {
	type: "items",
	component: "accordion",
	items: {
		dimensions: {
			uses: "dimensions"
		},
		measures: {
			uses: "measures"
		},
		sorting: {
			uses: "sorting"
		},
		appearance: {
			uses: "settings"
		}
	}
}
```

This results into the following property panel:

{{image "images/08/08_Default_Property_Panel.png"}}

If you add the visualization onto a sheet you'll furthermore realize that in _Edit Mode_ the user can now define the dimensions and measures directly in the object (without using the property panel). In addition to that also drag and drop of previously defined dimensiosn and measures from the Master items is possible:

{{image "08/08_Default_Object_Display.png"}}


## Initial properties

{{#hidden}}

## Customizing the property panel

Based on the more or less default behaviour of the "Dimensions" and "Measures" section, there are several possibilities how to customize these sections:

- Limiting the amount of dimensions and measures
- 

## Testing your extensions with data
If you want to test your visualization extension in a blank, new Qlik Sense application you'll realize that Qlik Sense requires some data to be able to create a new sheet.

The easiest way to achieve that - if you haven't some good test data - is the following:

Go to the "Data load editor":

{{image "08/08-open-data-load-editor.png"}}

At the end of the script of main add the sample script using "Ctrl+0+0", then load the data, go back to the "App overview" and then you can create your sheet to test your visualization extension.

{{image "08/08-sample-script.png"}}

## Outlook

- Paging data
- Using multiple hypercubes

{{/hidden}}


## Hmm, we are done ? Nearly !
We are (nearly) done with the basics. There's just another topic we have to look into: How to **load external resources**, which will be covered in the next chapter.