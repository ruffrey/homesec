# Use your webcam as a security cam

[Get started by reading the wiki](https://github.com/ruffrey/homesec/wiki)

## Development

Requires [grunt](http://gruntjs.com) and [Node](http://nodejs.org).

Building the app:

	git clone https://github.com/ruffrey/homesec
	cd homesec
	grunt <release>

Look in the build folder and you'll have apps for mac, windows, and linux.

### Dependencies

`node_modules` are included in the repo because of the way `Imagemin` does dependences. It tries to install only the binaries for your platform. Unfortunately we want `optipng-bin` and `pngquant-bin` for all vendors (mac, windows, and linuxes). Thus the git repos are used in the package.json, since those do not run the npm installation scripts.  

Tweak settings in `Gruntfile.js` ([see here](https://github.com/mllrsohn/grunt-node-webkit-builder)) and `src/package.json` ([see here](https://github.com/rogerwang/node-webkit/wiki/Manifest-format)), if you like.

### License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
