/*global module*/
module.exports = function (grunt) {
    'use strict';

    var config = grunt.config.data.config;

    return {

        devFiles: {
            options: {
                force: true
            },
            src: [
                '../dist/**/*.bak',
                '../dist/**/*.less',
                '../dist/**/*.tmpl'
            ],
            filter: 'isFile'
        },
        empty_dist: {
            options: {
                force: true
            },
            src: [
                '../dist/**/*'
            ]
        },
        empty_desktop: {
            options: {
                force: true
            },
            src: [
                config.general.LocalExtensionPath + '/' + config.general.ExtensionNameSafe + '/**/*'
            ]
        }
    };
};