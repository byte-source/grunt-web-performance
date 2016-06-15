/*
 * grunt-web-performance
 * https://github.com/vikas-kumar-singh/grunt-web-performance
 *
 * Copyright (c) 2016 Vikas Kumar Singh
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({

        webPerformanceMatrix: {
            options: {
                urls: ['https://www.google.com',
                    'http://www.facebook.com',
                    'http://www.yahoo.com'
                ],

                resultsFolder: './reports/',
            }
        }

    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-phantomas');
    grunt.registerTask('default', ['webPerformanceMatrix']);

};
