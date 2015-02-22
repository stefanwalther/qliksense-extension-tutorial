# 

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
	function ( ) {
		'use strict';
		return {
			paint: function ( $element, layout ) {
				// Your paint methods ...				
			}
		};
	} );
```

### define
`define` is a concept introduced by [requireJS](http://requirejs.org/) to define dependencies in your JavaScript files, so loading external dependencies before your main script gets executed ([read more here](http://requirejs.org/docs/api.html#defsimple)).
In our example above we do not load any dependencies, but we'll do in further chapters of this tutorial.

### paint
`paint` is the main method

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

><b>Hint:</b>
When creating your .qext file you should double-check if this file [meets the requirements of a valid .json file.](http://jsonlint.com/)
  

### name

The property `name` will be re-used in the list of visualizations and the preview:

![](images/03/03_name.png)

### description

The `description` is visible in the preview:

![](images/03/03_descriptions.png)

### icon

Qlik Sense for Developers [states](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingExtensions/HowTos/Ext_Ex_AddPreviewImage.htm?Highlight=preview):

> You can define a custom preview image that is visible when the visualization has been deployed to Qlik Sense. The preview image is visible when selecting the visualization in the Library or Assets panel. This is done by defining the preview parameter in the qext file.
If you do not define the preview parameter in the qext file, the icon definition will be used for rendering the preview image as well.

![](images/03/03_preview.png)





### type

### version

### preview

### author

## Hello World
Considering the anatomy of a Qlik Sense Visualization Extension we can create our "Hello World" example as follows:

### Create a .qext file


## Get the Code


---
Qlik Sense Extension Tutorial, Version 0.0.2

[Table of Contents](00-TOC.md)