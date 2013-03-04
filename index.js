// include a script programmatically, by appending it
// to the head of the page. guards against re-insertion,
// and returns 'loaded' when successful.
function liveRequire(x, callback) {
    var scripts = document.head.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src == x) return 'loaded';
    }
    var scr = document.head.appendChild(document.createElement('script'));
    scr.onload = callback;
    scr.src = x;
}

if (typeof module !== 'undefined') module.exports = liveRequire;
