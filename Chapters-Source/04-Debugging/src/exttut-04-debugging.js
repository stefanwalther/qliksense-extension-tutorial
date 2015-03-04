define( [],
	function () {
		'use strict';

		return {
			paint: function ( $element, layout ) {

				var err = {
					message: 'Something went wrong',
					errCode: 'bla'
				};

				console.info( 'We are re-painting the extension' );
				console.error( 'Oops, we haven an error', err );
				console.log( 'We are here' );
				console.log( 'layout', layout );

			}
		};

	} )
;
