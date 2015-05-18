/*global module*/
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-less' );
	return {

		// If used converts all the objects in place (mainly used for debugging purposes)
		allInPlace_dev: {
			options: {
				compress: false,
				yuicompress: false,
				optimization: 2,
				cleancss: false,
				paths: ['../dist_dev']
			},
			files: [{
				expand: true,
				cwd: "../dist_dev",
				src: ["**/*.less"],
				ext: ".css",
				dest: "../dist_dev"
			}]
		},
		dev: {
			options: {
				compress: '<%= projectconfig.dev.less.lessCompress%>',
				yuicompress: '<%= projectconfig.dev.less.lessYuiCompress%>',
				optimization: parseInt( 'projectconfig.dev.less.lessOptimization' ),
				cleancss: '<%= projectconfig.dev.less.lessCleanCss%>'
			},
			files: {
				"../dist_dev/lib/css/style.css": "../src/lib/less/_root.less"
			}
		},
		release: {
			options: {
				compress: '<%= projectconfig.release.less.lessCompress%>',
				yuicompress: '<%= projectconfig.release.less.lessYuiCompress%>',
				optimization: parseInt( 'projectconfig.release.less.lessOptimization' ),
				cleancss: '<%= projectconfig.release.less.lessCleanCss%>'
			},
			files: {
				"../dist/lib/css/style.css": "../src/lib/less/_root.less"
			}
		}
	};
};