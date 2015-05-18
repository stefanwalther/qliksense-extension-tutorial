define( [], function () {
	'use strict';

	// ****************************************************************************************
	// Custom components
	// ****************************************************************************************

	var myTextBox = {
		ref: "props.myTextBox",
		label: "My Text Box",
		type: "string",
		expression: "optional"
	};
	var myTextBox2 = {
		ref: "props.myTextBox2",
		label: "My Text Box 2",
		type: "string",
		expression: "optional"
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Appearance Panel
	var appearancePanel = {
		uses: "settings",
		items: {
			settings: {
				type: "items",
				label: "My header, containing text boxes",
				items: {
					myTextBox: myTextBox,
					myTextBox2: myTextBox2
				}
			}
		}
	};

	// Return overall definition of the property accordion
	return {
		type: "items",
		component: "accordion",
		items: {
			appearance: appearancePanel
		}
	};

} );
