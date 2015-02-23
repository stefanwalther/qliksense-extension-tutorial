define( [
		'jquery'
	],
	function ( $ ) {
		'use strict';

		return {

			paint: function ( $element, layout ) {

				$element.empty();
				var $helloWorld = $( document.createElement( 'div' ) );
				$helloWorld.html( 'Hello World from the extension "01-ExtTut-HelloWorld"' );
				$element.append( $helloWorld );

			}
		};
	} );