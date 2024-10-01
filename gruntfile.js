module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./Grunt/dev/styles/main.css": "./Grunt/src/styles/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "Grunt/dist/styles/main.min.css": "Grunt/src/styles/main.less",
        },
      },
    },
    watch: {
      less: {
        files: ["./Grunt/src/styles/**/*.less"],
        tasks: ["less:development"]
      },
      html: {
        files: ["./Grunt/src/index.html"],
        tasks: ["replace:dev"]
      }
    },
    replace: {
        dev: {
            options: {
                patterns: [
                    {
                        match: 'ENDERECO_DO_CSS',
                        replacement: './styles/main.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement: './scripts/main.js'
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: ['Grunt/src/index.html'],
                    dest: 'Grunt/dev/'
                }
            ]
        },
        dist: {
            options: {
                patterns: [
                    {
                        match: 'ENDERECO_DO_CSS',
                        replacement: './styles/main.min.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement: './scripts/main.min.js'
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: ['Grunt/prebuild/index.html'],
                    dest: 'Grunt/dist/'
                }
            ]
        }
    },
    htmlmin: {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
            },
            files: {
                'Grunt/prebuild/index.html': 'Grunt/src/index.html'
            }
        }
    },
    clean: [
        'prebuild'
    ],
    uglify: {
        target: {
            files: {'Grunt/dist/scripts/main.min.js': 'Grunt/src/scripts/main.js'}
        }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-replace");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["less:production", "htmlmin:dist", "replace:dist", "clean", "uglify"]);
};
