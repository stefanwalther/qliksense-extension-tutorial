define([
        'jquery',
        './lib/js/extensionUtils',
        'text!./lib/css/style.css'
],
function ($, extensionUtils, cssContent) {
    'use strict';

    extensionUtils.addStyleToHeader(cssContent);

    console.log('Initializing - remove me');

    return {

        paint: function ( $element /*, layout*/ ) {

            $element.empty();
            $element.append('<img src="/extensions/exttut-09-loadingresources/lib/images/pic.png" />');

        }
    };

});
