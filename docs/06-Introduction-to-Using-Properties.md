---
title: Introduction to Using Properties
published: false
---

Before we start with the real fun stuff, let's spend a chapter or some minutes to understand how to use properties in Qlik Sense _Visualization Extensions_.

This chapter only focuses on the basic concept of properties, a detailed overview of all possibilities will be added later on in one of the advanced chapters.

## The Idea Behind Properties
The main idea behind properties is to offer users a way to customize the behavior of visualization extensions in the same way as they would control native objects of Qlik Sense. Therefore an extension developer can use an interface to expose properties which are represented in the right property panel the exactly same way as it is the case with native objects.

There are two main approaches how you can define properties:

1. **Re-use existing** (built-in) **properties**
2. Create **custom properties**

## Re-use existing properties

If you have spent some time with Qlik Sense, you already know the concept of typical properties used for the most common native objects:



## Create custom properties

If you need other properties than the predefined ones you can created them as desired by adding _custom properties_.

As of Qlik Sense 1.1 you can use a collection of different UI-components to display your custom properties in the property panel:

* Text Box

These UI components can be grouped into accordions and sections in the property panel.

Let's have a look at the most basic but at the same time also most common component, the text box and how to define it:

### Grouping properties

### How to reference property values


{{#hint}}
I personally prefer to prefix all properties with `props`. Firstly this doesn't messy up the root of `layout`, secondly this approach allows me to easily iterate through all custom properties and thirdly ensures that there are not naming conflicts with the standard object of Qlik Sense (even in future versions of Qlik Sense).
{{/hint}}

### Conditional display of properties



### Working with properties and external data
In Qlik Sense 1.1 a minor but important change has been made how data for some of the properties can be defined:

## Improving maintainability of properties

If you have a lot of different properties and you are defining them in your main JavaScript file you'll recognize that your script file becomes quite big, therefore it's quite convenient to put your properties definitions into a separate file and then load and use it in your main script file.

Here's an example how this can be achieved:

**Your properties file:**

Sample properties file to allow the user to define
* a dimension
* a measure
* the sorting
* a custom properties called 
saved in a file called `properties.js`

```javascript
define( [], function () {
	'use strict';

	// ****************************************************************************************
	// Dimensions & Measures
	// ****************************************************************************************
	var dimensions = {
		uses: "dimensions",
		min: 0,
		max: 1
	};

	var measures = {
		uses: "measures",
		min: 0,
		max: 1
	};

	var sorting = {
		uses: "sorting"
	};

	// ****************************************************************************************
	// Other Settings
	// ****************************************************************************************

	var testSetting = {
		ref: "props.test",
		label: "Test Setting:",
		type: "string",
		expression: "optional",
		show: true
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Appearance Panel
	var appearancePanel = {
		uses: "settings",
		items: {
			settings: {
				type: "items",
				label: "Settings",
				items: {
					testSetting: testSetting
				}
			}
		}
	};

	// Return values
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: dimensions,
			measures: measures,
			sorting: sorting,
			appearance: appearancePanel

		}
	};

} );

```

**Your main script:**
In your main script load the external definition of properties and assign it to the properties' `definition`:

```javascript

define( [
		'./properties'
	],
	function ( props ) {
		'use strict';

		return {

			definition: props,
			initialProperties: initProps,
			paint: function ( $element , layout ) {

			}
		}
	}
);


```

## Troubleshooting

- New custom properties do not appear

