/*global module*/
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-compress' );
	return {

		dev: {
			options: {
				archive: '../build/<%=projectconfig.general.ExtensionNamespace%><%=projectconfig.general.ExtensionNameSafe.toLowerCase()%>_dev.zip'
			},
			files: [
				{
					expand: true,
					cwd: '../dist_dev/',
					src: ['**/*.*'],
					dest: '/'
				}
			]
		},
		release: {
			options: {
				archive: '../build/<%=projectconfig.general.ExtensionNamespace%><%=projectconfig.general.ExtensionNameSafe.toLowerCase()%>_v<%=projectconfig.general.Version%>.zip'
			},
			files: [
				{
					expand: true,
					cwd: '../dist/',
					src: ['**/*.*'],
					dest: '/'
				}
			]
		},
		release_latest: {
			options: {
				archive: '../build/<%=projectconfig.general.ExtensionNamespace%><%=projectconfig.general.ExtensionNameSafe.toLowerCase()%>_latest.zip'
			},
			files: [
				{
					expand: true,
					cwd: '../dist/',
					src: ['**/*.*'],
					dest: '/'
				}
			]
		},
		source: {
			options: {
				archive: '../build/<%=projectconfig.general.ExtensionNamespace%><%=projectconfig.general.ExtensionNameSafe%>_src_v<%=projectconfig.general.Version%>.zip'
			},
			files: [
				{
					expand: true,
					cwd: '../',
					src: ['src/**/*', 'grunt/**/*', '!grunt/node_modules/**/*'],
					dest: '/'
				}
			]
		}
	};
};