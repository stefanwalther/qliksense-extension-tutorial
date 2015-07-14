/*global module*/
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-replace' );

	/**
	 * Replace variables like the Urls for the help, the version, etc.
	 */
	return {

		general_dev: {
			options: {
				patterns: [
					{
						json: grunt.file.readYAML( 'gruntReplacements.yml' )
					},
					{
						match: "version",
						replacement: "<%= projectconfig.general.Version %>"
					}

				]
			},
			files: [
				{
					expand: true,
					flatten: false,
					src: ['../dist_dev/**/*.*', '!../dist_dev/**/*.{min.js,png,gif,jpg,ico,psd,eot,svg,ttf,woff}'],
					dest: '../dist_dev/'
				}
			]
		},
		general_release: {
			options: {
				patterns: [
					{
						json: grunt.file.readYAML( 'gruntReplacements.yml' )
					},
					{
						match: "version",
						replacement: "<%= projectconfig.general.Version %>"
					}
				]
			},
			files: [
				{
					expand: true,
					flatten: false,
					src: ['../dist/**/*.*', '!../dist/**/*.{min.js,png,gif,jpg,ico,psd,eot,svg,ttf,woff}'],
					dest: '../dist/'
				}
			]
		},
		dev: {
			options: {
				patterns: [
					{
						json: grunt.file.readYAML( 'gruntReplacements_dev.yml' )
					}
				]
			},
			files: [
				{
					expand: true,
					flatten: false,
					src: ['../dist_dev/*.*', '!../dist_dev/**/*.{min.js,png,gif,jpg,ico,psd,eot,svg,ttf,woff}'],
					dest: '../dist_dev/'
				}
			]
		}
		,
		release: {
			options: {
				patterns: [
					{
						json: grunt.file.readYAML( 'gruntReplacements_release.yml' )
					}
				]
			}
			,
			files: [
				{
					expand: true,
					flatten: false,
					src: ['../dist/**/*.*', '!../dist/**/*.{min.js,png,gif,jpg,ico,psd,eot,svg,ttf,woff}'],
					dest: '../dist/'
				}
			]
		}
	}
		;
}
;
