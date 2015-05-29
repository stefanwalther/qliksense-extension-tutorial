---
title: "Table of Contents"
order: 1
type:
abstract:
tags:
  - visualization extension
  - extension
  - Qlik Sense
---

## Introduction to Developing Visualization Extensions
* [00 About this Tutorial](00-About.md)
* [01 Qlik Sense Extension Tutorial](01-Qlik-Sense-Extension-Tutorial.md)
	* Prerequisites
* [02 Introduction to Qlik Sense Visualization Extensions](02-Introduction-to-Qlik-Sense-Visualization-Extensions.md)
	* Installing a visualization extension for Qlik Sense Desktop
	* Installing a visualization extension on Qlik Sense Server
	* Comparison between extensions in QlikView and Qlik Sense
	* Where to find Qlik Sense visualization extensions
* [03 Let's Get Started: Hello World Example](03-Lets-Get-Started--Hello-World-Example.md)
	* The anatomy of a Qlik Sense extension
	* Skeleton of a script file
	* Structure of the .qext file
	* Creating the Hello World example
* [04 Debugging and Web Developer Tools] (04-Debugging-and-Web-Developer-Tools.md)
	* `console.x()`
	* Debugging
	* Object inspection
* [05 Improving the Web Hello World Experience](05-Improving-the-Hello-World-Experience.md)
	* Make _Hello World_ dynamic
	* Define a preview image
* [06 An Introduction to Using Properties](06-Introduction-to-Using-Properties.md)
	* Skeleton
	* Re-using properties
	* Basic custom property types
	* How to reference properties
	* Separate property definition to a separate file
* [07 Custom Properties](07-Custom-Properties.md)
	* Introduction to custom properties
	* Improving readability & maintainability of properties
	* Basic custom property - a string input box
	* Adding a custom section header
	* Adding a custom section
	* Display & persistence
	* Referencing property values
	* Troubleshooting
	* Source code
* 09 Hello Data
	* Allow users to define dimensions & measures
	* Retrieve data
	* Initial properties
	* Default limitations
* 10 Loading Resources
	* Style sheets / CSS files
	* Images
	* JavaScript libraries
	* Fonts
	* Items from the content library
* 11 Create a visualization using D3

Intermediate - More Visualization Extension related concepts:
* XX Custom Property Components
* XX More on working with data
	* Understanding data structure of Qlik objects / Qlik Sense' internal data structure
	* qHyperCube
	* qListObject
	* qPivotTable
	* qExpressions
	* Overcome default limitations
* XX More on HyperCubes
* XX The BackendAPI
* XX Communicating with the Repository API
* XX The Selection Model
* XX Working with Variables
	* Creating variables manually and programmatically
	* Setting variable definitions
	* Getting variable results
* XX Working with a ListObjectDefinition
* XX Working with a PivotTableDefinition
* XX Working with Meta Data
* XX Talking to the Repository API

## Deployment
* Deployment checklist
* XX Setting up a Robust Development Environment
	* Using Less
	* Automatically deploy and zip
	* Versioning
	
## Qlik Sense & AngularJS
* XX Two Approaches, the “Classic” One & the Angular Way
* XX The Angular Way: Basics
* XX The Angular Way: Directives
* XX The Angular Way: Filter
* XX The Angular Way: Services
* XX Working With System Tables

## Advanced Techniques
* XX Advanced Techniques: Modifying Custom Properties
* XX Advanced Techniques: Embedding Real Time Communication
* XX Advanced Techniques: More on Custom Properties
	* More components
	* Show conditions
	* Tips to structure your property definitions
	* Tips to organize your references
	* Use external sources
* XX Advanced Techniques: Paging data
* XX Advanced Techniques: Multiple hypercubes

## Real World Examples
* XX Communicating with backend services
	
## Appendix
* [Appendix:](1000-Appendix.md)
	* branch.qlik.com
	* Basic Introduction to git & GitHub
	* How to publish your extension to GitHub & branch.qlik.com
	* Npm Integration
	* Programmatic Deployment of Qlik Sense Extensions
	* What's New
		* [What's New in Qlik Sense 1.1](2011-Appendix-Whats-New-in-Qlik-Sense-1.1.md)
	* Qlik Sense Extension Related Resources
	
## How To
* How To
	* [... use Bootstrap styles in Qlik Sense visualization extensions](5000-Using-Bootstrap-CSS-in-Visualization-Extensions.md)
	
## Tools
* XX Tools
	* Tools: Manage Your Extensions
	
## Resources
* [Resources](1001-Appendix-Resources.md)
	