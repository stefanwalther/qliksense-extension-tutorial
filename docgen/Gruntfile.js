'use strict';

module.exports = function ( grunt ) {

	var config = grunt.file.readYAML( './config.yml' );

	grunt.initConfig( {

		assemble: {
			project: {
				options: {
					trace: true,
					layoutdir: config.assemble.layoutdir,
					layout: config.assemble.layout,
					ext: '.md',
					data: './config.yml',
					plugins: [
						//'assemble-middleware-contextual'
					],
					//partials: 'templates/partials/**/*.hbs',
					helpers: 'templates/helpers/**/*.js'

				},
				files: [{
					flatten: false,
					expand: true,
					cwd: './../docs/',
					src: ['**/*.md'],
					dest: './../tutorial/'
				}]
			}
		},

		copy: {
			copy_images: {
				files: [{
					expand: true,
					cwd: './../docs/images/',
					src: ['**/*.png'],
					dest: './../tutorial/images/',
					filter: 'isFile'
				}]
			}
		}

	} );

	grunt.loadNpmTasks( 'assemble' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.registerTask( 'default', ['assemble', 'copy:copy_images'] );

};

