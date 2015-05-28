'use strict';
var _ = require( 'lodash' );
var S = require( 'string' );

var Handlebars = require( 'handlebars' );

// ****************************************************************************************
// Helpers:
// ~~
// - hint
// - image (with max width / height)
// - todo (internally)
// - comment
// ****************************************************************************************

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
function hint ( options ) {
	var title = '';
	if ( !_.isString( options ) ) {
		title = 'Hint';
	} else {
		title = options;
	}

	var content = getOptionsArg( arguments ).fn( this );

	// Add breaks before and after, otherwise the hint looks so squeezed in the output
	return '<br/>\n>**' + title + '**  \n>' + S( content ).chompLeft( '\n' ) + '  \n<br/>';
}

/**
 * Support for images for future compatibility when generating responsive images for Html output.
 *
 * @param url {string} - Url of the image
 * @example
 * {{image "http://www.bla.com/image.png"}}
 */
function image ( url ) {
	// Add always a line break after the image.
	return '![](' + url + ')  ';
}

/**
 * A markdown compliant todo.
 * @param text {string} - The text to be highlighted as todo.
 */
function todo ( text ) {
	return '<span style="background-color:#ffff00;">' + text + '</span>'
}

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
function comment () {
	return '';
}

/**
 * Hide content from the output.
 *
 * @example
 * {{#hidden}}
 *   Any comment here will be removed.
 * {{/hidden}}
 */
function hidden () {
	return '';
}

function getOptionsArg ( args ) {
	for ( var i = 0, j = args.length; i < j; i++ ) {

		//console.log( 'argument: ', typeof arguments[i] );
		if ( typeof args[i] === 'object' ) {
			return args[i];
		}
	}
	return null;
}

/**
 * Handlebar helpers to guarantee compatibility with standard Markdown as soon as we decide also to go for some HTML output.
 * @param Handlebars
 * @param options
 */
module.exports = {
	hint: hint,
	image: image,
	todo: todo,
	comment: comment
};
