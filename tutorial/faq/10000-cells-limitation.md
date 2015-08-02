# 10,000 cells limitation



There is a persistent rumor that one can only load 10,000 data-cells when working with a HyperCube using the Client APIs (in visualization extensions or mash-ups).

**This rumor is not true!!!**

Instead it's true that you can only fetch 10,000 records **per data page** from the Engine, but you can certainly request to get more data pages.
So it's completely up to the developer how many data-points from the data-source are used in the UI.

Have a look into the official documentation to learn more about the paging concept of Qlik Sense:
http://betahelp.qliktech.com/sense/2.0/en-us/developer/Subsystems/Platform/Content/Concepts/Paging.htm

---
**Qlik Sense Visualization Extension Tutorial**, Version 0.12.7<br/>


[Overview of all chapters](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/readme.md)