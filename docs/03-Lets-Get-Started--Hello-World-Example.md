--
title: Chapter 03 - Let's Get Started: Hello World Example
published: false
order: 30
--

The first example is extremely easy, let’s just create a simple „Hello World“ visualization extension. In the following chapters we’ll improve this example and extend it with additional functionality.

So what’s necessary to create a Qlik Sense Extension? Let’s first have a look at the anatomy of an extension:

## The Anatomy of a Qlik Sense Extension
The following files are mandatory when creating a Qlik Sense Extension:

* Main script file
* Extension meta data file (.qext)

In addition to the mandatory files an extension project may certainly have one or more of the following complementary file-types:
* External scripts
* Style sheets (.css files)
* Images, icons and fonts
* and other resources ...

## Skeleton of a Script File

This is the basic skeleton of a script file for a visualization extension for Qlik Sense:

``` javascript
define( [ /* dependencies */ ],
	function ( /* dependency arguments */ ) {
		'use strict';
		return {
			paint: function ( $element, layout ) {
				// Your painting logic ...				
			}
		};
	} );
```

### define
`define` is a concept introduced by [requireJS](http://requirejs.org/) to define dependencies in your JavaScript files. The idea is to load external dependencies before your main script gets executed ([read more here](http://requirejs.org/docs/api.html#defsimple)).
In our example above we do not load any dependencies, but we'll do in further chapters of this tutorial.

### paint
`paint` is the main method to render the visualization.

> It will be called every time the visualization should be rendered, either because of new data from the server or because it has been re-sized.

The paint method receives two parameters, `$element` and `layout`.

Parameter		| Description
--------------	| ------------------------------
`$element`		| jQuery wrapper containing the HTML element where the visualization should be rendered.
`layout`		| Data and properties for the visualization.

## Structure of the .qext File

The basic structure of a .qext file looks as follows:

```json
{
	"name" : "Extension Tutorial - Hello World",
	"description" : "Extension Tutorial, Chapter 3, Simple Hello World.",
	"icon" : "extension",
	"type" : "visualization",
	"version": "0.1",
	"preview" : "bar",
	"author": "Stefan Walther"
}
```

{{#hint}}
When creating your .qext file you should double-check if this file [meets the requirements of a valid .json file.](http://jsonlint.com/)
{{/hint}}

### `name`

The property `name` will be re-used in the list of visualizations and the preview:

{{image "images/03/03_name.png"}}

### `description`

The `description` is visible in the preview:

{{image "images/03/03_descriptions.png"}}

### `icon`

{{image "images/03/03_icon.png"}}

### `type`

Defines the type of the extension, should be always `visualization` as of now.

### `version`

Define the version of your visualization extension, I recommend to use [Semantic Versioning](http://semver.org/).

### `preview`

Qlik Sense for Developers [states](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingExtensions/HowTos/Ext_Ex_AddPreviewImage.htm?Highlight=preview):

> You can define a custom preview image that is visible when the visualization has been deployed to Qlik Sense. The preview image is visible when selecting the visualization in the Library or Assets panel. This is done by defining the preview parameter in the qext file.
If you do not define the preview parameter in the qext file, the icon definition will be used for rendering the preview image as well.

{{image "images/03/03_preview.png"}}

{{#note}}
If you want to create a preview image, choose width and height of 140px x 123px.
{{/note}}

### `author`

author references the author of the visualization extension, so probably your name.
Note, as of this is not visible in neither the Qlik Sense Desktop nor Qlik Sense Server, so you can only get information about the author if you open the `.qext` file.

## Creating the Hello World Example
Considering the anatomy of a Qlik Sense Visualization Extension we can now create our "Hello World" example as follows:

### Create the Container
The easiest way to get started is to use Qlik Sense Desktop and create a folder containing the two required assets where Qlik Sense Desktop is loading extensions from.

So let's create folder called "Extension Tutorial - Hello World" under

`C:\Users\[UserName]\Documents\Qlik\Sense\Extensions\`

### Create a .qext file

Then create a `exttut-03-helloworld.qext` file and paste the following code into it:

```json
{
	"name" : "Extension Tutorial - Hello World",
	"description" : "Extension Tutorial, Chapter 3, Simple Hello World.",
	"icon" : "extension",
	"type" : "visualization",
	"version": "0.1",
	"preview" : "bar",
	"author": "Your Name"
}
```

### The Script File

Then add the following script to a file called `exttut-03-helloworld.js`:

```javascript
define( [
		'jquery'
	],
	function ( $ ) {
		'use strict';

		return {

			paint: function ( $element, layout ) {

				// $element.empty();
				var $helloWorld = $( document.createElement( 'div' ) );
				$helloWorld.html( 'Hello World from the extension "01-ExtTut-HelloWorld"<br/>' );
				$element.append( $helloWorld );

			}
		};
	} ); 
```

### Test It
Before we dig into details what this code does, let's just test it.
Just follow these steps:

1. Open Qlik Sense Desktop
2. Open an existing app or create a new one
3. Open an existing sheet or create a new one
3. Go to _Edit mode_ and then you should see the extension "Extension Tutorial - Hello World"
4. Drag and Drop it onto the sheet and exit the _Edit mode_

You should see something like that:


{{#note}}
If this is the first time that you are working with Qlik Sense (Desktop) I've added a step by step guide to the appendix which will guide you trough creating your first app and testing this extension.
{{/note}}


### Explanation of the Code


**Some hints you should know:**
{{#hint}}

{{/hint}}


### Get the Code
