# 



When using AngularJS based visualization extensions you can consume the following events being exposed to the model of the extension object:

* **`Validated`** - Occurs if the data has been recalculated and new valid data is available.
* **`Invalidated`** - Occurs if the data has been invalidated, for example by a user selection. Do not use the data. 
* **`Aborted`** - Occurs if the calculation has been aborted
* **`Cancelled`** - Occurs if the calculation has been cancelled.
* **`Closed`** - Connection to the Qlik engine has been closed for this object.

## Usage example

```js
controller: ['$scope', function ( $scope ) {
	
	/**
	 * Validated event.
	 * @description The data has been recalculated and new valid data is available.
	 */
	$scope.component.model.Validated.bind( function () {
		console.info( 'Validated' );
	} );

	/**
	 * Invalidated event.
	 * @description The data has been invalidated, for example by a user selection. Do not use the data.
	 */
	$scope.component.model.Invalidated.bind( function () {
		console.info( 'Invalidated' );
	} );

	/**
	 * Aborted event.
	 * @description Calculation has been aborted.
	 */
	$scope.component.model.Aborted.bind( function () {
		console.info( 'Aborted' );
	} );

	/**
	 * Cancelled event.
	 * @description Calculation has been cancelled.
	 */
	$scope.component.model.Cancelled.bind( function () {
		console.info( 'Cancelled' );
	} );
	
	/**
	 * Closed event.
	 * @description Connection to the Qlik engine has been closed for this object.
	 */
	$scope.component.model.Closed.bind( function () {
		console.info( 'Closed' );
	} );
}
```

---
**Qlik Sense Visualization Extension Tutorial**, Version 0.5.0<br/>


[Table of Contents](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/readme.md)