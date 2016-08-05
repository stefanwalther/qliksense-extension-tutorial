---
title: "AngularJS Recipes"
draft: true
---

- [How to get a reference to an AngularJS service](#how-to-get-a-reference-to-an-angularjs-service)

---

## How to get a reference to an AngularJS service

If you want to work with one of the existing AngularJS services, you need a get a reference.

```js
define( [
	'angular'
], function ( angular ) {

	// Get a reference to the $timeout service
	var $injector = angular.injector( ['ng'] );
    var $timeout = $injector.get( "$timeout" );
    
    // Your code, where you can now use $timeout
    
    });
```
