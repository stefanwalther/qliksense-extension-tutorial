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

	var header1_item1 = {
		ref: "props.section1.item1",
		label: "Section 1 / Item 1",
		type: "string",
		expression: "optional"
	};
	var header1_item2 = {
		ref: "props.section1.item2",
		label: "Section 1 / Item 2",
		type: "string",
		expression: "optional"
	};

	var header2_item1 = {
		ref: "props.section2.item1",
		label: "Section 2 / Item 1",
		type: "string",
		expression: "optional"
	};
	var header2_item2 = {
		ref: "props.section2.item2",
		label: "Section 2 / Item 2",
		type: "string",
		expression: "optional"
	};

	// ****************************************************************************************
	// Sections definitions
	// ****************************************************************************************
	// Modify the Appearance Panel ( defined by `uses: "settings"`)
	var appearanceSection = {
		uses: "settings",
		items: {
			// Here the magic happens
			myNewHeader: {
				type: "items",
				label: "My header, containing text boxes",
				items: {
					myTextBox: myTextBox,
					myTextBox2: myTextBox2
				}
			}
		}
	};

	var myCustomSection = {
		//type: "items", //<== not necessary to define "items"
		component: "expandable-items",
		label: "My Accordion Section",
		items: {
			header1: {
				type: "items",
				label: "Header 1",
				items: {
					header1_item1: header1_item1,
					header1_item2: header1_item2
				}
			},
			header2: {
				type: "items",
				label: "Header 2",
				items: {
					header2_item1: header2_item1,
					header2_item2: header2_item2
				}
			}
		}
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Return overall definition of the property accordion
	return {
		type: "items",
		component: "accordion",
		items: {
			appearance: appearanceSection,
			customSection: myCustomSection
		}
	};

} );
