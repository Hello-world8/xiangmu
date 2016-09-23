
// 工具类
var Util = {
    _timer: null,
    showTip: function(str) {
        var dom = $('<div class="f-tips"></div>').text(str),
            old = $('.f-tips');
        if (old.length) {
            old.replaceWith(dom); // replaceWith() 方法用指定的 HTML 内容或元素替换被选元素。
        } else {
            $(document.body).append(dom);
        }
        clearTimeout(this._timer);
        this._time = setTimeout(function() {
            dom.css("opacity", "0").remove();
        }, 2000);
    },

    getQuery: function(name, url) {
        var u = url || location.search,
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            r = u.substr(u.indexOf("\?") + 1).match(reg);
        return r != null ? r[2] : "";
    }
}

function isMobile(tel) {
    return /^1\d{10}$/.test(tel);//行首匹配1,0~9正好出现10次
}

function getCookie(name) {
    var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
        val = document.cookie.match(reg);
    return val ? (val[2] ? unescape(val[2]) : "") : null;
}

function setCookie(name, value, expires, path, domain, secure) {
    var exp = new Date(),
    expires = arguments[2] || null,
    path = arguments[3] || "/",
    domain = arguments[4] || null,
    secure = arguments[5] || false;
    expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
    document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
}

function delCookie(name, path, domain, secure) {
    var value = $getCookie(name);
    if (value != null) {
        var exp = new Date();
        exp.setMinutes(exp.getMinutes() - 1000);
        path = path || "/";
        document.cookie = name + '=;expires=' + exp.toGMTString() + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
    }
}

