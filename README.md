## live-require

[![](http://ci.testling.com/tmcw/live-require.png)](http://ci.testling.com/tmcw/live-require)

includes a script in a page

## api

```
var liveRequire = require('live-require');
```

### liveRequire(url, callback)

Add a script with a given URL to the page. Returns `"loaded"` if the script
is already loaded, and calls `callback` after it has loaded for the first
time.

## license

BSD
