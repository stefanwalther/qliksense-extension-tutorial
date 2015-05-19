---
title: Loading Resources
published: false
---

In this chapter you'll learn how you can use several types of resources in your visualization extensions, e.g.

* Style sheets / CSS files
* Images
* Javascript libraries
* Fonts
* Items from the content library

Before we start, let's recap how Qlik Sense manages to load resources asynchroneosly, thus using RequireJS.

## Repitition: Using RequireJS

Qlik Sense uses [RequireJS](http://requirejs.org/) to take care of the asynchronous loading of resources.
First of all let's remember how RequireJS works:

Anatomy of loading dependencies using RequireJS:
``` javascript
define( [ /* dependencies */ ],
	function ( /* returned dependencies as arguments */ ) {
		...
	} );
```

So loading the predefined dependency of jQuery would work as follows:

``` javascript
define( [ "jquery" ],
	function ( $ ) {
		'use strict';
		return {

			paint: function ( $element, layout ) {
				// Now we can use jQuery here
				console.log($('head'));
			}
		};
	} );
```

***Explanation:***  
jQuery is pre-configured as an internal dependency of Qlik Sense, so there is no need to load jQuery explicitely. By just defining the dependency in first parameter of the `define` function, you can then be sure that jQuery is loaded and that the return value of this library will be passed as the first parameter in the function (second argument of `define`).  

Since we will use RequireJS in some of the solutions below, it's important to understand how this approach works.


## Stylesheets / CSS files
If you want your custom styles (defined in one ore more CSS files) to be considered in your visualization extension we have to load them first.
There are several ways how to achieve that:

1) Loading and addding the content of a CSS file to the document's header
2) Adding a link to a style sheet to the document's header
3) Using the requireJS CSS plugin

{{#hint}}
When creating style sheets, always make sure to prevent conflicts with existing styles or style definitions from other visualization extensions.
A good guide can be found in the documentation: ([Styling your visualizations](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingExtensions/HowTos/working-with-styling.htm)).
{{/hint}}

### 1) Loading and adding the content to the document's header

Using requireJS and the `text!` prefix in the `define` statement of your visualization extension can be used to inject the content into the header of the current document:

In Qlik Sense the requireJS [plugin for loading text resources](https://github.com/requirejs/text) is included, which we can use to load a specifc CSS file:

Let's assume we have the following file structure:

```batch
.my-extension
|── css
	|── myStyle.css
|── my-extension.qext
|── my-extension.js 

```


By prefixing a path with `text!` the text plugin will load a file and pass it's content to a variable.

```js
define( [ 
		'jquery',
		'text!./css/myStyle.css' 
	], function ( $, cssContent ) {

		// cssContent now contains the content of myStyle.css
		
		// Let's inject the CSS declarations into the header of the current document
		$( '<style>' ).html(cssContent).appendTo( 'head' );

	} );
```

{{#hint "Explanation for jQuery novices"}}
If `$("<style>").html(cssContent).appendTo("head");` doesn't really look familiar for you, here's a short explanation:

* `$("<style>")` creates a new style object.
* Then the content of the variable `cssContent` will be assigned to the inner content of the `style` object.
* Finally the style object (now including the CSS content) will be added to `<head>` section of the current document.

{{/hint}}

### 2) Adding a link to a style sheet to the document's header

Instead of adding a `style` element to the `head` section of a document, you could certainly also add a link, referring to the location of the CSS file:

```js

define( [ 
		"jquery"
	], function ( $ ) {

		$('<link rel="stylesheet" type="text/css" href="/extensions/my-extension/css/myStyle.css").appendTo("head");

	} );

```

### 3) Using the requireJS CSS plugin

Qlik Sense 2.0 is introducing a new, easier way of loading CSS files:
You can use the [CSS loader plugin](https://github.com/guybedford/require-css) of RequireJS

```js
define( [ 
		"jquery",
		"css!./css/myStyle.css" 
	], function ( $ ) {

		// that's it ;-)

	} );
```

{{#hint "Usage before Qlik Sense 2.0}}
You'll realize that some visualization examples use this approach even before Qlik Sense 2.0 was published.
While it will work in Qlik Sense Desktop it will not work in a server environment. Official support for this way of loading CSS files has been added with Qlik Sense 2.0.
{{/hint}}

## Images

## Javascript libraries




