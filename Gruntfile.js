'use strict';
exports = module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-node-webkit-builder');
	grunt.initConfig({
	  	nodewebkit: {
	  		options: {
		      	app_name: 'Homesec',
      		  	credits: './src/credits.html',
		      	build_dir: './build', // Where the build version of my node-webkit app is saved
		      	mac: true,
		      	win: true,
		      	linux32: true,
		      	linux64: true
		  },
		  src: ['./src/**/*'] // Your node-wekit app
	  	}
	});
	grunt.registerTask('default', ['nodewebkit']);
};