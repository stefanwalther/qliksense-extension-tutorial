---
title: "The Angular Way: Basics"
lastUpdate: ""
type: chapter
order: -1
draft: true
---

## Introducing AngularJS

AngularJS

* is a framework to build dynamic web applications
* is a MVC or MV* framework
* has a strong focus on data binding and extends HTML
* plays nicely together with other JavaScript libraries like jQuery

Some of the key concepts of AngularJS:

* Templating & Data Binding
* Controllers
* Directives
* Services
* Dependency Injection
* Filters
* Routing
* Testability

## AngularJS and Qlik Sense
The Qlik Sense client uses under the hood AngularJS, that's first good to know. When it comes to use AngularJS also to develop your visualization extensions it's important to understand that you cannot use all of the concepts of AngularJS out of the box but the most important ones.

### Some background information
One of the core-concepts of AngularJS is that an AngularJS application [gets bootstraped](https://docs.angularjs.org/guide/bootstrap). So does also the Qlik Sense client and during that process an AngularJS module called `qvangular` get created.

This qvangular module takes - among other things - care of two main aspects:

* that AngularJS and RequireJS plays nicely together
* that visualization extensions can be loaded at runtime without bootstrapping the application

### AngularJS concepts which CAN be used in Qlik Sense

* Directives
* Templates
* Filters
* Re-using AngularJS internal methods
* Data-binding
* The entire scope concept

### AngularJS concepts which CANNOT be used in Qlik Sense
The following cannot be done when developing a Qlik Sense visualization extensions in Qlik Sense:

* Loading and re-using entire AngularJS **modules** or **factories**  
(You will have to modify them to work as directives or services)
* Bootstrapping the application

