/*global module,define,require */
/*jshint
 camelcase: false
 */
var fs = require( "fs" );

module.exports = function (grunt) {

    grunt.option['debug'] = false;

    var cfg = {};
    // parse all configured tasks automatically:
    fs.readdirSync( "./" ).forEach( function ( file ) {
        if ( file.indexOf( "Gruntfile." ) === 0 && file !== "Gruntfile.js" ) {
            var name = file.split( "Gruntfile." )[1].split( ".js" )[0];
            cfg[name] = require( "./Gruntfile." + name )( grunt );
        }
    } );

	grunt.initConfig( cfg );

	grunt.config('projectconfig', grunt.file.readYAML('grunt-config.yml'));

	/**
	* Add grunt tasks to a given task list.
	*/
	function addTask( taskList, task, condition ) {

		if (arguments.length  < 3) {
			condition = true;
		}

		if ( condition ) {
			taskList.push( task );
		}
	}

	// ****************************************************************************************
	// "dev" Task
	// ****************************************************************************************
	var devTasks = [];

	// Clean 'dist' and copy all relevant files to 'dist'
    addTask( devTasks, 'clean:empty_dist_dev');
    addTask( devTasks, 'copy:copy_to_dist_dev');

    // Replacements
    addTask( devTasks, 'replace:general_dev');
    addTask( devTasks, 'replace:dev');

    // JSHint
    addTask( devTasks, 'jshint', cfg.projectconfig.dev.jshint);

    // Less Support
    addTask( devTasks, 'less:dev', cfg.projectconfig.setup.lessSupport );
    //addTask( devTasks, 'less:allInPlace_dev', cfg.projectconfig.setup.lessSupport );

	// Cleanup
    addTask( devTasks, 'clean:dev');
    addTask( devTasks, 'cleanempty:all');

	// Deploy to Qlik Sense Desktop
	addTask( devTasks, 'clean:empty_desktop', process.platform === 'win32');
	addTask( devTasks, 'copy:copy_to_desktop_dev', process.platform === 'win32');

	// Zip to xxx_dev.zip
	addTask( devTasks, 'compress:dev');

	grunt.registerTask( 'dev', devTasks );


	// ****************************************************************************************
	// "release" Task
	// ****************************************************************************************

	var releaseTasks = [];

	// Clean 'dist' and copy all relevant files to 'dist'
	addTask( releaseTasks, 'clean:empty_dist');
	addTask( releaseTasks, 'copy:copy_to_dist_release');

	// Replacements
	addTask( releaseTasks, 'replace:general_release');
	addTask( releaseTasks, 'replace:release');

	addTask( releaseTasks, 'less:release', cfg.projectconfig.setup.lessSupport);

	// Cleanup
	addTask( releaseTasks, 'clean:release');
	addTask( releaseTasks, 'cleanempty:all');

	// Optimization & Uglification
	addTask( releaseTasks, 'uglify:release');

	// JSHint
    addTask( devTasks, 'jshint', cfg.projectconfig.dev.jshint);


	// Deploy to Qlik Sense Desktop
	addTask( releaseTasks, 'clean:empty_desktop', process.platform === 'win32');
	addTask( releaseTasks, 'copy:copy_to_desktop_release', process.platform === 'win32');

	// Zip
	addTask( releaseTasks, 'compress:release');
	addTask( releaseTasks, 'compress:release_latest');

    grunt.registerTask('release', releaseTasks);

	// ****************************************************************************************
	// "source" Task
	// ****************************************************************************************
    grunt.registerTask('source', [
        'compress:source'
    ]);


    // ****************************************************************************************
    // "default" Task
    // ****************************************************************************************
    grunt.registerTask('default', 'dev');

};