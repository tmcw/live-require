index.html: test/*.js
	browserify test/*.js > bundle.js; echo '<script src="bundle.js"></script>' > index.html
