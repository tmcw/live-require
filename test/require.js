var test = require('tape');
var liveRequire = require('../');

test('liveRequire', function (t) {
    t.plan(1);
    t.same(liveRequire('http://documentcloud.github.com/underscore/underscore.js'), function() {
        t.ok(_);
    });
});
