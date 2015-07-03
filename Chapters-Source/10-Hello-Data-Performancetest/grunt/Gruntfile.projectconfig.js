/*global module, require*/
var YAML = require( 'yamljs' );
module.exports = function ( grunt ) {
	'use strict';
	return YAML.load( 'grunt-config.yml' );
};