'use strict';

var BinWrapper = require('bin-wrapper');
var path = require('path');
var pkg = require('../package.json');
var fs = require('fs');

/**
 * Variables
 */

var BIN_VERSION = '0.7.5';
var BASE_URL = 'https://raw.github.com/imagemin/optipng-bin/v' + pkg.version + '/vendor/';

/**
 * Initialize a new BinWrapper
 */

var binPath = '';

if (['linux', 'sunos'].indexOf(process.platform) !== -1) {
	binPath = process.arch + '/' + binPath;
}

binPath = path.join(__dirname, '/../vendor', process.platform, binPath);
if (!fs.existsSync(binPath)) {
	throw new Error("optipng-bin - bin path does not exist " + binPath);
}

var bin = new BinWrapper()
	.dest(binPath)
	.use(process.platform === 'win32' ? 'optipng.exe' : 'optipng');

/**
 * Module exports
 */

module.exports = bin;
module.exports.v = BIN_VERSION;
