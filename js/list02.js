$(function() {
	// 头尾
	$(".header").load("header/header.html");
	$(".footer").load("footer/footer.html");
	
	// 跳转
	$(".content01").find("a").attr("href","xiangqingye2.html");
	$(".content02").find("a").attr("href","list01.html");
	$(".content03").find("a").attr("href","xiangqingye.html");
	
	//右侧导航条
	//设定一个点击的显示效果的函数
	var click = function(p) {
		var $click = $(".gps a");
		$click.eq(p).css("color", "#f48b9a");
		$click.eq(p).siblings().css("color", "#5d5d5d");
		$click.eq(p).addClass("clicked");
		$click.eq(p).siblings().removeClass("clicked");
	}
	$(".gps a").click(function() {
		var idx = $(this).index();
		click(idx);
	});
	//滑动到一定位置导航条出现
	$(window).scroll(function() {
		var height = $(document).scrollTop();
		// console.log(height);
		if (height > 1000) {
			$(".gps").css("display", "block");
			var h = 0;
			if (height > 1300 && height < 1800) {
				click(h);
			} else if (height > 1800 && height < 3300) {
				h = 1;
				click(h);
			} else if (height > 3300 && height < 4500) {
				h = 2;
				click(h);
			} else if (height > 4500 && height < 5600) {
				h = 3;
				click(h);
			} else if (height > 5600 && height < 6750) {
				h = 4;
				click(h);
			} else if (height > 6750 && height < 7840) {
				h = 5;
				click(h);
			} else if (height > 7840 && height < 8950) {
				h = 6;
				click(h);
			} else if (height > 8950 && height < 10100) {
				h = 7;
				click(h);
			} else if (height > 10100 && height < 11200) {
				h = 8;
				click(h);
			} else if (height > 11200 && height < 12400) {
				h = 9;
				click(h);
			} else if (height > 12400 && height < 13428) {
				h = 10;
				click(h);
			}
		} else {
			$(".gps").css("display", "none");
		}
	});
	
	// 第一层动画---变大
	var $hezi = $(".content01 ul li");
	$hezi.find("div").before("<div class='shuoming'>");
	$hezi.find(".shuoming").text("精选爆款 点击抢购");
	$hezi.hover(function(){
		$(this).find("div").stop().animate({
			"margin-top":"30px"
		},200)
		$(this).stop().animate({
			"width":"180px",
			"height":"220px"
		},200);
		$(this).find("img").eq(1).stop().animate({
			"width":"140px"
		},200);
		$(this).find(".shuoming").stop().fadeIn(200);
	},function(){
		$(this).find("div").stop().animate({
			"margin-top":"15px"
		},200)
		$(this).stop().animate({
			"width":"170px",
			"height":"200px"
		},200);
		$(this).find("img").eq(1).stop().animate({
			"width":"130px"
		},200);
		$(this).find(".shuoming").stop().fadeOut(200);
	})
	
	// 第二层动画---红色升起
	$(".content02 ul li").append("<div class='hong'>");
	$(".content02 ul li").hover(function(){
		$(this).children(".hong").stop().animate({
			"top":"0"
		},200);
		$(this).find("span").css({
			"color":"#fff"
		})
	},function(){
		$(this).find("span").css({
			"color":"#4a4a4a"
		})
		$(this).children(".hong").stop().animate({
			"top":"100px"
		},200);
	})
	
	// 第三层以后的动画
	var $div = $(".content03 .neirong li");
	$div.hover(function(){
		$(this).find("div").stop().animate({
			"top":"330px"
		},300)
	},function(){
		$(this).find("div").stop().animate({
			"top":"378px"
		},300)
	})
})
