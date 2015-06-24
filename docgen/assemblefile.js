'use strict';

// node libs
var path = require( 'path' );
var fs = require( 'fs' );

// external libs
var assemble = require( 'assemble' );
var debug = require( 'gulp-debug' );
var extend = require( 'extend-shallow' );
//var extname = require( 'gulp-extname' );
var glob = require( 'glob' );
var less = require( 'gulp-less' );
var yaml = require( 'js-yaml' );
var logger = require( './lib/utils/logger.js' );
var del = require( 'del' );
var concat = require( 'gulp-concat' );

var nodeInspector = require('gulp-node-inspector');

// experimental
var sitemap = require( 'gulp-sitemap' );
var filelist = require( 'gulp-filelist' );

// ****************************************************************************************
// Config file
// ****************************************************************************************
var cfg = yaml.load( fs.readFileSync( path.join( __dirname, './assemble-config.yml' ), 'utf-8' ) );
//console.log( 'cfg >> ', cfg );
console.log( 'cfg.data >> ', cfg.data );
assemble.data( cfg.data );

// ****************************************************************************************
// Helpers
// ****************************************************************************************
assemble.helper( 'markdown', require( 'helper-markdown' ) );
assemble.helper( 'toc', require( 'helper-toc' )() );

//var helperFiles = glob.sync( assembleCfg.options.helperFiles );
//logger.silly( 'helperFiles', helperFiles );
//var helpers = helperFiles.reduce( function ( acc, fp ) {
//	logger.silly( 'fp', fp );
//	return extend( acc, require( path.resolve( fp ) ) );
//}, {} );

assemble.helpers( require( 'helper-hybrid' )( 'markdown' ) );
//assemble.helpers( require('handlebars-helpers'));
//assemble.helpers( require('helper-related'));
//assemble.helper( 'include', require('handlebars-helper-include'));
//assemble.helper( 'partial', require('handlebars-helper-partial'));

// ****************************************************************************************
// Assemble middleware
// ****************************************************************************************
//assemble.option( 'middleware', ['assemble-middleware-drafts'] );

// ****************************************************************************************
// Assemble options
// ***************************************************************************************
assemble.engine( '.md', require( 'engine-assemble' ) );

assemble.layouts( cfg.options.layouts );
assemble.set( 'layouts', cfg.options.layouts );
assemble.option( 'layout', cfg.options.defaultLayout );

assemble.create( 'doc' );
assemble.docs( './../docs/includes/toc.md' );

// ****************************************************************************************
// Assemble data
// ****************************************************************************************

// ****************************************************************************************
// Assemble tasks
// ****************************************************************************************

assemble.task('debug', function() {
	assemble.src([])
		.pipe(nodeInspector());
});

assemble.task( 'clean:tutorial', function ( cb ) {
	del.sync( [
		'./../tutorial/**/*'
	], {force: true} );
	cb();
} );

assemble.task( 'assets', function () {
	return assemble.copy( cfg.images.src, cfg.images.target );
} );

assemble.task( 'readme', function () {
	return assemble.src( './../docs/includes/README.md' )
		.on( 'data', function ( data ) {
			//console.log( 'doc', assemble.views.docs );
		} )
		.pipe( concat( 'README.md' ) )
		.pipe( assemble.dest( './../' ) );
} );

assemble.task( 'tutorial', function () {
	assemble.src( './../docs/**/*.md' )
		.pipe( debug() )
		.pipe( assemble.dest( cfg.docs.target ) )
} );

//assemble.task( 'readme', function () {
//	assemble.src( './../docs/.README.md' )
//		.pipe( concat( 'README.md' ) )
//		.pipe( debug())
//		.pipe( assemble.dest( './../' ) )
//} );

// Noop
//assemble.task( 'sitemap', function () {
//	assemble.src( './../docs/**/*.md' )
//		.pipe( debug() )
//		.pipe( sitemap( {siteUrl: 'http://www.foo.bar', fileName: 'sitemap.xml'} ) )
//		.pipe( assemble.dest( './../' ) );
//} );

// OK, for a single file, see https://github.com/assemble/assemble/issues/715
//assemble.postRender( /\.(md|png)$/, function ( file, next ) {
//	// you might need to use `file.data.layout`
//	// file.relative
//	// file.base
//	// file.path
//	//logger.silly( 'file', file.relative );
//	//files.push( file.path );
//	next( null, file );
//} );

//assemble.task( 'filelist', function () {
//	assemble.src( './../docs/**/*.md' )
//		.pipe( debug() )
//		.pipe( filelist() )
//		.pipe( assemble.dest( './../filelist.json' ) )
//} );

//assemble.task( 'git:add', function () {
//	assemble.src( './../tutorial/**/*' )
//		.pipe( wait( 1500 ) )
//		.pipe( gulpGit.add() )
//		.pipe( assemble.dest( './../tutorial' ) )
//} );

assemble.task( 'default', ['clean:tutorial', 'assets', 'tutorial', 'readme'] );