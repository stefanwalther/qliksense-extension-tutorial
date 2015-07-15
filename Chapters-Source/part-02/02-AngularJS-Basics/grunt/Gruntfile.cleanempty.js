/*global module*/
module.exports = function( grunt ) {
    'use strict';

    grunt.loadNpmTasks('grunt-cleanempty');
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