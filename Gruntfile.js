module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        npmEnv: '',
        debugPort: '9999',
        connectPort: 35729,
        base: '.',
        pkg: grunt.file.readJSON('package.json'),
        fileName: 'scion',
        uglify: {
            options: {
                banner: '/*! <%= fileName %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: true,
                sourceMap: true,
                compress: {
                    drop_console: false
                },
                // beautify: true
            },
            build: {
                files: {
                    'dist/<%= fileName %>.min.js': ['dist/<%= fileName %>.js']
                }
            }
        },
        stitch: {
            options: {
                rootModuleName: 'scion',
                excludes: [
                    'lib/node',
                    'lib/rhino',
                    'lib/browser/build',
                    'lib/external'
                ],

            },
            build: {
                files: {
                  'dist/<%= fileName %>.js': ['lib/**/*.js']
                }
            }
        }
    });
    // require(NPM_ENV + 'grunt-contrib-uglify/tasks/uglify')(grunt);
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-stitch');
    grunt.registerTask('default', ['stitch:build', 'uglify:build']);

};