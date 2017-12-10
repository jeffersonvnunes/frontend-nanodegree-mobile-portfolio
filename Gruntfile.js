/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            main: {
                options: {
                    engine: 'im',
                    sizes: [
                    {
                        name: 'micro',
                        width: 555,
                        height: 175
                    },{
                        name: 'small',
                        width: 750
                    },{
                        name: 'medium',
                        width: 940
                    },{
                        name: 'large',
                        width: 1200
                    }]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img_src/',
                    dest: 'img/'
                }]
            },
            views: {
                options: {
                    engine: 'im',
                    sizes: [
                        {
                            name: 'micro',
                            width: 555,
                            height: 175
                        },{
                            name: 'small',
                            width: 750
                        },{
                            name: 'medium',
                            width: 940
                        },{
                            name: 'large',
                            width: 1200
                        }]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'views/images_src/',
                    dest: 'views/images/'
                }]
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            main: {
                src: ['img']
            },
            views: {
                src: ['views/images']
            },
            dist:{
                src: ['dist']
            }
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            main: {
                options: {
                    create: ['img']
                }
            },
            views: {
                options: {
                    create: ['views/images']
                }
            },
            dist:{
                options: {
                    create: ['dist']
                }
            }
        },

        cssmin: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            },
            view: {
                files: [{
                    expand: true,
                    cwd: 'views/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'views/dist/css',
                    ext: '.min.css'
                }]
            }

        },

        uglify: {
            options: {
                mangle: false
            },
            main: {
                files: {
                    'dist/js/perfmatters.min.js': ['js/perfmatters.js']
                }
            },
            views: {
                files: {
                    'views/dist/js/main.min.js': ['views/js/main.js']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'cssmin', 'uglify']);
    grunt.registerTask('css', ['clean', 'mkdir', 'cssmin']);
    grunt.registerTask('js', ['clean', 'mkdir', 'uglify']);

};
