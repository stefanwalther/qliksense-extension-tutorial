/*global module*/
module.exports = function (grunt) {

    'use strict';

    var repl = grunt.config.data.replacements;

    // Replace variables like the Urls for the help, the version, etc.
    return {

        general: {
            options: {
                patterns: [
                    {
                        json: repl.general
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: ['../dist/*.*'],
                    dest: '../dist/'}
            ]
        },
        dev: {
            options: {
                patterns: [
                    {
                        json: repl.dev
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: ['../dist/*.*'],
                    dest: '../dist/'}
            ]
        },
        release: {
            options: {
                patterns: [
                    {
                        json: repl.release
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: ['../dist/*.*'],
                    dest: '../dist/'}
            ]
        }
    };
};