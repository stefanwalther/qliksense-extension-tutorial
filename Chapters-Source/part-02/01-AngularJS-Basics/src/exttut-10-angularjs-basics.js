define( [
		'jquery',
		/*'underscore',*/
		'./properties',
		'./initialproperties',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css'
	],
	function ( $, /*_,*/ props, initProps, extensionUtils, cssContent ) {
		'use strict';

		extensionUtils.addStyleToHeader( cssContent );

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			template: '',
			controller: ['$scope', function ( $scope ) {
			}]
		};

	} );
