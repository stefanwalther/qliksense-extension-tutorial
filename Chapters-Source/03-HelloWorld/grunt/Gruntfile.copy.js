/*global module*/
module.exports = function (grunt) {
    'use strict';

    var config = grunt.config.data.config;

    return {
        copy_to_dist: {
            expand: true,                   // allow dynamic building
            cwd: '../src/',                 // change base dir
            //src: ['**', '!docs/**'],      // source files mask
            src: ['**'],
            dest: '../dist/',               // destination folder
            flatten: false                  // remove all unnecessary nesting
        },
        copy_to_desktop: {
            expand: true,
            cwd: '../dist/',
            src: '**',
            dest: config.general.LocalExtensionPath + '/' + config.general.ExtensionNameSafe + '/'
        }
    };
};