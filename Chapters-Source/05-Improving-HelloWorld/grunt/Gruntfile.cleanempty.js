/*global module*/
module.exports = function( grunt ) {
    'use strict';

    var config = grunt.config.data.config;

    return {

        options: {
            force: true
        },
        all: {
            options: {
                files: false
            },
            src: ['../dist/**/*']
        }

    };
};