'use strict';

var fs = require('fs');
var path = require('path');
var exec = require('exec');
var async = require('async');

var pngquant = "";
var optipng = "";
var args_pngquant = [
	'--quality', '65-85', // quality
	'--speed', '5' // speed
];
// http://optipng.sourceforge.net/optipng-0.7.5.man.pdf
var args_optipng = [
	'-strip', 'all', 
	'-quiet', 
	'-clobber',
	'-o', 3 // optimizationLevel - https://github.com/kevva/imagemin-optipng#optimizationlevel
];


var platform_folder = process.platform + (process.platform === 'linux' ? "/" + process.arch : "");

pngquant = path.join(__dirname, 'pngquant', platform_folder, process.platform === 'win32' ? 'pngquant.exe' : 'pngquant');
optipng = path.join(__dirname, 'optipng', platform_folder, process.platform === 'win32' ? 'optipng.exe' : 'optipng');

args_pngquant.unshift(pngquant);
args_optipng.unshift(optipng);


function pnger(pngbase64Buffer, outputPath, callback) {
	var tempPath = outputPath.replace('.png', '-tmp.png');
	var minifiedPath = outputPath.replace('.png', '-min.png');

	async.waterfall([
		function writeTemp(cb) {
			fs.writeFile(tempPath, pngbase64Buffer, cb);
		},
		function minify(cb) {
			exec(args_pngquant.concat(['-f', '-o', minifiedPath, tempPath]), function (err, out, code) {
				cb(err);
			});
		},
		function removeTemp(cb) {
			fs.unlink(tempPath, cb);
		},
		function optimize(cb) {
			exec(args_optipng.concat(['-out', outputPath, minifiedPath]), function (err, out, code) {
				cb(err);
			});
		},
		function removeMin(cb) {
			fs.unlink(minifiedPath, cb);
		}
	], callback);

}
exports = module.exports = pnger;
