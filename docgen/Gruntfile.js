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
					]
					//partials: 'templates/partials/**/*.hbs',
					//helpers: 'templates/helpers/**/*.hbs',

				},
				files: [{
					flatten: false,
					expand: true,
					cwd: './../docs/',
					src: ['**/*.md'],
					dest: './../tutorial/'
				}]
			}
		}

	} );

	grunt.loadNpmTasks( 'assemble' );
	grunt.registerTask( 'default', ['assemble'] );

};

