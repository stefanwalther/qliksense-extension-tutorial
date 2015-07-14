/*global module*/
/*jshint
 camelcase: false
 */
module.exports = function (grunt) {

    'use strict';
    return {

        options: {
            mangle: true,
            beautify: false,
            preserveComments: false,
            compress: {
                drop_console: true
            }
        },
        main: {
            files: {
                '../dist/qwidget.js': ['../dist/qwidget.js'],
                '../dist/qwidget-properties.js': ['../dist/qwidget-properties.js']

            }
        },
        config: {
            files: [
                {
                    expand: true,
                    cwd: '../dist/config/',
                    src: ['*.js', '**/*.js'],
                    dest: '../dist/config/'

                }
            ]
        },
        services: {
            options: {
                mangle: true,
                beautify: false,
                preserveComments: false,
                compress: {
                    drop_console: true
                }
            },
            files: [
                {
                    expand: true,
                    cwd: '../dist/services/',
                    src: ['*.js', '**/*.js'],
                    dest: '../dist/services/'

                }
            ]
        },
        directives: {
            options: {
                mangle: true,
                beautify: false,
                preserveComments: false,
                compress: {
                    drop_console: true
                }
            },
            files: [
                {
                    expand: true,
                    cwd: '../dist/directives/',
                    src: ['*.js', '**/*.js'],
                    dest: '../dist/directives/'
                }
            ]
        },
        components: {
            options: {
                mangle: true,
                beautify: false,
                preserveComments: false,
                compress: {
                    drop_console: true
                }
            },
            files: [
                {
                    expand: true,
                    cwd: '../dist/components/',
                    src: ['*.js', '**/*.js','!*.min.js', '!**/*.min.js'],
                    dest: '../dist/components/'

                }
            ]
        },
        filter: {
            options: {
                mangle: true,
                beautify: false,
                preserveComments: false,
                compress: {
                    drop_console: true
                }
            },
            files: [
                {
                    expand: true,
                    cwd: '../dist/filter/',
                    src: ['*.js', '**/*.js'],
                    dest: '../dist/filter/'

                }
            ]
        },
        modules: {
            options: {
                mangle: true,
                beautify: false,
                preserveComments: false,
                compress: {
                    drop_console: true
                }
            },
            files: [
                {
                    expand: true,
                    cwd: '../dist/modules/',
                    src: ['*.js', '**/*.js'],
                    dest: '../dist/modules/'

                }
            ]
        }

    };
};