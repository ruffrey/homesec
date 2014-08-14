# Use your webcam as a security cam

[Get started by reading the wiki](https://github.com/ruffrey/homesec/wiki)

### Storage space

Default photo snap interval is 2000ms (2 seconds) which should create about 15 mb of images per minute.

Default max storage space is 20 gb which means you have 22.75 hours of photos. So...

* 20gb = 22.75+ hours
* 40gb = 45.5+ hours
* 80gb = 91+ hours
* 160gb = 7.5+ days
* 320gb = 15.1+ days
* 640gb = 30+ days
* 1tb = 48+ days

DON'T set the max storage to more than you have, or bad things will happen.

### Development

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
