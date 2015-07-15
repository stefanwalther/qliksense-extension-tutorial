/*global module*/
/*jshint
 camelcase: false
 */
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	return {

		options: {
			mangle: '<%= projectconfig.release.uglify.mangle%>',
			beautify: '<%= projectconfig.release.uglify.beautify%>',
			preserveComments: '<%= projectconfig.release.uglify.preserveComments%>',
			compress: {
				drop_console: '<%= projectconfig.release.uglify.drop_console%>'
			}
		},
		release: {
			files: [
				{
					src: ['./../dist/**/*.js', '!./../dist/**/*.min.js'],
					dest: './../dist/',
					expand: true
				}
			]
		}
	};
};