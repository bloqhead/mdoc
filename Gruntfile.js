/*global module:false*/
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
		  '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
		  '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>',
		sass: {
			dist : {
				files : [ {
					expand : true,
					flatten : true,
					cwd : 'lib/scss',
					src : [
						'**/*.scss',
						'!**/_*.scss',
					],
					dest : 'lib/css',
					ext : '.css'
				} ]
			}
		},
		coffee : {
			dist : {
				files : [ {
					expand : true,
					flatten : true,
					cwd : 'lib/coffee',
					src : ['**/*.coffee'],
					dest : 'lib/js/',
					ext : '.js'
				} ]
			}
		},
		cssmin : {
			dist : {
				files : {
					'lib/css/styles.min.css' : [ 'lib/css/styles.css' ]
				}
			}
		},
		md2html : {
			dist : {
				options : {
					layout: 'lib/tpl/document.tpl.html',
					basePath: 'md',
					markedOptions: {
						gfm: true
					}
				},
				files: [{
					expand : true,
					cwd : 'md',
					src : [ '**/*.md' ],
					dest : 'docs',
					ext: '.html'
				}]
			}
		},
		watch: {
			dist : {
				files: [
					'lib/scss/**/*.scss',
					'lib/coffee/**/*.coffee',
					'md/**/*.md',
				],
				tasks: ['sass','coffee','md2html'],
				options: {
					livereload: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-md2html');
	grunt.registerTask('default', ['sass','coffee','cssmin','md2html']);
};
