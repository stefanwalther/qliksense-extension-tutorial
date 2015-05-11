define( [
		'./properties',
		'./initialproperties',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css'
	],
	function ( props, initProps, extensionUtils, cssContent ) {
		'use strict';

		return {

			// Properties can either be defined inline or by loading a separate file
			definition: {

			},

			// Loading the external file
			//definition: props,

			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			paint: function ( $element, layout ) {

				console.groupCollapsed( 'Properties defined' );
				console.log( layout.props );
				console.groupEnd();

			}
		};

	} );
