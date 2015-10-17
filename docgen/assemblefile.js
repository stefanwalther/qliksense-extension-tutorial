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
var async = require( 'async' );

var nodeInspector = require( 'gulp-node-inspector' );

// experimental
var sitemap = require( 'gulp-sitemap' );
var f2Json = require( 'gulp-files-to-json' );

//toc
var toc = require( 'template-toc' );

// ****************************************************************************************
// Config file
// ****************************************************************************************
var cfg = yaml.load( fs.readFileSync( path.join( __dirname, './assemble-config.yml' ), 'utf-8' ) );

// var packageCfg = JSON.parse(fs.readFileSync( './../package.json'));
// cfg.data.version = packageCfg.version;

// console.log('cfg.data', cfg.data);

assemble.data( cfg.data );

// ****************************************************************************************
// Assemble middleware
// ****************************************************************************************

// ****************************************************************************************
// Assemble options
// ***************************************************************************************
assemble.engine( '.md}', require( 'engine-assemble' ) );
//assemble.enable('minimal config'); // Cave: necessary to get some gulp plugins working (see https://github.com/assemble/assemble/issues/717)

assemble.layouts( cfg.options.layouts );
assemble.set( 'layouts', cfg.options.layouts );
assemble.option( 'layout', cfg.options.defaultLayout );

assemble.create( 'doc' );
assemble.docs( './../docs/includes/toc.md' );

assemble.create( 'faq' );
assemble.faqs( './../docs/faq/*.md' );

// ****************************************************************************************
// Helpers
// ****************************************************************************************
assemble.helper( 'markdown', require( 'helper-markdown' ) );

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

assemble.asyncHelper( 'renderfaqs', function ( options, cb ) {

	//console.log('faqs');

	if ( typeof options === 'function' ) {
		cb = options;
		options = {};
	}
	var ctx = this.context;
	//console.log('views', this.app.views);
	//console.log('faqs', this.app.views.faqs);
	var views = this.app.views.faqs;
	var keys = Object.keys( views );

	async.map( keys, function ( key, next ) {

		//console.log('content', views[key]);

		views[key].render( ctx, function ( err, content ) {
			if ( err ) {
				return next( err );
			}

			next( null, content );
		} );
	}, function ( err, res ) {
		if ( err ) {
			return cb( err );
		}
		//console.log( res );
		cb( null, res.join( '\n' ) );
	} );
} );

// ****************************************************************************************
// Assemble preRender/postRender
// ****************************************************************************************
assemble.postRender( /\.md$/, toc( assemble ) );

assemble.postRender( /\.md$/, function ( file, next ) {
	//console.log(file);
	//console.log('all', file.data.title, file.data.src.dirname, file.data.src.name);
	next();
});

// ****************************************************************************************
// Assemble data
// ****************************************************************************************

// ****************************************************************************************
// Assemble tasks
// ****************************************************************************************

assemble.task( 'debug', function () {
	assemble.src( [] )
		.pipe( nodeInspector() );
} );

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

// Note: as of now assemble.enable('minimal config'); is necessary for this task
assemble.task( 'filelist:faq', function () {
	return assemble.src( './../docs/faq/**/*.md' )
		.pipe( debug( {title: 'filelist:faq', minimal: true}) )
		.pipe( f2Json( 'filelist.json' ) )
		.pipe( assemble.dest( './.tmp/' ) );
} );

assemble.task( 'tutorial', function () {
	return assemble.src( './../docs/**/*.md' )
		.pipe( debug() )
		.pipe( assemble.dest( cfg.docs.target ) )
} );


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


//assemble.task( 'git:add', function () {
//	assemble.src( './../tutorial/**/*' )
//		.pipe( wait( 1500 ) )
//		.pipe( gulpGit.add() )
//		.pipe( assemble.dest( './../tutorial' ) )
//} );

assemble.task( 'default', [/*'filelist:faq', */'clean:tutorial', 'assets', 'tutorial', 'readme'] );
