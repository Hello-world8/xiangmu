jQuery(document).ready(function($){


		
	
	//登录cookie
	var name =getCookie('username');
	console.log(name);
	if (name){
		$('#usname').html('您好，'+'<span><a href="#">'+name+"先生</a></span>"+",欢迎来到飞虎乐购！");
	} 
	//顶部操作
	$('.header_top .web').on('mouseover',function(){
		$(this).children('dl').stop().show();
		$(this).find('span').css({
			'background':'url(../css/img/tel.png) 0px -6px'
		});
		$(this).css({
			'background':'#fff',
		});
	}).on('mouseout',function(){
		$(this).children('dl').stop().hide();
		$(this).find('span').css({
			'background':'url(../css/img/tel.png) 0px 0px'
		});
		$(this).css({
			'background':'#eaeaea',
		});
	});

	//goods 复选框总是被选择
	$('.goods_li').children('li').find(':checkbox').prop('checked',true);

	$('.list4 li').on('mouseover',function(){
		$(this).find('button').css('display','block');
		$(this).siblings('li').find('button').css('display','none')
	}).on('mouseout',function(){
		$(this).find('button').css('display','none');
	});



	//设置COOKIE
	var str2 = getCookie('obj');
    var obj2 = JSON.parse(str2);
    

  	//点击加入购物车
	var $nr = $('.cart_goods');
	$('.related .list4 li button').click(function(){
		var $clone_nr = $nr.clone(true,true).addClass('fr89');
		var $img3 =$(this).siblings('dl').find('img').clone();
		var $tit2 =$(this).siblings('dl').find('.tit2 a').clone();
		var $price3 = $(this).siblings('dl').find('.pri').text();
		$clone_nr.insertAfter($nr);
		$clone_nr.children('.g_1').find(':checkbox').prop('checked',true);
		$clone_nr.children('.g_2').html($img3);
		$clone_nr.children('.g_3').find('p').html($tit2);
		$clone_nr.children('.g_4').find('input').val("1");
		$clone_nr.children('.g_4').find('button').eq(1).addClass('btn6');
		$clone_nr.children('.g_4').find('button').eq(0).addClass('btn7');
		$clone_nr.children('.g_5').html($price3);
		$clone_nr.children('.g_6').html($price3);
	});	
	//开始添加COOKIE
     if (obj2) {
     	$('.g_1').addClass('fg12');
 		$('<input type="checkbox" name="checkbox">').prop('checked',true).appendTo('.g_1');
 		$('.g_2').html(obj2.a);
 		$('<p></p>').html(obj2.b).appendTo('.g_3');
 		$('.g_5').html('￥'+obj2.e);
 		$('.g_4').find('.qty').val(obj2.f);
 		$('.g_6').html('￥'+obj2.d);
 		//总金额：
 		$('.balance .tips4 span').html('￥'+obj2.d);
	}else{
		$('.cart_goods').hide();
	};

	$('.g_1').click(function(){
		$(this).toggleClass('fg12').find(':checkbox').prop('checked',$(this).hasClass('fg12'));
	});
	//商品数量

	$('.cart_goods').find('.btn5').click(function(){

		$(this).prev('input').val((parseInt($(this).prev('input').val())+1));

				var index = $(this).closest('.cart_goods').index();

	
		if ( index == 1) {
			$(this).closest('.g_4').siblings('.g_6').html('￥'+$(this).prev('input').val()*obj2.e);
		}else{
			$(this).closest('.g_4').siblings('.g_6').html('￥'+$(this).prev('input').val()*26.80);
		}
				
		//总金额：
		$('.balance .tips4 span').html('￥'+$(this).prev('input').val()*obj2.e);	
		
	});
	
	$('.g_4').find('.btn4').click(function(){

		$(this).next('input').val((parseInt($(this).next('input').val())-1));

		var index = $(this).closest('.cart_goods').index();

		if ($(this).next('input').val() == 0) {
			alert('您确定不购买此商品吗？');
			$(this).next('input').val("1")
		}
		if ( index == 1) {
			$(this).closest('.g_4').siblings('.g_6').html('￥'+$(this).next('input').val()*obj2.e);
		}else{
			$(this).closest('.g_4').siblings('.g_6').html('￥'+$(this).next('input').val()*26.80);
		}
				
		//总金额：
		$('.balance .tips4 span').html('￥'+$(this).next('input').val()*obj2.e);	
	});

	//点击删除按钮$(cart_goods)消失
	$('.cart_goods .g_7').on('click','.del',function(){
		$(this).closest('.cart_goods').hide();
	}).on('click','.sc',function(){
		alert('收藏成功！');
	});


});