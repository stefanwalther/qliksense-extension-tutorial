define( [], function () {
	'use strict';

	var dimensions = {uses: "dimensions"};
	var measures = { uses: "measures" };
	var sorting = { uses: "sorting" };
	var addons = { uses: "addons" };
	var appearancePanel = {	uses: "settings" };
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: dimensions,
			measures: measures,
			sorting: sorting,
			appearance: appearancePanel
		}
	};
} );
