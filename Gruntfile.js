module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    middleware: function(connect){
                        return [
                            require('grunt-connect-prism/middleware'),
                            connect.static('./app')
                        ];
                    },
                    port: 9000
                }
            }
        },

        prism: {
            options: {
                mocksPath: './mocks',
                host: 'localhost',
                port: 8000
            },
            api: {
                options: {
                    mode: 'mockrecord',
                    context: '/api'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-prism');

    // Default task(s).
    grunt.registerTask('default', [
        'prism',
        'connect:server:keepalive'
    ]);

};
