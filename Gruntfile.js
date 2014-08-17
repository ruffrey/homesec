'use strict';
exports = module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-node-webkit-builder');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-clean');
	var pkg = require('./src/package.json');
	grunt.initConfig({
		clean: {
			dev: [
				'./build/Homesec-v' + pkg.version + '-MacOSX.zip', 
				'./build/Homesec/osx/**/*',
				'./build/Homesec/osx/'
			],
			release: ['./build/**/*']
		},
	  	nodewebkit: {
		  	dev: {
		  		options: {
			      	platforms: ['osx'],
	      		  	macCredits: './src/credits.html',
			      	buildDir: './build',
			      	version: '0.8.4',
			      	macIcns: './src/lab.icns',
			      	winIco: './src/lab.ico' // not supported when building on mac or linux without winehq.com
			  	},
		  		src: ['./src/**/*']
		  	},
		  	release: {
		  		options: {
			      	platforms: ['osx', 'linux32', 'linux64', 'win'],
	      		  	macCredits: './src/credits.html',
			      	buildDir: './build',
			      	version: '0.8.4',
			      	macIcns: './src/lab.icns',
			      	winIco: './src/lab.ico'
			  	},
		  		src: ['./src/**/*']
		  	}
	  	},
	  	compress: {
		    osx: {
		        pretty: true,
		        options: {
		            archive: './build/Homesec-v' + pkg.version + '-MacOSX.zip',
		            mode: 'zip'
		        },
		        files: [
		            {expand: true, cwd: './build/Homesec/osx/', src: ['./**/*'] }
		        ]
		    },
		    win: {
		        pretty: true,
		        options: {
		            archive: './build/Homesec-v' + pkg.version + '-Windows.zip',
		            mode: 'zip'
		        },
		        files: [
		            {expand: true, cwd: './build/Homesec/win/', src: ['./**/*'] }
		        ]
		    },
		    linux32: {
		        pretty: true,
		        options: {
		            archive: './build/Homesec-v' + pkg.version + '-Linux32.zip',
		            mode: 'zip'
		        },
		        files: [
		            {expand: true, cwd: './build/Homesec/linux32/', src: ['./**/*'] }
		        ]
		    },
		    linux64: {
		        pretty: true,
		        options: {
		            archive: './build/Homesec-v' + pkg.version + '-Linux64.zip',
		            mode: 'zip'
		        },
		        files: [
		            {expand: true, cwd: './build/Homesec/linux64/', src: ['./**/*'] }
		        ]
		    },
		}
	});
	grunt.registerTask('default', ['clean:dev', 'nodewebkit:dev']);
	grunt.registerTask('release', ['clean:release', 'nodewebkit:release', 'compress']);
};