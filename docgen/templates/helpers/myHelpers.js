module.exports.register = function ( Handlebars, options ) {

	Handlebars.registerHelper( 'hint', function ( options ) {

		var content = options.fn( this );

		return '><b>Hint:</b>' + content + '  ';
	} );

	Handlebars.registerHelper( 'image', function ( url ) {

		return '![](' + url + ')';

	} );

};