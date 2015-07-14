define( [
		'jquery'
	],
	function ( $ ) {
		'use strict';

		return {

			// Define how our property panel looks like
			definition: {
				type: "items",
				component: "accordion",
				items: {
					appearancePanel: {
						uses: "settings",
						items: {
							MyStringProp: {
								ref: "myDynamicOutput",
								label: "Hello World Text",
								type: "string",
								defaultValue: "Hello World"
							}
						}
					}
				}
			},
			// Paint/Rendering logic
			paint: function ( $element, layout ) {

				console.log( layout );

				$element.empty();
				var $helloWorld = $( document.createElement( 'div' ) );
				$helloWorld.html( 'Hello World from the extension "05-ExtTut-HelloWorld"<br/>' );
				$element.append( $helloWorld );
			}
		};
	} );