/*global afterEach, beforeEach, describe, it */
'use strict';

var assert = require('assert');
var binCheck = require('bin-check');
var BinBuild = require('bin-build');
var execFile = require('child_process').execFile;
var fs = require('fs');
var path = require('path');
var rm = require('rimraf');

describe('optipng()', function () {
	afterEach(function (cb) {
		rm(path.join(__dirname, 'tmp'), cb);
	});

	beforeEach(function (cb) {
		fs.mkdir(path.join(__dirname, 'tmp'), cb);
	});

	it('should rebuild the optipng binaries', function (cb) {
		var tmp = path.join(__dirname, 'tmp');
		var builder = new BinBuild()
			.src('http://downloads.sourceforge.net/project/optipng/OptiPNG/optipng-0.7.5/optipng-0.7.5.tar.gz')
			.cmd('./configure --with-system-zlib --prefix="' + tmp + '" --bindir="' + tmp + '"')
			.cmd('make install');

		builder.build(function (err) {
			assert(!err);
			assert(fs.existsSync(path.join(tmp, 'optipng')));
			cb();
		});
	});

	it('should return path to binary and verify that it is working', function (cb) {
		var binPath = require('../').path;

		binCheck(binPath, ['--version'], function (err, works) {
			assert(!err);
			assert.equal(works, true);
			cb();
		});
	});

	it.only('should minify a PNG', function (cb) {
		var binPath = require('../').path;
		var tempPath = path.join(__dirname, 'fixtures', 'test-test.png');
		var srcPath = path.join(__dirname, 'fixtures', 'test.png');
		var args = [
			'-strip', 'all',
			'-clobber',
			'-out', tempPath,
			srcPath
		];
		fs.writeFileSync(tempPath);
		execFile(binPath, args, function (err) {
			var srcSize = fs.statSync(srcPath).size;
			var destSize = fs.statSync(tempPath).size;
			console.log(srcSize, destSize);
			assert(!err);
			assert(destSize < srcSize);
			cb();
		});
	});
});
