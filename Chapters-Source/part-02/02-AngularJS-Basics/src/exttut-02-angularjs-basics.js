define( [
		'./properties',
		'./initialproperties',
		'text!./template.ng.html'
	],
	function ( props, initProps, ngTemplate ) {
		'use strict';

		return {
			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {
				$scope.myTitle = 'This is my AngularJS table';
				console.log('layout', $scope.layout);
			}]
		};
	} );
