var test = require('tape'),
    liveRequire = require('../');

test('liveRequire', function(t) {
    t.plan(1);
    liveRequire('http://documentcloud.github.com/underscore/underscore.js', function() {
        t.ok(true);
    });
});
