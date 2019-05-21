module.exports = function (grunt) {

    grunt.initConfig({

        copy: {

            index: {

                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: ['index.html'],
                        dest: './public'
                    }
                ]

            }

        },

        watch: {

            index: {
                files: ['index.html'],
                tasks: ['build', 'preprocess-watch'],
                options: {
                    nospawn: true
                }
            },

        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            watches: {
                tasks: ["watch:index"]
            }
        },

        preprocess: {
            options: {
                context: {
                    HOST: null
                }
            },
            index: {
                src: 'index.html',
                dest: 'public/index.html'
            },

        },

    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-preprocess');

    grunt.registerTask('build', ['copy:index']);

    grunt.registerTask('preprocess-watch', function () {

        grunt.config('preprocess.options.context.HOST', 'http://localhost:9192');
        // grunt.config('preprocess.options.context.HOST', 'https://provider.jsql.it');

        grunt.task.run('preprocess:index');

    });

    grunt.registerTask('dev', function () {

        grunt.task.run('build');

        grunt.config('preprocess.options.context.HOST', 'http://localhost:9192');
        //  grunt.config('preprocess.options.context.HOST', 'https://provider.jsql.it');

        grunt.task.run('preprocess:index');
        grunt.task.run('concurrent:watches');

    });

    grunt.registerTask('default', function () {

        grunt.task.run('build');

        grunt.config('preprocess.options.context.HOST', 'https://provider.jsql.it');
        grunt.config('jsql.target.options.local', false);

        grunt.task.run('preprocess:index');

    });

};