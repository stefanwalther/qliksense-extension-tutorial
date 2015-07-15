# Loading Resources



**Table of Contents**

<!-- toc -->

- [Repetition: Using RequireJS](#repetition--using-requirejs)
- [Stylesheets / CSS files](#stylesheets---css-files)
  * [1) Loading and adding the content to the document's header](#1--loading-and-adding-the-content-to-the-document-s-header)
  * [2) Adding a link to a style sheet to the document's header](#2--adding-a-link-to-a-style-sheet-to-the-document-s-header)
  * [3) Using the RequireJS CSS plugin](#3--using-the-requirejs-css-plugin)
- [Javascript libraries](#javascript-libraries)
  * [Loading local JavaScript files](#loading-local-javascript-files)
  * [Loading external JavaScript files](#loading-external-javascript-files)
- [Images](#images)

<!-- tocstop -->

---

In this chapter you'll learn how you can use several types of resources in your visualization extensions, e.g.

* Style sheets / CSS files
* JavaScript libraries
* Images

Before we start, let's recap how Qlik Sense manages to load resources asynchronously, thus using RequireJS.

## Repetition: Using RequireJS

Qlik Sense uses [RequireJS](http://requirejs.org/) to take care of asynchronous loading of resources.
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
				console.log( $('head') );
			}
		};
	} );
```

***Explanation:***  
jQuery is pre-configured as an internal dependency in Qlik Sense, so there is no need to load jQuery explicitly. By just defining the dependency in the first parameter of the `define` function, you can then be sure that jQuery is loaded and that the return value of this library will be passed as the first parameter in the function (second argument of `define`).  

Since we will use RequireJS in some of the solutions below, it's important to understand how this approach works.


## Stylesheets / CSS files
If you want your custom styles (defined in one ore more CSS files) to be considered in your visualization extension we have to load them first.
There are several ways how to achieve that:

1. Loading and adding the content of a CSS file to the document's header
2. Adding a link to a style sheet to the document's header
3. Using the RequireJS CSS plugin

>**Hint:**
> When creating style sheets, always make sure to prevent conflicts with existing styles or style definitions from other visualization extensions.
> A good guide can be found in the official Qlik Sense developer documentation: ([Styling your visualizations](http://help.qlik.com/sense/2.0/en-us/developer/Subsystems/Extensions/Content/Howtos/working-with-styling.htm)).
  
### 1) Loading and adding the content to the document's header

Using RequireJS and the `text!` prefix in the `define` statement of your visualization extension can be used to inject the content into the header of the current document:

In Qlik Sense the RequireJS [plugin for loading text resources](https://github.com/requirejs/text) is included, which we can use to load a specific CSS file:

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
		$( '<style>' ).html( cssContent ).appendTo( 'head' );

	} );
```

>**Explanation for jQuery novices**
> If `$("<style>").html(cssContent).appendTo("head");` doesn't really look familiar to you, here's a short explanation:
> 
> * `$("<style>")` creates a new style object.
> * Then the content of the variable `cssContent` will be assigned to the inner content of the `style` object.
> * Finally the style object (now including the CSS content) will be added to `<head>` section of the current document.
  
### 2) Adding a link to a style sheet to the document's header

Instead of adding a `style` element to the `head` section of a document, you could certainly also add a link, referring to the location of the CSS file:

```js

define( [ 
		"jquery"
	], function ( $ ) {

		$('<link rel="stylesheet" type="text/css" href="/extensions/my-extension/css/myStyle.css">').appendTo("head");

	} );

```

### 3) Using the RequireJS CSS plugin

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

>**Usage before Qlik Sense 2.0**
> You'll realize that some visualization extension examples use this approach even before Qlik Sense 2.0 was published.
> While it will work in Qlik Sense Desktop it will not work in a server environment. Official support for this way of loading CSS files has been added with Qlik Sense 2.0.
> 
> If you want to develop a visualization extension being compliant with earlier versions than Qlik Sense 2.0, it is NOT recommended to use this approach.
  
## Javascript libraries

### Loading local JavaScript files
Loading JavaScript files from your project is easy and we have already covered this several times in this tutorial.
We just use RequireJS, add the local JavaScript file as a dependency and we are done:

```js
define([
        './lib/js/extensionUtils'
],
function ( extensionUtils ) {
    'use strict';

    return {
        paint: function ( $element, layout ) {

    		extensionUtils.doSomething();

        }
    };
});
```
The returned object certainly only makes sense if your JavaScript file returns something. Sometimes - like for example in case of D3 - this is not necessary because the object will be bound globally.



### Loading external JavaScript files
You might want to load resources from a [content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network) (CDN). This is the way to go:

```js
define([
        '//code.highcharts.com/highcharts.js'
],
function ( highCharts ) {
    'use strict';

    return {
        paint: function ( $element, layout ) {

    		// do something with highCharts

        }
    };
});
```

>**Hint:**
> Loading a JavaScript file from a content delivery network is a good approach if you
> * Use the same library in several extensions, because your browser won't have to load the resource again and again
> * Know that the users using your visualization extension definitely have internet access (which is nowadays in most cases probably not a big problem)
  

## Images
There are no special requirements or obstacles when including images in your visualization extension. You just need to know to to reference the path correctly that the image works in both Qlik Sense Desktop but also in a server environment.

To get the root path follow always the following schema:

`\extensions\YOUR_EXTENSION_NAME\`

YOUR_EXTENSION_NAME is easy to find out: It's exactly the file name of your .qext file (without the extension .qext).

As the name this chapter's sample extension is `exttut-09-loadingresource` I could then load an image as follows:

```js
paint: function ( $element, layout ) {

    $element.empty();
    $element.append('<img src="/extensions/exttut-09-loadingresources/lib/images/pic.png" />');

}
```


---
**Qlik Sense Visualization Extension Tutorial**, Version 0.12.3<br/>
Last update: 2015-07-03<br/>

[Overview of all chapters](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/readme.md)