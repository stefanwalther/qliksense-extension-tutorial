# Appendix - What&#x27;s New in Qlik Sense 2.1.1



## Introduction of Capability APIs

Before Qlik Sense 2.1.1 the term "Mashup API" was used for several APIs which can be used in both Mashups and Visualization Extensions.
Since this is misleading the term "Capability API" was introduced which describes much better how these APIs can be used.

Capability APIs are small, granular APIs with a specific purpose. Some of them can be used inside Qlik Sense (visualization extensions), some of them only outside Qlik Sense (mashup scenarios), but most of them are supported in both environments.
Therefore a usage matrix was published with Qlik Sense 2.1.1 which will then in the future be extended a soon as new Capability APIs will be added to the product.

![](images/2013_usage-matrix.png)  

**Reference:**  
[Capability APIs on "Qlik Sense for Developers, 2.1.1"](http://help.qlik.com/sense/2.1/en-us/developer/Subsystems/APIs/Content/mashup-api-reference.htm)

## New APIs
With Qlik Sense 2.1.1 two new Capability APIs have been added:

* Navigation API
* Table API

### Navigation API
The Navigation API is meant to be used in visualization extensions to navigate in the current app.
Common scenarios are:

* Jump to the next sheet (`qlik.navigation.nextSheet()`)
* Jump to the previous sheet (`qlik.navigation.prevSheet()`)
* Jump to a specific sheet, defined by its sheetId (`qlik.navigation.gotoSheet( sheetId )`)
* Get the id of the current sheet (`qlik.navigation.getCurrentSheetId()`)
* Jump to a story, defined by its storyId (`qlik.navigation.gotoStory( storyId )`)
* Switch to edit-mode or analysis-mode (`qlik.navigation.switchMode()`)
* Get the current mode (`qlik.navigation.getMode()`)
* SEt the mode (`qlik.navigation.setMode('EDIT' || 'ANALYSIS')`)
* Check if a given mode is allowed (`qlik.navigation.isModeAllowed()`)

See [here](http://help.qlik.com/sense/2.1/en-us/developer/Subsystems/APIs/Content/NavigationAPI/NavigationAPI.htm) for the detailed reference.

### Table API

The Table API can be seen as a sugar layer to make it easier to work with HyperCubes as the online reference explains:

> The Table API allow developers to work with tabular data returned from the Qlik engine without having deeper knowledge of internal constructs, like for example a Hypercube. From a technical perspective it is a wrapper around Hypercube data from engine. Notification is sent when data is available. Notification will be triggered after each update. To receive notification bind a listener on `OnData` of `QTable` instance.

Some examples and the online reference can be found in [Qlik Sense for Developers 2.1.1, Table API](http://help.qlik.com/sense/2.1/en-us/developer/Subsystems/APIs/Content/TableAPI/qlik-table-interface.htm).

## API Changes

### Variable API
Because of underlaying changes in the [Qlik Engine API](http://help.qlik.com/sense/2.1/en-us/developer/Subsystems/EngineAPI/Content/introducing-engine-API.htm) also some changes in the Capability API "Variable API" (`qlik.app.variable`) have been made:

* [Extended property support](http://help.qlik.com/sense/2.1/en-us/developer/Subsystems/APIs/Content/MashupAPI/Methods/create-variable-method.htm) for `app.variable.create`
* Added [ability to create a session variable](http://help.qlik.com/sense/2.1/en-us/developer/Subsystems/APIs/Content/MashupAPI/Methods/createSessionVariable-method.htm) (`createSessionVariable`)
* Added method to [retrieve a variable by its id](http://help.qlik.com/sense/2.1/en-us/developer/Subsystems/APIs/Content/MashupAPI/Methods/get-variable-method.htm) (`get`)
* Added method to [retrieve a variable by its name](http://help.qlik.com/sense/2.1/en-us/developer/Subsystems/APIs/Content/MashupAPI/Methods/getByName-variable-method.htm) (`getByName`)
* `setContent` has been deprecated
* Added method to [set the numeric value of a variable](http://help.qlik.com/sense/2.1/en-us/developer/Subsystems/APIs/Content/MashupAPI/Methods/setNumValue-variable-method.htm) (`setNumValue`)
* Added method to [set the string value of a variable](http://help.qlik.com/sense/2.1/en-us/developer/Subsystems/APIs/Content/MashupAPI/Methods/setStringValue-variable-method.htm) (`setStringValue`)


Note:
Usage of `getContent` and is fully backwards-compatible, `setContent` stil works, but is deprecated, `setStringValue` or `setNumValue` should be used instead.


---
**Qlik Sense Visualization Extension Tutorial**, Version 0.13.0<br/>
Last update: 2015-11-02<br/>

[Overview of all chapters](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/readme.md)