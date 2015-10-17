# Deployment Checklist



**Table of Contents**

<!-- toc -->

- [Some basic rules to follow](#some-basic-rules-to-follow)
- [Test Qlik Sense Server](#test-qlik-sense-server)
- [Automate it!](#automate-it-)

<!-- tocstop -->

---

## Some basic rules to follow
* Remove all `console.%()` statements.
* Remove all `debugger;` statements (!!!{).

>**Hint:**
> Use any automated deployment system like [grunt](http://gruntjs.com/) or [gulp](http://gulpjs.com/) to automate this task!
  
## Test Qlik Sense Server
Ensure that you test your solution also on Qlik Sense Server, not only in the desktop environment.

## Automate it!

One the one hand it's fine to have a deployment checklist, but on the other hand stupid, repetitive work should be minimized.
So I personally prefer to automate as many tasks in my daily work as possible.

Have a look at the following projects to get an idea of how repetitive tasks related to extension development can be automated:

* [sense-go](https://github.com/stefanwalther/sense-go)
* [generator-qsextension](https://github.com/stefanwalther/generator-qsExtension)

---
**Qlik Sense Visualization Extension Tutorial**, Version 0.12.8<br/>
Last update: 2015-07-17<br/>

[Overview of all chapters](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/readme.md)