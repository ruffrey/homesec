'use strict';
exports = module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-node-webkit-builder');
	grunt.initConfig({
	  	nodewebkit: {
	  		options: {
		      	platforms: ['win'],
      		  	macCredits: './src/credits.html',
		      	buildDir: './build', // Where the build version of my node-webkit app is saved
		      	version: '0.8.4'
		  },
		  src: ['./src/**/*'] // Your node-wekit app
	  	}
	});
	grunt.registerTask('default', ['nodewebkit']);
};