'use strict';
var _ = require( 'underscore' );
var S = require( 'string' );

// ****************************************************************************************
// Helpers:
// ~~
// - hint
// - image (with max width / height)
// - todo (internal)
// - comment
// ****************************************************************************************

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
	 * @todo Work on more params to pass the title
	 * @todo Work on multiline comments using hint
	 */
	Handlebars.registerHelper( 'hint', function ( options ) {

		var title = '';
		if ( !_.isString( options ) ) {
			title = 'Hint';
		}

		var content = getOptionsArg( arguments ).fn( this );

		// Add breaks before and after, otherwise the hint looks so squeezed in the output
		return '<br/>\n>**' + title + '**  \n>' + S( content ).chompLeft( '\n' ) + '  \n<br/>';
	} );

	/**
	 * Support for images for future compatibility when generating responsive images for Html output.
	 *
	 * @param url {string} - Url of the image
	 * @example
	 * {{image "http://www.bla.com/image.png"}}
	 */
	Handlebars.registerHelper( 'image', function ( url ) {

		// Add always a line break after the image.
		return '![](' + url + ')  ';

	} );

	/**
	 * A markdown compliant hint.
	 * @param text {string} - The text to be highlighted as todo.
	 */
	Handlebars.registerHelper( 'todo', function ( text ) {

		return '<span style="background-color:#ffff00;">' + text + '</span>'

	} );

	/**
	 * Allow comments within markdown.
	 * The content between {{#comment}} and {{/comment}} will not be displayed.
	 *
	 * @description: Note, you can also use standard Html comments, they will also be ignored by standard markdown syntax, but rendered on the client ...
	 *
	 * @example
	 * {{#comment}}
	 *   Any comment here will be removed.
	 * {{/comment}}
	 */
	Handlebars.registerHelper( 'comment', function () {
		return '';
	} );
	/**
	 * Hide content from the output.
	 *
	 * @example
	 * {{#hidden}}
	 *   Any comment here will be removed.
	 * {{/hidden}}
	 */
	Handlebars.registerHelper( 'hidden', function () {

	} );

	function getOptionsArg ( args ) {
		for ( var i = 0, j = args.length; i < j; i++ ) {

			//console.log( 'argument: ', typeof arguments[i] );
			if ( typeof args[i] === 'object' ) {
				return args[i];
			}
		}
		return null;
	}

};