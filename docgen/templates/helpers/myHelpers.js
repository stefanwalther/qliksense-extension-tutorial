var _ = require( 'underscore' );
/**
 * Handlebar helpers to guarantee compatibility with standard Markdown as soon as we decide also to go for some HTML output.
 * @param Handlebars
 * @param options
 */
module.exports.register = function ( Handlebars, options ) {

	/**
	 * {{hint [title]}}
	 *
	 * or
	 * {{#hint [title]}}
	 *  ...
	 * {{/hint}}
	 * @param title - Title of the hint, if blank, nothing will displayed, if not defined at all it defaults to "Hint:"
	 */
	Handlebars.registerHelper( 'hint', function ( title, options ) {

		if ( title === undefined && typeof title !== 'object' ) {
			title = 'Hint:'
		}

		var content = getOptionsArg( arguments ).fn( this );

		return '>**' + title + '**' + content + '  ';
	} );

	Handlebars.registerHelper( 'image', function ( url ) {

		return '![](' + url + ')';

	} );

	/**
	 * A markdown compliant hint.
	 * @param text {string} - The text to be highlighted as todo.
	 */
	Handlebars.registerHelper( 'todo', function ( text ) {

		return '<span style="background-color:#ffff00;">' + text + '</span>'

	} );

	function getOptionsArg ( arguments ) {
		for ( var i = 0, j = arguments.length; i < j; i++ ) {

			//console.log( 'argument: ', typeof arguments[i] );
			if ( typeof arguments[i] === 'object' ) {
				return arguments[i];
			}
		}
		return null;
	}

};