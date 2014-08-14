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

### Memory usage

This app is a memory hog. The `node-webkit Helper` process eventually consumes most of your available memory.

Please send a pull request if you figure out why.

### Developers:

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
