# Use your webcam as a security cam

[Get started by reading the wiki](https://github.com/ruffrey/homesec/wiki)

![screenshot of homesec](http://i.imgur.com/nNuwsDE.png)

## Development

Requires:

- [Git](http://git-scm.org)
- [Node](http://nodejs.org)
- [Grunt CLI](http://gruntjs.com)  `npm install -g grunt-cli`

Then:

	git clone https://github.com/ruffrey/homesec
	cd homesec

Building the app for development, on mac:

	grunt

or 
	
	grunt -p=<platform>

* `-p=mac`
* `-p=win`
* `-p=linux32`
* `-p=linux64`


Builds always go into the `build/` folder.

To build for all platforms:

	grunt release

### nodewebkit

Tweak settings in `Gruntfile.js` ([see here](https://github.com/mllrsohn/grunt-node-webkit-builder)) and `src/package.json` ([see here](https://github.com/rogerwang/node-webkit/wiki/Manifest-format)), if you like.


### Dependencies

`node_modules` are included in the repo, but you could `npm install` from both the main `homesec` repo and `homesec/src`. 

The build system dependencies are at the project root `./node_modules/`. The app dependencies are at `src/node_modules/`.

### License

All included software is copyrighted and protected by the respective developers.

This project is licensed under the **MIT license**, copyright (c) Jeff Parrish:

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
