$(function() {
	// 头部
	$(".header").load("header/header.html");
	// 尾部
	$(".footer").load("footer/footer.html");
	
	// 跳转
	$("#jingxuan").children(".container").find("a").attr('href','list.html');
	$("#nvzhuang").find("a").attr('href','list01.html');
	$("#xiebao").find("a").attr('href','list02.html');
	$("#nanzhuang").find("a").attr('href','list.html');
	$("#yundong").find("a").attr('href','list01.html');
	$("#shipin").find("a").attr('href','list02.html');
	$("#meizhuang").find("a").attr('href','list.html');
	$("#muying").find("a").attr('href','list01.html');
	$("#jujia").find("a").attr('href','list02.html');
	$("#guoji").find("a").attr('href','list.html');
	$("#shenghuo").find("a").attr('href','list01.html');
	

	//轮播图
	var mySwiper = new Swiper('.banner .swiper-container', {
		loop: true, // 循环模式选项
		autoplay: {
			delay: 1500,
			disableOnInteraction: false
		},

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			clickable :true,
		},

		//切换效果
		effect: 'fade',

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// 如果需要滚动条
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	})
	mySwiper.scrollbar.$dragEl.css({
		'background': '#e6057d',
		'left': '-230px',
	});
	mySwiper.el.onmouseover = function() {
		//鼠标滑过停止自动切换
		mySwiper.autoplay.stop();
		//鼠标滑过显示左右按钮
		mySwiper.navigation.$nextEl.removeClass('hide');
		mySwiper.navigation.$prevEl.removeClass('hide');
	}
	mySwiper.el.onmouseout = function() {
		mySwiper.autoplay.start();
		mySwiper.navigation.$nextEl.addClass('hide');
		mySwiper.navigation.$prevEl.addClass('hide');
	}
	//鼠标滑过pagination控制swiper切换
	for(i=0;i<mySwiper.pagination.bullets.length;i++){
	  mySwiper.pagination.bullets[i].onmouseover=function(){
	    this.click();
	  };
	} 

	//每日必看
	$(".content01 .mid ul li").hover(function() {
		$(this).stop().animate({
			"background-size": "105%"
		}, 200)
	}, function() {
		$(this).stop().animate({
			"background-size": "100%"
		}, 200)
	})
	$(".content01 .btm ul li a").hover(function() {
		$(this).find("img").stop().animate({
			"width": "90px"
		}, 200)
	}, function() {
		$(this).find("img").stop().animate({
			"width": "80px"
		}, 200)
	})


	// 图片特效
	$(".content02 .neirong>ul li").hover(function() {
		$(this).find("img").stop().animate({
			"opacity": "0.7"
		}, 200)
	}, function() {
		$(this).find("img").stop().animate({
			"opacity": "1"
		}, 200)
	})

	// 左侧浮动栏
	// 滑过事件
	var $nav = $(".content06 ul li");
	$nav.hover(function() {
		$(this).css("background-color", "#fff");
		$(this).find("span").css("color", "#f10180");
		var $idx = parseInt($(this).index()) + 1;
		$(this).find("img").attr("src", "img/shouye/nav_" + $idx + ".png");
	}, function() {
		$(this).find("span").css("color", "#898989");
		var $idx = parseInt($(this).index()) + 1;
		$(this).find("img").attr("src", "img/shouye/nav_" + $idx + ".jpg");
	});
	// 屏幕滚动事件---定位
	$(document).scroll(function() {
		var $nav = $(".content06 ul li");
		var top = parseInt($(document).scrollTop());
		if (top < 1800) {
			change(13);
		} else if (top < 3454) {
			change(1);
			$nav.eq(0).find("img").attr("src", "img/shouye/nav_1.png");
		} else if (top < 5086) {
			change(2);
			$nav.eq(1).find("img").attr("src", "img/shouye/nav_2.png");
		} else if (top < 6718) {
			change(3);
			$nav.eq(2).find("img").attr("src", "img/shouye/nav_3.png");
		} else if (top < 7565) {
			change(4);
			$nav.eq(3).find("img").attr("src", "img/shouye/nav_4.png");
		} else if (top < 8412) {
			change(5);
			$nav.eq(4).find("img").attr("src", "img/shouye/nav_5.png");
		} else if (top < 9259) {
			change(6);
			$nav.eq(5).find("img").attr("src", "img/shouye/nav_6.png");
		} else if (top < 10106) {
			change(7);
			$nav.eq(6).find("img").attr("src", "img/shouye/nav_7.png");
		} else if (top < 10953) {
			change(8);
			$nav.eq(7).find("img").attr("src", "img/shouye/nav_8.png");
		} else if (top < 11800) {
			change(9);
			$nav.eq(8).find("img").attr("src", "img/shouye/nav_9.png");
		} else if (top < 12647) {
			change(10);
			$nav.eq(9).find("img").attr("src", "img/shouye/nav_10.png");
		} else if (top < 13494) {
			change(11);
			$nav.eq(10).find("img").attr("src", "img/shouye/nav_11.png");
		} else {
			change(13);
		}
	})

	//收藏品牌
	//滑过
	$(".content02 .neirong li>a").hover(function() {
		$(this).children().eq(4).css("display", "block");
	}, function() {
		$(this).children().eq(4).css("display", "none");
	})
	//点击
	$(".content02 .neirong li>a div:last-child").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("change");
		if ($(this).is(".change")) {
			$(this).text("取消收藏");
		} else {
			$(this).text("收藏品牌");
		}
	})

	// 倒计时
	function timer(countdown_econds) {
		// var countdown_econds = parseInt(1800); //倒计时总秒数量
		var stop_time = localStorage.getItem('stop_time')
		if (stop_time == null || stop_time == undefined || stop_time == 'undefined' || stop_time == 'null') {
			var cur = new Date() // 当前时间
			var cur1 = new Date().getTime() // 当前时间戳
			var end_time = new Date(cur.setSeconds(cur.getSeconds() + countdown_econds));
			end_time = end_time.getTime() //结束时间戳
			localStorage.setItem('stop_time', end_time)
		}
		window.setInterval(function() {
			var day = 0,
				hour = 0,
				minute = 0,
				second = 0; //时间默认值    
			if (countdown_econds > 0) {
				day = Math.floor(countdown_econds / (60 * 60 * 24));
				hour = Math.floor(countdown_econds / (60 * 60)) - (day * 24);
				minute = Math.floor(countdown_econds / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(countdown_econds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			} else { //当时间耗尽，跳回指定页面
				localStorage.setItem('stop_time', null)
				window.location = url;
			}
			if (hour <= 9) hour = '0' + hour;
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;
			$(".float .neirong div:first span:eq(0)").text(hour);
			$(".float .neirong div:first span:eq(1)").text(minute);
			$(".float .neirong div:first span:eq(2)").text(second);
			// $(".timeShow").html('00' + ':' + minute + ':' + second);
			countdown_econds--;
		}, 1000);
	}
	timer(parseInt(44585));
	if (localStorage.getItem('stop_time') != undefined && !isNaN(localStorage.getItem('stop_time'))) {
		var stop_time = localStorage.getItem('stop_time')
		var now = new Date().getTime(); //当前时间戳
		var countdown_econds = parseInt((stop_time - now) / 1000);
		if (countdown_econds <= 0) {
			localStorage.setItem('stop_time', null)
		} else {
			timer(countdown_econds);
		}
	}


});

// 导航栏变化
function change(n) {
	var m = n - 1;
	var $nav = $(".content06 ul li");
	if (n < 12) {
		$(".content06").css("position", "fixed");
		$nav.eq(m).find("span").css("color", "#f10180");
		$nav.eq(m).siblings().find("span").css("color", "#898989");
		for (var i = 1; i < 12; i++) {
			$nav.eq(i - 1).find("img").attr("src", "img/shouye/nav_" + i + ".jpg");
		}
	} else {
		$(".content06").css("position", "absolute");
		$nav.find("span").css("color", "#898989");
		for (var i = 1; i < 12; i++) {
			$nav.eq(i - 1).find("img").attr("src", "img/shouye/nav_" + i + ".jpg");
		}
	}
}
