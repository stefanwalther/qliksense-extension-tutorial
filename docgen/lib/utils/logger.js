'use strict';
var winston = require( 'winston' );

var logConfig = {
	levels: {
		silly: 0,
		verbose: 1,
		info: 2,
		data: 3,
		warn: 4,
		debug: 5,
		error: 6
	},
	colors: {
		silly: 'magenta',
		verbose: 'cyan',
		info: 'green',
		data: 'grey',
		warn: 'yellow',
		debug: 'blue',
		error: 'red'
	}
};

var logger = new (winston.Logger)( {
	transports: [
		new (winston.transports.Console)( {
			colorize: true,
			level: 'silly',
			json: false,
			timestamp: false,
			handleExceptions: false
		} )
	],
	levels: logConfig.levels,
	colors: logConfig.colors
} );

module.exports = logger;
