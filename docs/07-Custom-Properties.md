---
title: Custom Properties
published: false
---

{{toc}}


{{#hidden}}

---

In the previous chapter you have learned how to re-use built-in properties in Qlik Sense' property panel. Knowing that you'll probably ask yourself how we can extend the property panel to custom needs.

## Introduction to custom properties

If you need other properties than the predefined ones you can create them as desired by adding _custom properties_.

As of Qlik Sense 1.1/2.0 you can use a collection of different UI components to display your custom properties in the property panel:

* Text Box
* Dropdown
* Slider

These UI components can be grouped into sections and headers in the property panel.
Each of them exposes different configuration options to manipulate their behavior.

Let's have a look at the most basic but at the same time also most common component, the text box and how to define it:

### Basic example

## Display & Persistence 
Once the custom properties are defined, Qlik Sense takes care of the rest:
* Showing the custom properties together with the built-in ones
* Persistance of property values, so if a user changes the value of a property, you don't have to take care of persisting the property value

## Referencing property values

Referencing the property values of _custom properties_ is not very much different from referencing values from built-in properties, with one exception:

By using `ref`you can define how the property value is exposed in the object tree. This principle applies to all _custom property_ items.

Two examples:


{{#hint}}

If you are changing the properties of an existing visualization extension you might run into the issue that changes in your extension's code are not reflected in visualizations based on this specific extension.

In this case remove the existing object and re-create it and you should see the changes made to the property panel.

This behavior only applies if you are making changes to the `definition` property of a visualization extension, not if you are e.g. making changes in the `paint` implementation.

{{/hint}}

## Types


## Grouping properties in the source code

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

{{/hidden}}