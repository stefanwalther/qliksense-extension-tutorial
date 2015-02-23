/*global module*/
module.exports = function (grunt) {
    'use strict';

    var config = grunt.config.data.config;

    return {

        dev: {
            options: {
                archive: '../build/' + config.general.ExtensionNameSafe +'_dev.zip'
            },
            files: [
                {expand: true, cwd: '../dist/', src: ['**'], dest: '/'}
            ]
        },
        release: {
            options: {
                archive: '../build/' + config.general.ExtensionNameSafe + '_'  + '.zip'
            },
            files: [
                {expand: true, cwd: '../dist/', src: ['**'], dest: '/'}
            ]
        }
    };
};