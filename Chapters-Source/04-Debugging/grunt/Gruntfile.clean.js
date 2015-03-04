/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-clean');
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
                '<%=projectconfig.general.ExtensionNamespace%>/<%=projectconfig.general.ExtensionNameSafe%>/**/*'
            ]
        }
    };
};