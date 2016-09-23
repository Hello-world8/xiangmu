jQuery(document).ready(function($){

	
	//选择省份
	function boxcolse(){
		$('#box').children('div').hide();
		$('#box').children('a').css({
			'border':'1px solid #ccc',
			'color':'#666'
		});
		$('#box').children('a').find('span').css({
			'background-position':'-120px 0px',
		});
	}
	$('#box').click(function(){
		$('#box').children('div').slideDown();
		$('#box').children('a').css({
			'border-top':'1px solid #7b470e',
			'border-left':'1px solid #7b470e',
			'border-right':'1px solid #7b470e',
			'border-bottom':'none'
		});
		$('#box').children('a').find('span').css({
			'background-position':'-134px 0px',
		});
		return false;
	})
	.on('click','.goods span',function(){
		boxcolse();
		return false;
	})
	.on('click','.list5 li',function(){
		$('.gd').html($(this).html()+'<span></span>');
		boxcolse();
		return false;
	});
	$('body').click(function(){
		boxcolse();
	});


	//选择价位
	$('#clr').on('click','li',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$('#nr .clr1').text($(this).text()).css({
			'color':'#c7012c',
		});

	});


	//选择价位
	$('#size').on('click','li',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$('#nr .size2').text($(this).text()).css({
			'color':'#c7012c',
		});
	});
	//阻止a标签的默认行为
	$(' #clr a,.details_left a, #size a, .con .contiune').click(function(e){
		e.preventDefault();
	});
	var n = 0;
	$('.jia').click(function(){
		n++;
		if ( n>= 100) {
			n=100;
		}
		$('.buy .num').text(n);
	});
	$('.jian').click(function(){
		n--;
		if ( n<= 1) {
			n=1;
		}
		$('.buy .num').text(n);
	});

	//左侧hot tab键切换
		$('.hot_nr .tab1').on('click','li',function(){
			console.log(1)
			var index = $(this).index();
			$(this).addClass('active1').siblings('li').removeClass('active1')
			$('.hot_nr .content1').eq(index).show().siblings('.hot_nr .content1').hide();
		});
	//左侧hot鼠标移入li
	$('.content1 li:first').find('.pic1').show();
	$('.content1 li:first').find('.type').hide();
	$('.content1 li').on('mouseover',function(){
			$(this).children('.type').hide();
			$(this).siblings('li').children('.type').show();
			$(this).children('.pic1').show();
			$(this).siblings('li').children('.pic1').hide();
	});

	//中间部分大的TAB切换
	$('.details_right #rg_list').on('click','li',function(){
		var index=$(this).index();
		$(this).addClass('bg_list').siblings('li').removeClass('bg_list');
		$('.content6').eq(index).show().siblings('.content6').hide();
	})
	//尾部的TAB键切换
	$('.comments #list8').on('click','li',function(){
		$(this).addClass('bg_list1').siblings('li').removeClass('bg_list1');
		$(this).addClass('bg_list2').siblings('li').removeClass('bg_list2');
	});


	



     //放大镜下的小的ul TAB切换
		var $bigimg = $('.bigimg');
		var $smallimg = $('.smallimg');
		var $smallLi = $('.smallimg li'); 
		//默认第一张显示
		$('.fdj').html($smallLi.eq(0).html());

		//当鼠标移入时图片变换
		$smallimg.on('mouseover','li',function(){

			var src = $(this).find('img').attr('src');
			$bigimg.find('img').attr('src',src);
			$('.fdj').html($(this).html());
			$('.fdj').find('img').addClass('dt');
		});
		$('.fdj').find('img').addClass('dt');


		//点击小图向左，向右按钮的轮播图
		var iWidth = $('.smallimg li:first').outerWidth(true);
		var index = 0;
		//console.log(iWidth);
		function movebtn(){
			index++;
			if (index >= 4) {
				index = 3;
				return;
			}
			if ( index <= -1) {
				index = 1;
				return;
			}
			var iLeft = -1*index*iWidth;
			$('.smallimg').animate({'left':iLeft});

		}
		$('.gt').click(function(){
			index -= 2;
			movebtn();
		});
		$('.lt').click(function(){
			console.log(1);
			movebtn();
		});


		//加入购物车弹窗事件 与设置COOKIE
	var $a = $('.btm_bottom .buy .num');
	var $tana = $('.aletrBox-con .tip .count');
	var $price = $('.aletrBox-con .tip .price');
	var flag6=true;
     $('.buys2').click(function(){
     	$('#aletrBox').show();
     	//console.log($a.text());
     	// $tana.text($a.text());
     	$price.html($a.text()*$price.text());

     	//设置cookie
     	var $img1= $('.bigimg').children('a').html();
     	var $title = $('.fs1').children('em').text();
     	var $price2 = $('.attr_center .price').find('em').html();
     	console.log($price2);
     	var $num_count = $tana.text();

     	var $price1 = $('.aletrBox-con .tip .price').text();
     	var obj={};
     	obj.a= $img1;
     	obj.b= $title;
     	obj.c= $num_count;
     	obj.d= $price1;
     	obj.e =$price2;
     	//console.log('出去的对象：'+obj);
     	if (flag6) {
     		var n = parseInt($a.text());
     		$tana.text(n);
     		flag6 = false;
     	}else{
     		var n = parseInt(obj.c) + parseInt($a.text());
	     	$tana.text(n);   	
     	}
     	obj.f = $tana.text();
     	console.log(obj.f);
     	var str1 = JSON.stringify(obj);
     	console.log(str1);
     	setCookie('obj',str1,100);
     
     
     	
     });
     $('#aletrBox .btn').on('click',function(){
     	$('#aletrBox').hide();
     });
     $('#aletrBox .contiune').on('click',function(){
     	$('#aletrBox').hide();
     });
     //放大镜
     obj.start();
});


//放大镜效果
var obj= {
	dom:{},
	start:function(){
		this.init();
		this.movein();
	},
	init:function(){
		var dom = this.dom;
		dom.bigimg = $('.bigimg');
		dom.span = $('.bigimg span');
		dom.width = parseInt(dom.span.css('width'))/2;
		dom.height = parseInt(dom.span.css('height'))/2;
		//console.log('dom.width:'+dom.width,'dom.height'+dom.height);
		dom.fdj = $('.fdj');
		dom.goods = $('#box .gd');
		//console.log(dom.fdj);
	},
	movein:function(){

		var dom = this.dom;
		//当鼠标移入图片时，小放大镜显示，
		dom.bigimg.hover(function(){
			dom.span.css('display','block');
			dom.fdj.css('display','block');
			dom.goods.css('display','none');
		},function(){
			dom.span.css('display','none');
			dom.fdj.css('display','none');
			dom.goods.css('display','block');
		});

		dom.bigimg.mousemove(function(e){
			var e =e || window.event;

			var _x = e.pageX-dom.bigimg.offset().left-dom.width+'px';
			var _y = e.pageY-dom.bigimg.offset().top-dom.height+'px';

			x = parseInt(_x);
			y = parseInt(_y);

			//判断小图的位置极限
			if(x <= 0){
				x = 0;
			}else if( x >= dom.bigimg.outerWidth()- dom.width*2){
				x = dom.bigimg.outerWidth()- dom.width*2;
			};

			if (y <= 0) {
				y = 0;
			}else if( y >= dom.bigimg.outerHeight()- dom.height*2){

				y = dom.bigimg.outerHeight()- dom.height*2;
			}

			dom.span.css({'left': x,'top': y});

			var b_left = x / (dom.bigimg.width()- dom.width*2);
			var b_top = y / (dom.bigimg.height()- dom.height*2);

			var d_left =  (dom.fdj.find('.dt').width()- dom.fdj.width()) * b_left;
			var d_top =  (dom.fdj.find('.dt').height()- dom.fdj.height()) * b_top;

			//判断大图的位置极限
			if (d_top >=dom.fdj.find('.dt').outerHeight()-dom.fdj.outerHeight()) {
				d_top =dom.fdj.find('.dt').outerHeight()-dom.fdj.outerHeight();
			}
			if (d_left >=dom.fdj.find('.dt').outerWidth()-dom.fdj.outerWidth()) {
				d_left =dom.fdj.find('.dt').outerWidth()-dom.fdj.outerWidth();
			}
			dom.fdj.find('.dt').css({'left':-d_left,'top':-d_top});
		});
	}
};