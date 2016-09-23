jQuery(document).ready(function($){
	//左侧导航条点击显示与隐藏

	$('#list li span').on('click',function(){
		if($(this).closest('li').find('div').css('display') == 'none'){
			$(this).closest('li').find('div').show();
			$(this).parent().css('color','#c7012c')
			$(this).css('background','url(../css/img/20130225minus.png)');
		}else{
			$(this).closest('li').find('div').hide();
			$(this).parent().css('color','#666')
			$(this).css('background','url(../css/img/20130225plus.png)');
		}	
	});

	//左侧ul列表tab键切换
	$('#hot_list').on('mouseover','li',function(){
		var index = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$('.content').eq(index).show().siblings('.content').hide();
	});

	$('#list li a').click(function(e){
		e.preventDefault();
	})

	//商品分类选择
	var flag = true;
	//默认第一个li样式
	$('#sort li').eq(0).css('background','#fff').children('a').css('color','#c90933')
	$('#sort li').eq(5).css('background','#fff').children('a').css('color','#c90933').find('span').css('background-position','-45px -15px')
	$('#sort').on('click','li',function(){

		$(this).css('background','#fff').siblings('li').css('background','#f7f7f7')
		$(this).children('a').css('color','#c90933').closest('li').siblings('li').find('a').css('color','#666');

		var index = $(this).index();
		if (index ==1) {
			$(this).children('a').find('span').css('background-position','0 -15px')
			$(this).next('li').find('span').css('background-position','0 0')
			$(this).siblings('li').eq(2).find('span').css('background-position','-15px 0')

		}else if ( index == 2) {
			$(this).children('a').find('span').css('background-position','0 -15px')
			$(this).prev('li').find('span').css('background-position','0 0')
			$(this).siblings('li').eq(2).find('span').css('background-position','-15px 0')
		}else if( index == 3){
			if (flag) {
				$(this).children('a').find('span').css('background-position','-30px -15px')
				flag = false;
			}else{
				$(this).children('a').find('span').css('background-position','-15px -15px');
				flag = true;
			}
			$(this).siblings('li').eq(1).find('span').css('background-position','0 0')
			$(this).siblings('li').eq(2).find('span').css('background-position','0 0')
		}else if(index == 5){
			$(this).children('a').find('span').css('background-position','-45px -15px')
			$(this).next("li").children('a').find('span').css('background-position','-45px 0px')
			$(this).siblings("li").eq(0).css('background','#fff').children('a').css('color','#c90933')
			$(this).siblings('li').eq(1).find('span').css('background-position','0 0')
			$(this).siblings('li').eq(2).find('span').css('background-position','0 0')
			$(this).siblings('li').eq(3).find('span').css('background-position','-15px 0')
		}else if(index == 6){
			$(this).children('a').find('span').css('background-position','-60px -15px')
			$(this).prev("li").children('a').find('span').css('background-position','-30px 0px')
			$(this).siblings("li").eq(0).css('background','#fff').children('a').css('color','#c90933')
						$(this).siblings('li').eq(1).find('span').css('background-position','0 0')
			$(this).siblings('li').eq(2).find('span').css('background-position','0 0')
			$(this).siblings('li').eq(3).find('span').css('background-position','-15px 0')
		}else if ( index < 1 || index >2 || index !=3) {
			// console.log(1)
			$(this).siblings('li').eq(0).find('span').css('background-position','0 0')
			$(this).siblings('li').eq(1).find('span').css('background-position','0 0')
			$(this).siblings('li').eq(2).find('span').css('background-position','-15px 0')
		}

	

	 })


	//懒加载
	var $goods = $(".pro_right .goods");
	var flag = 0;
	//ajax全局事件与全局设置
	$.ajaxSetup({
		url:'../data/list.json',
		dataType:'json',
		success:function(res){
			var $ul = $('<ul id="list6"></ul>');
			$.each(res,function(idx,item){
				if ((idx - flag)<10 && (idx - flag) >= 0) {
						console.log(idx,flag);
					$('<li/>').html('<a href="#"><img src="../img/img/'+(idx+1)+'.jpg" /></a>'+'<p class="title6"><a href="#">'+item.title+'</a></p>'+'<p class="tips6">'+item.tips+'</p>'+'<p class="price6">'+item.price+'</p>'+'<p class="bg">'+item.comment+'</p>'+'<button class="fr">'+item.btn1+'</button>'+'<button class="fr">'+item.btn2+'</button>').appendTo($ul);
			
				}
				
			});
			$ul.appendTo('.goods');	
		}
	});
	//调用全局设置
	$.ajax();
	//设置懒加载
		$(window).on('scroll',function(){
			var scrollTop = $(window).scrollTop();
			if ( scrollTop >= $(document).height() - $(window).height() - 700) {	
				$.ajax();
				flag +=10;
			}	 
		});
		$(window).trigger('scroll');



		$(window).on('scroll',function(){
			var scrollTop = $(window).scrollTop();
			// console.log(scrollTop);
			if (scrollTop >=535) {
				$('#sort').css({
					"position": "fixed",
					"left": 273,
					"top": 0,
					"border-left":"1px solid #ddd",
					"border-right":"1px solid #ddd"
				})
			}else{
				$('#sort').css({
					"position": "inherit",
					"border-left":"none",
					"border-right":"none"
				})
			}
		});
			//阻止a标签的默认行为
		$('a').click(function(e){
			e.preventDefault();
		})

	var $proli = $('.goods');
	$proli.on('mouseenter',' li',function(){
		$(this).stop().animate({
			'opacity':0.5,
		});
	});

	$proli.on('mouseleave',' li',function(){
		$(this).stop().animate({
			'opacity':1,
		});
	});
	
});