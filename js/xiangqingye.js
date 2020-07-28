$(function() {
	// 跳转
	$(".floor02 .left>div>div:eq(1)").find("a").attr("href", "help.html");

	// 放大镜---另外创建一个div容器，防止一开始的事件冲突
	$("#fdj").children().hover(function() {
		var tupian = $("#fdj").find("img").attr("src");
		fangda('fdj', 120, 100, 'blue', 0.6, 3, '');
	}, function() {
		// $(this).children().children("div").remove();
	})

	//图片切换
	$(".floor02 .left ul li").click(function() {
		$(this).parent().siblings("div:first").children().html($(this).children().html())
	})

	//颜色、尺码点击
	$(".floor02 .right .tbl tr ul .click").hover(function() {
		$(this).addClass("change2");
	}, function() {
		$(this).removeClass("change2");
	})
	$(".floor02 .right .tbl tr ul .click").click(function() {
		$(this).children("span").addClass("chiMa");
		$(this).siblings().children("span").removeClass("chiMa");
		$(this).siblings().removeClass("change");
		$(this).siblings().children("img").removeClass("xianshi");
		$(this).toggleClass("change");
		$(this).children("img").toggleClass("xianshi");
	})

	// 数字加减
	$(".floor02 .right .tbl tr:last td:last div a:eq(0)").click(function() {
		$(this).siblings("span").text("1");
	})
	$(".floor02 .right .tbl tr:last td:last div a:eq(1)").click(function() {
		$(this).siblings("span").text("2");
	})

	//收藏
	$(".floor02 .left>div:nth-child(3)>a:nth-child(2)").click(function() {
		$(this).toggleClass("changeStar");
		if ($(this).is(".changeStar")) {
			$(this).text("取消收藏");
		} else {
			$(this).text("收藏商品");
		}
	})

	// 分享
	$(".floor02 .left>div:nth-child(3)>div div:first-child").hover(function() {
		$(this).css({
			"border-bottom-color": "#fff",
			"background-image": "url(img/xiangqingye/shangla.png)"
		});
		$(this).parent().children("div:last").css("display", "block");
		$(this).parent().hover(function() {
			//do nothing
		}, function() {
			$(this).children("div:eq(0)").css({
				"border-bottom-color": "#c2c2c2",
				"background-image": "url(img/xiangqingye/xiala.jpg)"
			});
			$(this).children("div:last").hide();
		})
	}, function() {
		//do nothing
	});

	// 服务显示
	$(".floor02 .right>div:nth-child(8) ul").hover(function() {
		$(this).parent().siblings(".floor02 .right>ul:last-child").css("display", "block");
		$(this).parent().siblings(".floor02 .right>ul:last-child").hover(function() {
			//
		}, function() {
			$(this).css("display", "none");
		})
	}, function() {
		// $(this).parent().siblings(".floor02 .right>ul:last-child").css("display","none");
	})

	// 尺码小帮手
	$(".floor02 .right>div:nth-child(9)").hover(function() {
		$(this).find("div").css({
			"color": "#FFFFFF",
			"background-color": "#f10180"
		})
	}, function() {
		$(this).find("div").css({
			"color": "#f10180",
			"background-color": "#FFFFFF"
		})
	})
	// 尺码选择
	$(".chiDu").click(function() {
		document.body.scroll = "no";
		$(".chima").css("display", "block");
	})
	$(".chima").click(function() {
		$(this).hide();
	})

	// 地区选择
	$('#demo2').citys({
		required: false,
		nodata: 'disabled',
		onChange: function(data) {
			var text = data['direct'] ? '(直辖市)' : '';
			$('#place').text('当前选中地区：' + data['province'] + text + ' ' + data['city'] + ' ' + data['area']);
		}
	});

})


// 放大镜---网上搜寻的代码
var fangda = function(mainId, boxWidth, boxHeight, bgcolor, opacity, multiple, imgsrc) {
	//获取主容器
	var main = document.getElementById(mainId);
	//获取图片
	var img = main.getElementsByTagName('img')[0];
	//获取图片宽高，设置给其父容器
	var imgW = img.offsetWidth;
	var imgH = img.offsetHeight;
	main.style.width = imgW + 'px';
	main.style.height = imgH + 'px';
	main.style.position = 'relative';
	//hidden为了后面的方块在鼠标移出后消失
	main.style.overflow = 'hidden';
	//动态创建放大的小方块，设置属性，并且添加到main内
	var box = document.createElement("div");
	box.style.width = boxWidth + 'px';
	box.style.height = boxHeight + 'px';
	box.style.backgroundColor = bgcolor;
	box.style.opacity = opacity;
	//设置绝对定位时，要想起来给其父容器设置相对定位
	box.style.position = 'absolute';
	box.style.top = 0;
	box.style.left = 0;
	box.style.cursor = 'move';
	//none是为了一开始隐藏，鼠标移入main再显示
	box.style.display = 'none';
	main.appendChild(box);

	//给main添加鼠标移入事件
	//移入显示box
	main.onmouseover = function() {
		box.style.display = 'block';
		showBox.style.display = 'block';
		showBox.style.zIndex = 999;
	}
	//移出隐藏box
	main.onmouseout = function() {
		box.style.display = 'none';
		showBox.style.display = 'none';
		showBox.style.zIndex = -999;
	}
	//设置main的鼠标移动事件，带着box走
	//提前获取一些值
	//获取main距离左边与顶部的距离
	var mainL = main.offsetLeft;
	var mainT = main.offsetTop;
	//获取main和box的宽高;
	var mainW = main.offsetWidth;
	var mainH = main.offsetHeight;
	//getComputedStyle(box).width获取到的是带有单位px的值，需要转化为整数
	var boxW = parseInt(getComputedStyle(box).width);
	var boxH = parseInt(getComputedStyle(box).height);

	//动态创建显示的容器以及其内的图片,为了使用mainL等已经获取的值
	//并且设置其属性
	var showBox = document.createElement("div");
	showBox.style.width = boxWidth * multiple + 'px';
	showBox.style.height = boxHeight * multiple + 'px';
	showBox.style.position = 'fixed';
	showBox.style.left = (mainL + mainW + 5) + 'px';
	showBox.style.top = mainT + 'px';
	showBox.style.overflow = 'hidden';
	showBox.style.display = 'none';
	showBox.style.zIndex = -999;
	//创建图片
	var showImg = document.createElement("img");
	if (imgsrc == '') {
		showImg.src = img.src;
	} else {
		showImg.src = imgsrc;
	}

	showImg.style.width = imgW * multiple + 'px';
	showImg.style.height = imgH * multiple + 'px';
	showImg.style.position = 'absolute';
	//把图片添加到showBox内，
	showBox.appendChild(showImg);
	//再把showBox添加到body内
	document.getElementsByTagName('body')[0].appendChild(showBox)

	main.onmousemove = function(event) {
		//获取鼠标位置
		var x = event.pageX;
		var y = event.pageY;

		//把获取box的宽高放在显示之后才能获取到，若想在之前获取，用getComputedStyle(box).width
		//					var boxW = box.offsetWidth;
		//					var boxH = box.offsetHeight;

		//对box的left和top进行赋值
		//赋值前进行判断。让box不能超出main范围
		var left = x - mainL - boxW / 2;
		var top = y - mainT - boxH / 2;
		if (left <= 0) {
			left = 0;
		}
		if (top <= 0) {
			top = 0;
		}
		if (left >= mainW - boxW) {
			left = mainW - boxW;
		}
		if (top >= mainH - boxH) {
			top = mainH - boxH;
		}
		box.style.left = left + 'px';
		box.style.top = top + 'px';
		//根据放大倍数设置showImg的位置
		showImg.style.left = -left * multiple + 'px'
		showImg.style.top = -top * multiple + 'px';
	}
}
