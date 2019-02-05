'use strict';

var options = {
};

function generatePaths(begin, extension) {
    var paths = [];

    var path = begin;
    for (var i = 0; i < 5; i++) {
        path += '/**';
        paths.push(path + '/*.' + extension);
    }

    return paths;
}

options.html2js = generatePaths('./src/app', 'html');
options.htmls = generatePaths('./src/app', 'html');
options.htmls.push('./src/index.html');
options.jss = generatePaths('./src', 'js');
options.styles = generatePaths('./src', 'css');

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsql');
    grunt.loadNpmTasks('grunt-run');
    grunt.initConfig({
        open: {
            dist: {
                path: 'http://localhost:5000',
                app: 'chrome.exe'
            }
        },

        clean: {
            dist: {
                files: [{
                    src: ['dist-grunt', 'App.vue']
                }]
            }
        },

        copy: {
            backup: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'src',
                        dest: './',
                        src: 'App.vue'
                    }
                ]
            },

            disttosrc: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'dist-grunt',
                        dest: 'src',
                        src: 'App.vue'
                    }
                ]
            },

            revers: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '',
                        dest: 'src',
                        src: 'App.vue'
                    }
                ]
            },

            devplugin: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '../jsql-axios/dist',
                        dest: 'node_modules/jsql-axios-plugin',
                        src: 'jsql-axios-plugin.js'
                    }
                ]
            },
        },

        concurrent: {

            options: {
                logConcurrentOutput: true
            },

            dist: [
                'watch:jsDist',
                'watch:css',
                'watch:html'
            ],

            local: [
                'watch:jsLocal',
                'watch:css',
                'watch:html'
            ]

        },

        watch: {
            options: {
                spawn: false
            },
            html: {
                files: options.htmls,
                tasks: ['watch-html']
            },
            jsLocal: {
                files: options.jss,
                tasks: ['concat:jsLocal', 'ngAnnotate', 'jsql']
            },
            jsDist: {
                files: options.jss,
                tasks: ['concat:jsDist', 'ngAnnotate', 'jsql']
            },
            css: {
                files: options.styles,
                tasks: ['concat:css']
            }
        },

        jsql: {
            target: {
                options: {
                    apiKey: '==XxPiAgZ3bAX6ZbbcvcbT6wqrPdJqQDXi+mBTK/zZTw==L818RZMBZ1mnOnOoSdMZ',
                    src: 'src',
                    dist: 'dist-grunt'
                }
            }
        }

    });

    grunt.registerTask('buildDist', [
        'clean',
        'copy:index',
        'concat:libs',
        'html2js',
        'concat:jsDist',
        'ngAnnotate',
        'concat:css',
        'jsql'
    ]);

    grunt.registerTask('buildLocal', [
        'clean',
        'copy:index',
        'concat:libs',
        'html2js',
        'concat:jsLocal',
        'ngAnnotate',
        'concat:css',
        'jsql'
    ]);

    grunt.registerTask('watch-html', function () {

        grunt.task.run([
            'copy:index', 'html2js'
        ]);

    });

    grunt.registerTask('local', function () {

        grunt.task.run([
            'buildLocal',
            'connect:dist',
            'concurrent:local'
        ]);

    });

    grunt.registerTask('copy-hash', function () {
        grunt.task.run([
            'copy:backup',
            'jsql',
            'copy:disttosrc'
        ]);
    });

    grunt.registerTask('revers', function () {
        grunt.task.run([
            'copy:revers',
            'clean'
        ]);
    });

    grunt.registerTask('browser', function () {
        grunt.task.run([
            'open:dist'
        ]);
    });

};
