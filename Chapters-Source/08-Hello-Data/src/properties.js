define( [], function () {
	'use strict';

	// Return values
	return {
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
	};

} );
