/*global module*/
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	return {
		dev: {
			options: {
				jshintrc: ".jshintrc-dev",
				ignores: []
			},
			defaults: ["<%=projectconfig.jsSources.dev%>"]
		},
		release: {
			options: {
				jshintrc: ".jshintrc-release",
				ignores: []
			},
			defaults: ["<%=projectconfig.jsSources.release%>"]
		}

	};
};
