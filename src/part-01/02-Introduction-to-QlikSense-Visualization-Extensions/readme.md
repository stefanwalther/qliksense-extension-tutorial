---
title: Introduction to Qlik Sense Visualization Extensions
sub-title: 
lastUpdate: "2015-05-29"
order: 20
type: chapter
layout: default
tags:
---

Visualization Extensions are a possibility to extend the visualization capabilities of Qlik Sense by using only standard web-technologies. The concept of extensions in general can also be seen as a plugin-mechanism which allows developers to combine the power of Qlik Sense’ APIs with the nearly unlimited capabilities of the web.

Extensions are so powerful in Qlik Sense because they use exactly the same set of technologies as standard objects in Qlik Sense do, so you are basically using the same set of technologies as Qlik’s R&D does!
If developed properly, the handling of _Visualization Extensions_ is identical to standard objects:

### Visualization Extensions can be:
-	Added to a sheet via drag’n’drop
-	Configured to use the same property panels as standard objects do, therefore you can create visualizations on top of the data of a Qlik Sense app
-	Resized, copied, pasted and positioned like any other object
-	Added and used in any story
-	Responsive, working properly on any device
-	And much more …

### Nomenclature
If you have a look into the Developer Help of Qlik Sense you'll find both the term "Extension" and also "Visualization". I keep to the term _Visualization Extension_ in this tutorial because the main idea of this concept is to create new visualizations for Qlik Sense. Talking only about _Extensions_ might be a limitation for the future since there might be additional types of extensions in the future.

## Using an existing visualization extension
Before we start developing a visualization extension in Qlik Sense we first should understand how to „install“ and use an existing extension.

### Installing a visualization extension on Qlik Sense Desktop

To make an existing visualization extension visible for Qlik Sense Desktop you have to make it available at the location where Qlik Sense Desktop is loading extensions from:

`C:\Users\[UserName]\Documents\Qlik\Sense\Extensions\`

If you download a visualization extension you'll typically get a .zip file. Let's say we download a HelloWorld.zip. For getting this visualization working, do the following:

1. Open Windows Explorer and navigate to `C:\Users\[UserName]\Documents\Qlik\Sense\Extensions\`
2. Create a folder named `HelloWorld`
3. Unzip the content of `HelloWorld.zip` to this folder
	* You should then have at least a JavaScript file (probably something like `HelloWorld.js`) and a file with the extension `.qext` (so something like `HelloWorld.qext`)

If you then have a look into the list of visualization objects you should see the one coming from the imported visualization extension, if this is not the case, refresh either Qlik Sense Desktop (press key `F5`) or refresh your browser.

[Deploying visualizations in Qlik Sense Desktop](http://help.qlik.com/en-US/sense-developer/3.0/Subsystems/Extensions/Content/Howtos/deploy-extensions.htm) in the Qlik Sense Developer help.


### Installing a visualization extension on Qlik Sense Server

If you want to make your visualization extension available on Qlik Sense Server you have to import into the repository.

See [Deploying visualizations in Qlik Sense](http://help.qlik.com/en-US/sense-developer/3.0/Subsystems/Extensions/Content/Howtos/deploy-extensions.htm) in the Qlik Sense Developer help.

## Comparison between extensions in QlikView and Qlik Sense

Beside one exception the comparison between the concept of Extensions in QlikView and Qlik Sense is quite easy:

* Whatever you could achieve with Extensions in QlikView, can also be achieved with Qlik Sense plus much more

There is only a single exception to this rule:
* There is no concept of such as a Document Extension in Qlik Sense, all Visualization Extensions are – in the nomenclature of QlikView – Object Extensions.


## Where to find Qlik Sense visualization extensions
There are some places where you can find Extensions for Qlik Sense:

* **[branch.qlik.com](http://branch.qlik.com)**  
branch.qlik.com is an open source community where you can find a lot of completely new solutions built on top of both QlikView's and Qlik Sense' APIs, certainly there is also a dedicated section on this page only listing [visualization extensions for Qlik Sense](http://branch.qlik.com/projects/forumdisplay.php?22-Object-Extensions)
* **[market.qlik.com](http://market.qlik.com)**  
Probably quite soon, we'll also see commercial visualization extensions for Qlik Sense on [market.qlik.com](http://market.qlik.com)
* **[GitHub](http://github.com)**  
Fortunately quite a lot of developers are publishing their extensions to GitHub. Give it a try.

