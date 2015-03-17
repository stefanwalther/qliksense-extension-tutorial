# Appendix



In Qlik Sense 1.1 the following additions have been made to APIs which can be easily used within visualization extensions:

**qlik**
* `qlik.callRepository` ([&#8658; doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/callRepository-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik%7C_____1))    
* `qlik.getExtensionList` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getExtensionList-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik%7C_____4))    
* `qlik.getGlobal` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getGlobal-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik%7C_____5))  

**qlik.app**  
* `qlik.app.addAlternateState` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/addAlternateState-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____1))  
* `qlik.app.close` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/close-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____4))  
* `qlik.app.destroySessionObject` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/destroySessionObject-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____8))  
* `qlik.app.doReload` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/doReload-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____9))  
* `qlik.app.doSave` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/doSave-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____10))  
* `qlik.app.getAppLayout` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getAppLayout-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____13))  
* `qlik.app.getFullPropertyTree` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getFullPropertyTree-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____15))  
* `qlik.app.getList` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getList-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____16))  
  * new type: `SnapshotList`
  * new type: `MediaList`
  * new type: `Sheet`
  * new type: `MasterObject`

* `qlik.app.getObject` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getObject-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____17))  
  * elem - now also an element Id can be passed
  * options - new option `noInteractions`
* `qlik.app.getSnapshot` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getSnapshot.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____19))  
* `qlik.app.removeAlternateState` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/removeAlternateState-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____21))  
* `qlik.app.searchAssociations` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/searchAssociations-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____22))  
* `qlik.app.searchSuggest` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/searchSuggest-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____23))  
* `qlik.app.selectAssociations` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/selectAssociations-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app%7C_____24))  

**qlik.app.field**
* `qlik.app.field.selectValues` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/selectValues-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.app.field%7C_____10))  

**qlik.global**  
* `qlik.global`
* `qlik.global.cancelReload` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/cancelReload-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.global%7C_____1))  
* `qlik.global.getAppList` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getAppList-global-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.global%7C_____2))  
* `qlik.global.getAuthenticatedUser` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getAuthenticatedUser-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.global%7C_____3))  
* `qlik.global.getProgress` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getProgress-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.global%7C_____4))  
* `qlik.global.getQTProduct` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getQTProduct-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.global%7C_____5))  
* `qlik.global.getQvVersionq` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/getQvVersion-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.global%7C_____6))  
* `qlik.global.isPersonalMode` (&#8658; [doc](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingWebsites/API/Methods/isPersonalMode-method.htm%3FTocPath%3DQlik%2520Sense%2520Workbench%7CAPI%2520reference%7CQlik%2520Sense%2520Mashups%2520API%2520reference%7Cqlik.global%7C_____7))  


---
Qlik Sense Extension Tutorial, Version 0.1.8

[Table of Contents](00-TOC.md)