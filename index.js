!
function() {
    var e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,
    r = window.location.href,
    t = document.referrer;
    var o = "39.108.226.41:3000/api/my/open/send?url=";
    if (!e.test(r)) {
        t ? (o += encodeURIComponent(document.referrer), r && (o += "&l=" + r)) : r && (o += "?l=" + r);
    }
    var i = new Image;
    i.src = o
} (window);
