// Docs related to helpers:
// - https://github.com/assemble/assemble/issues/635

'use strict';

var templates = {
	upper: function ( str ) {
		return str.toUpperCase();
	}
};

// Export name is the name of the helper
// The file is named helper-<helper name>.js
module.exports = templates;