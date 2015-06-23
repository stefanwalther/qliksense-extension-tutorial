'use strict';
var verb = require('verb');

verb.data({
	'baseUrl': 'https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/'
});

verb.task('default', function() {
	//console.log(verb.data());
	verb.src('.verb.md')
		.pipe(verb.dest('.'));
});