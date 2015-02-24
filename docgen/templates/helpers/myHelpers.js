var _ = require( 'underscore' );
/**
 * Handlebar helpers to guarantee compatibility with standard Markdown as soon as we decide also to go for some HTML output.
 * @param Handlebars
 * @param options
 */
module.exports.register = function ( Handlebars, options ) {

	Handlebars.registerHelper( 'hint', function ( title, options ) {

		if ( title === undefined ) {
			title = 'Hint:'
		}

		var content = getOptionsArg( arguments ).fn( this );

		return '>**' + title + '**' + content + '  ';
	} );

	Handlebars.registerHelper( 'image', function ( url ) {

		return '![](' + url + ')';

	} );

	function getOptionsArg ( arguments ) {
		for ( var i = 0, j = arguments.length; i < j; i++ ) {
			if ( arguments[i].fn ) {
				return arguments[i];
			}
			return null;
		}
	}

};