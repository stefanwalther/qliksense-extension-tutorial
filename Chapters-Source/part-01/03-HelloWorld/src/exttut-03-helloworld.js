define( [
		'jquery'
	],
	function ( $ ) {
		'use strict';

		return {

			paint: function ( $element, layout ) {

				var $helloWorld = $( document.createElement( 'div' ) );
				$helloWorld.html( 'Hello World from the extension "03-ExtTut-HelloWorld"<br/>' );
				$element.append( $helloWorld );

				// ****************************************************************************************
				// Solve the "multiply problem" - Lazy way
				// (uncomment the following lines if you want to test it)
				// ****************************************************************************************
				//$element.empty();
				//var $helloWorld = $( document.createElement( 'div' ) );
				//$helloWorld.attr( 'id', 'MyId');
				//$helloWorld.html( 'Hello World' );
				//$element.append( $helloWorld );

				// ****************************************************************************************
				// Solve the "multiply problem" - The smarter way
				// (uncomment the following lines if you want to test it)
				// ****************************************************************************************
				//var id = layout.qInfo.qId + '_helloworld';
				//var $helloWorld = $( '#' + id );
				//if ( !$helloWorld.length ) {
				//	console.log( 'No element found with the given Id, so create the element' );
				//	$helloWorld = $( document.createElement( 'div' ) );
				//	$helloWorld.attr( 'id', id );
				//	$helloWorld.html( 'Hello World' );
				//	$element.append( $helloWorld );
				//} else {
				//	console.log( 'Found an element with the given Id, so just change it' );
				//	$helloWorld.html( 'Hello World' );
				//}

			}
		};
	} );