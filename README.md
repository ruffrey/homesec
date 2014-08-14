# Use your webcam as a security cam

[Get started by reading the wiki](https://github.com/ruffrey/homesec/wiki)

## Usage guide

### Installing

Download a release for your platform. 

[Latest release >>](https://github.com/ruffrey/homesec/releases/latest)

* **OSX** - unzip and drag `Homesec.app` into your *Applications*
* **Windows** - unzip it and put the contents somewhere, keeping them all in the same folder. Then run `Homesec.exe`.

### Setting save folder on OSX

OSX - external drives are at `/Volumes/`

### Storage space estimations

Default photo snap interval is 2000ms (2 seconds) which should create about 15 mb (or less) of images per minute. Images are about 300 kb to 500 kb.

The app won't start cleaning out your save folder, by default, until it reaches 20 gb. That means you have 22.75 hours or more of photos.

You can increase the folder allowance in *Settings*. Here are rough, optimistic estimates:

* 20gb = 22.75+ hours
* 40gb = 45.5+ hours
* 80gb = 91+ hours
* 160gb = 7.5+ days
* 320gb = 15.1+ days
* 640gb = 30+ days
* 1tb = 48+ days

If you set the max storage to more than is available, you're gonna have a bad time.

## Development

Requires [grunt](http://gruntjs.com) and [Node](http://nodejs.org).

Building the app:

	git clone https://github.com/ruffrey/homesec
	cd homesec && npm install
	cd src && npm install
	cd ../
	grunt

Look in the build folder and you'll have apps for mac, windows, and linux. Tweak settings in `Gruntfile.js` and `src/package.json`, if you like.

### Coming Soon

Remote monitoring - log into a website and see your video feeds.

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
