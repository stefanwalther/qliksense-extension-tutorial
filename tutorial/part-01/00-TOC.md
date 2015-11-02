# Table of Contents



## Part I: Introduction to Developing Visualization Extensions for Qlik Sense
* [00 About this Tutorial](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-01/00-About.md)
* [01 Qlik Sense Extension Tutorial](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-01/01-Qlik-Sense-Extension-Tutorial.md)
	* Prerequisites
* [02 Introduction to Qlik Sense Visualization Extensions](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-01/02-Introduction-to-Qlik-Sense-Visualization-Extensions.md)
	* Installing a visualization extension for Qlik Sense Desktop
	* Installing a visualization extension on Qlik Sense Server
	* Comparison between extensions in QlikView and Qlik Sense
	* Where to find Qlik Sense visualization extensions
* [03 Let's Get Started: Hello World Example](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-01/03-Lets-Get-Started--Hello-World-Example.md)
	* The anatomy of a Qlik Sense extension
	* Skeleton of a script file
	* Structure of the .qext file
	* Creating the Hello World example
* [04 Debugging and Web Developer Tools](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-01/04-Debugging-and-Web-Developer-Tools.md)
	* console.x()
	* Debugging
	* Object inspection
* [05 Improving the Web Hello World Experience](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-01/05-Improving-the-Hello-World-Experience.md)
	* Make _Hello World_ dynamic
	* Define a preview image
* [06 An Introduction to Using Properties](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-01/06-Introduction-to-Using-Properties.md)
	* Skeleton
	* Re-using properties
	* Basic custom property types
	* How to reference properties
	* Separate property definition to a separate file
* [07 Custom Properties](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-01/07-Custom-Properties.md)
	* Introduction to custom properties
	* Improving readability & maintainability of properties
	* Basic custom property - a string input box
	* Adding a custom section header
	* Adding a custom section
	* Display & persistence
	* Referencing property values
	* Troubleshooting
	* Source code
* [08 Hello Data](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-01/08-Hello-Data.md)
	* Create your Hello-Data visualization extension
	* Getting data into visualization extension
	* Testing your extensions with data
	* Changing the initial properties
	* Rendering table data
	* Some golden rules
* [09 Loading Resources](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-01/09-Loading-Resources.md)
	* Style sheets / CSS files
	* JavaScript libraries
	* Images
* 10 Hello Data - Improved
	* Vertical scrolling
	* Data paging
	* Using external styles
	* Making selections
* 11 Create a visualization using D3
* 12 Create a visualization using HighCharts

	
## Part II: Qlik Sense Visualization Extensions & AngularJS
* [01 Two Approaches, the "Classic" One & the Angular Way](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-02/01-Two-approaches-classic-one-and-the-angular-way.md)
* [02 The Angular Way: Basics](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-02/02-The-Angular-Way--Basics.md)
* 03 The Angular Way: Directives
* 04 The Angular Way: Services
* 05 The Angular Way: Filter
* [06 The Angular Way: Events](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-02/06-The-Angular-Way--Events.md)
* 07 The Angular Way: Bringing all together
* [08 The Angular Way: Summary and Why using AngularJS](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-02/08-The-Angular-Way-Summary-and-Why.md)
* 08 Testing AngularJS based visualization extensions


## Part III: Advanced Concepts When Working With Qlik Sense Visualization Extensions
* XX Working With System Tables
* XX Custom property components
* XX More on working with data
	* Understanding data structure of Qlik objects / Qlik Sense's internal data structure
		* genericObject
		* qHyperCube
		* qListObject
		* qPivotTable
		* qExpressions
	* Overcome default behavior
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

## Part IV: Deployment of Qlik Sense Visualization Extensions
* [Deployment checklist](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-04/01-Deployment-Checklist.md)
* XX Setting up a Robust Development Environment
	* Using Less
	* Automatically deploy and zip
	* Versioning

## Part V: Advanced Techniques
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

## Part VI: Real World Examples
* XX Communicating with backend services
* XX An advanced visualization extension based on D3
* XX Embedding real-time communication

## Part VII: How To
* How To
	* [... use Bootstrap styles in Qlik Sense visualization extensions](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-07/5000-Using-Bootstrap-CSS-in-Visualization-Extensions.md)

## Part VIII: Tools
* XX Tools
	* Tools: Manage Your Extensions

	
## Part IX: Appendix
* [Appendix:](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-09/1000-Appendix.md)
	* [FAQ & Troubleshooting](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-09/1002-Troubleshooting-FAQ.md)
	* [Allowed Mime Types in Qlik Sense 2.1.1](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-09/1004-Allowed-Mime-Types-2.1.1.md)
	* branch.qlik.com
	* Basic Introduction to git & GitHub
	* How to publish your extension to GitHub & branch.qlik.com
	* Npm Integration
	* Programmatic Deployment of Qlik Sense Extensions
	* What's New
		* [What's New in Qlik Sense 1.1](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-09/2011-Appendix-Whats-New-in-Qlik-Sense-1.1.md)
		* [What's New in Qlik Sense 2.1.1](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-09/2013-Appendix-Whats-New-in-Qlik-Sense-2.1.1.md)
	* Qlik Sense Extension Related Resources
	* [Resources](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-09/1001-Appendix-Resources.md)
	

---
**Qlik Sense Visualization Extension Tutorial**, Version 0.13.0<br/>
Last update: 2015-06-16<br/>

[Overview of all chapters](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/readme.md)