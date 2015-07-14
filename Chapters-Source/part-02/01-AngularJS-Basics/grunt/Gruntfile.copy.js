/*global module*/
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	return {
		options: {
			processContentExclude: ['**/*.{png,gif,jpg,ico,psd}']
		},
		copy_to_dist_dev: {
			expand: true,                   // allow dynamic building
			cwd: '../src/',                 // change base dir
			//src: ['**', '!docs/**'],      // source files mask
			src: ['**'],
			dest: '../dist_dev/',           // destination folder
			flatten: false                  // remove all unnecessary nesting
		},
		copy_to_dist_release: {
			expand: true,                   // allow dynamic building
			cwd: '../src/',                 // change base dir
			//src: ['**', '!docs/**'],      // source files mask
			src: ['**'],
			dest: '../dist/',               // destination folder
			flatten: false                  // remove all unnecessary nesting
		},
		copy_to_desktop_dev: {
			expand: true,
			cwd: '../dist_dev/',
			src: '**',
			dest: '<%= projectconfig.general.LocalExtensionPath%>/<%= projectconfig.general.ExtensionNamespace%><%= projectconfig.general.ExtensionNameSafe%>/'
		},
		copy_to_desktop_release: {
			expand: true,
			cwd: '../dist/',
			src: '**',
			dest: '<%= projectconfig.general.LocalExtensionPath%>/<%= projectconfig.general.ExtensionNamespace%><%= projectconfig.general.ExtensionNameSafe%>/'
		}
	};
};
