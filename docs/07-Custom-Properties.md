---
title: Custom Properties
published: false
---

{{#hidden}}

---


So the question is know: How can we re-use these pre-defined assets in the property panel.

### Create custom properties

If you need other properties than the predefined ones you can create them as desired by adding _custom properties_.

As of Qlik Sense 1.1 you can use a collection of different UI-components to display your custom properties in the property panel:

* Text Box

These UI components can be grouped into sections and headers in the property panel.

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

{{/hidden}}