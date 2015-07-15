/*global module*/
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	return {

		dev: {
			options: {
				force: true
			},
			src: [
				'../dist_dev/**/*.bak',
				'../dist_dev/**/*.less',
				'../dist_dev/**/*.tmpl'
			],
			filter: 'isFile'
		},
		release: {
			options: {
				force: true
			},
			src: [
				'../dist/**/*.bak',
				'../dist/**/*.less',
				'../dist/**/*.tmpl'
			],
			filter: 'isFile'
		},
		empty_dist_dev: {
			options: {
				force: true
			},
			src: [
				'../dist_dev/**/*'
			]
		},
		empty_dist: {
			options: {
				force: true
			},
			src: [
				'../dist/**/*'
			]
		},
		empty_desktop: {
			options: {
				force: true
			},
			src: [
				'<%=projectconfig.general.ExtensionNamespace%>/<%=projectconfig.general.ExtensionNameSafe%>/**/*'
			]
		}
	};
};