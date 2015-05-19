'use strict';

module.exports = function ( grunt ) {

	var config = grunt.file.readYAML( './config.yml' );

	grunt.initConfig( {

		assemble: {
			tutorial: {
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
					helpers: 'lib/helpers/**/*.js'

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
			tutorial_images: {
				files: [{
					expand: true,
					cwd: './../docs/images/',
					src: ['**/*.png'],
					dest: './../tutorial/images/',
					filter: 'isFile'
				}]
			}
		},

		clean: {
			options: {
				force: true
			},
			tutorial: {
				src: [
					'./../tutorial/**/*.md'
				],
				filter: 'isFile'
			}
		},

		// Always add files in /tutorial/
		gitadd: {
			tutorial: {
				files: [{
					expand: true,
					cwd: './../tutorial/',
					src: '**/*.*',
					dest: './../tutorial/'
				}]
			}
		}

	} );

	grunt.loadNpmTasks( 'assemble' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-git' );
	grunt.registerTask( 'default', [
		'clean:tutorial',
		'assemble:tutorial',
		'copy:tutorial_images',
		'gitadd'
	] );

};

