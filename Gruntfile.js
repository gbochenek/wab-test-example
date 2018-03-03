module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-sass');

    var appDir = 'C:/arcgis-web-appbuilder-2.7/WebAppBuilderForArcGIS/server/apps/4';
    var stemappDir = 'C:/arcgis-web-appbuilder-2.7/WebAppBuilderForArcGIS/client/stemapp3d';
    grunt.initConfig({
        sync: {
            main: {
                verbose: true,
                files: [
                    {
                        cwd: 'dist/',
                        src: '**',
                        dest: stemappDir
                    },
                    {
                        cwd: 'dist/',
                        src: '**',
                        dest: appDir
                    }
                ]
            }
        },
        babel: {
            'main': {
                'files': [{
                        'expand': true,
                        'src': [
                            'widgets/*.js',
                            'widgets/**/*.js',
                            'widgets/**/**/*.js',
                            'widgets/!**/**/nls/*.js',
                            'themes/*.js',
                            'themes/**/*.js',
                            'themes/**/**/*.js',
                            'themes/!**/**/nls/*.js'
                        ],
                        'dest': 'dist/'
                    }]
            }
        },
        watch: {
            main: {
                files: [
                    'widgets/**',
                    'themes/**'
                ],
                tasks: [
                    'clean',
                    'sass',
                    'babel',
                    'copy',
                    'sync'
                ],
                options: {
                    spawn: false,
                    atBegin: true,
                    livereload: true
                }
            }
        },
        copy: {
            'main': {
                'src': [
                    'widgets/**/**.html',
                    'widgets/**/**.json',
                    'widgets/**/**.css',
                    'widgets/**/images/**',
                    'widgets/**/nls/**',
                    'themes/**/**.html',
                    'themes/**/**.json',
                    'themes/**/**.css',
                    'themes/**/images/**',
                    'themes/**/nls/**'
                ],
                'dest': 'dist/',
                'expand': true
            }
        },
        clean: { 'dist': { 'src': 'dist/**' } },
        karma: {
            options: {
              // get defaults from karma config
              configFile: 'karma.conf.js',
              // run all tests once then exit
              singleRun: true,
              // only show error messages
              logLevel: 'INFO',
            },
            unit: {
                options:{
                  captureTimeout:30000,
                  reporters : ['progress','junit'],
                  junitReporter: {
                    outputDir: 'test-reports', // results will be saved as $outputDir/$browserName.xml 
                    outputFile: 'test-results', // if included, results will be saved as $outputDir/$browserName/$outputFile 
                    suite: '', // suite will become the package name attribute in xml testsuite element 
                    useBrowserName: true // add browser name to report and classes names 
                  }
                }
            }
          },
        sass: {
            dist: {
                options: { sourceMap: true },
                files: [{
                        expand: true,
                        src: ['widgets/**/*.scss'],
                        rename: function (dest, src) {
                            return src.replace('scss', 'css');
                        }
                    }]
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['karma']);
};