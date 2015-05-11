define( [], function () {
	'use strict';


	var dimensions = {
		uses: "dimensions"
	};

	var measures = {
		uses: "measures"
	};

	var sorting = {
		uses: "sorting"
	};

	var addons = {
		uses: "addons"
	};

	// Appearance Panel
	var appearancePanel = {
		uses: "settings"
	};

	// Return values
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: dimensions,
			measures: measures,
			sorting: sorting,
			// We'll use addons later on, by default not addons are define,
			// so the section will remain empty
			//addons: addons,
			appearance: appearancePanel

		}
	};

} );
