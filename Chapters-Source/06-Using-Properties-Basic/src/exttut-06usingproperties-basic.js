define( [
		'jquery',
		'./properties',
		'./initialproperties'
	],
	function ( $, props, initProps ) {
		'use strict';

		return {

			//definition: {
			//	type: "items",
			//	component: "accordion",
			//	items: {
			//		appearance: {
			//			uses: "settings"
			//		}
			//	}
			//},

			definition: {
				type: "items",
				component: "accordion",
				items: {
					dimensions: {
						uses: "dimensions"
					},
					measures: {
						uses: "measures"
					},
					sorting: {
						uses: "sorting"
					},
					appearance: {
						uses: "settings"
					}
				}
			},

			paint: function ( $element, layout ) {

				console.info( 'paint >> layout >> ', layout );

				//$element.empty();
				//var $msg = $( document.createElement( 'div' ) );
				//$msg.html( 'Just demonstrating default behavior of the property panel"' );
				//$element.append( $msg );

				// Output values from the property panel

				$element.empty();
				var $msg = $( document.createElement( 'div' ) );
				var html = '<b>Property values:</b><br/>';
				html += 'Title: ' + layout.title + '<br/>';
				html += 'SubTitle: ' + layout.subtitle + '<br/>';
				$msg.html( html );
				$element.append( $msg );

			}
		};

	} );
