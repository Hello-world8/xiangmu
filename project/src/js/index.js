
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

	//banner轮播图
	var index = 0;
	var $li = $('#list');
	var $samllul =$('.banner .list2');
	var $length = $('#list').find('li').length;
	var timer;
	
	$li.on('mouseenter',function(){
		clearInterval(timer);
	}).on('mouseleave',function(){
		timer = setInterval(function(){
			index++;
			showPic();
		},3000);
	}).trigger('mouseleave');
	function showPic(){
		if ( index >= $length) {
			index = 0;
		}else if( index <0){
			index = $length -1;
		}
		$li.find('li').eq(index).animate({opacity:1}).siblings('li').animate({opacity:0});
		$samllul.find('li').eq(index).css('background','#f00').siblings('li').css('background','#000');

	}
	//点击上一张
	$('.prev').on('click',function(){
		index--;
		clearInterval(timer);
		showPic();
	});
	//点击下一张
	$('.next').on('click',function(){
		index++;
		clearInterval(timer);
		showPic();
	});
	// 小图切换
	$samllul.on('click','li',function(){
		index = $(this).index();
		showPic();
	});



	//二级菜单
	$('.banner .list1').children('li').hover(function(){
			var index = $(this).index();
			$(this).css('background','#c7012c')
			$('.Synopsis').eq(index).show();
			if (index == 4) {
				$('.Synopsis1').show();
				$('.prev').hide();
			}else if (index ==5) {
				$('.Synopsis2').show();
				$('.prev').hide();
			}else if (index ==6) {
				$('.Synopsis3').show();
				$('.prev').hide();
			}else if (index ==7) {
				$('.Synopsis4').show();
				$('.prev').hide();
			}else if (index ==8) {
				$('.Synopsis5').show();
				$('.prev').hide();
			}else if (index ==9) {
				$('.Synopsis6').show();
				$('.prev').hide();
			}else if (index ==10) {
				$('.Synopsis7').show();
				$('.prev').hide();
			}else if (index ==11) {
				$('.Synopsis8').eq(0).show();
				$samllul.hide();
			}else if (index ==12) {
				$('.Synopsis8').eq(1).show();
				$samllul.hide();
			}else if (index ==13) {
				$('.Synopsis9').show();
				$samllul.hide();
			}

	},function(){
			var index = $(this).index();
			$(this).css('background','#1e1e1e')
			$('.Synopsis').eq(index).hide();
			if (index == 4) {
				$('.Synopsis1').hide();
				$('.prev').show();
			}else if (index ==5) {
				$('.Synopsis2').hide();
				$('.prev').show();
			}else if (index ==6) {
				$('.Synopsis3').hide();
				$('.prev').show();
			}else if (index ==7) {
				$('.Synopsis4').hide();
				$('.prev').show();
			}else if (index ==8) {
				$('.Synopsis5').hide();
				$('.prev').show();
			}else if (index ==9) {
				$('.Synopsis6').hide();
				$('.prev').show();
			}else if (index ==10) {
				$('.Synopsis7').hide();
				$('.prev').show();
			}else if (index ==11) {
				$('.Synopsis8').eq(0).hide();
				$samllul.show();
			}else if (index ==12) {
				$('.Synopsis8').eq(1).hide();
				$samllul.show();
			}else if (index ==13) {
				$('.Synopsis9').hide();
				$samllul.show();
			}
	})
	//商品列表
	var $proli = $('.product .product_center .box .list li');
	$proli.hover(function(){
		$(this).stop().animate({
			'opacity':0.5
		})
	},function(){
		$(this).stop().animate({
			'opacity':1
		})
	});

	
    $proli.mouseover(function(){
    	$(this).find('img').stop().animate({marginLeft:8},200);
    });
     $proli.mouseout(function(){
        $(this).find('img').stop().animate({marginLeft:0},200);
    });

	//点击a标签，阻止默认行为
	// $('a').on('click',function(e){
	// 	e.preventDefault();
	// });

});