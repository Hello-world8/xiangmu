jQuery(document).ready(function($){
	//回到顶部
	$(window).on('scroll',function(){
		scrollTop =$(window).scrollTop();
		if (scrollTop >= 900) {
			$('.go_top').fadeIn(400)
		}else{
			$('.go_top').fadeOut(400)
		}
	});
	$('.go_top').on('mouseover',function(){
		$('.go_top').html('top');
	}).on('mouseout',function(){
		$('.go_top').html('╦');
	});
	$('.go_top').click(function(){
		$('body').animate({'scrollTop':0},1000)
	});


});


//设置Cookie的封装函数

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