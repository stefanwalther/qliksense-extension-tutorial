---
title: Hello Data
lastUpdate: "2015-05-29"
abstract:
tags:
  - visualization extension
  - extension
  - Qlik Sense
draft: true
---

**Table of Contents**

<!-- toc -->

---

OK, now we are done with the very, very basics. Let's move on to the interesting stuff, bringing data into our _visualization extension_.

## Getting data into visualization extension
In one of the previous chapters we have already learned how we can define re-use the built-in capability to let the user define dimensions and measures in a Qlilk Sense Visualization Extension:

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

This results to the following property panel:


If the user now adds the visualization extension to a sheet the following will be shown to guide the user:



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
I think we are (nearly) done with the basics. There's just another topic we have to look into: How to load external resources, which will be covered in the next chapter.