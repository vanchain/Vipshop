$(function() {
	// 跳转
	$(".floor03").find("a").attr("href","list01.html");
	$(".floor04 .right").find("a").attr("href","list02.html");
	$(".floor05").find("a").attr("href","xiangqingye.html");
	
	// 头尾
	$("#header").load("header/header.html");
	$("#footer").load("footer/footer.html");
	
	//精选分类部分动画
	var $sort = $(".floor04 .container>.sort>.left li");
	$sort.hover(function() {
		$(this).find("span").eq(0).css("color", "#fd628d");
	}, function() {
		$(this).find("span").eq(0).css("color", "#4d4d4d");
	});

	$sort.click(function() {
		//左侧红色上边框
		$(this).parent().siblings().find("li").removeClass("clicked");
		$(this).addClass("clicked");
		$(this).find(".pp").removeClass("pp");
		$(this).parent().siblings().find("div").addClass("pp");
		//右侧商品显示
		var idx = $(this).parent().index();
		// console.log(idx);

		for (i = 0; i < 8; i++) {
			$(".floor04 .container>.sort>.right").hide();
			$(".floor04 .container>.sort>.right").eq(i).show();
			if(i==idx)
			break;
		}
	});

	//商品动画
	$(".floor05 .item").hover(function() {

		//鼠标移入透明度变化
		$(this).find("a").eq(0).css("opacity", "0.7");
		//过一定时间透明度变回来
		setTimeout(function() {
			$(".floor05 .item").find("a").css("opacity", "1");
		}, 500);

		var $shoucang = $("<div>");
		$shoucang.addClass("shoucang");
		$shoucang.append("<img src='img/muying/xin.png'/>");
		$shoucang.append("<span>收藏品牌</span>");
		$(this).find("a").eq(0).append($shoucang);

		//收藏商品
		$(".floor05 .item .shoucang").hover(function() {
			$(".floor05 .item .shoucang").find("img").attr('src', 'img/muying/xin2.png');
		}, function() {
			$(".floor05 .item .shoucang").find("img").attr('src', 'img/muying/xin.png');
		});

	}, function() {
		$(this).find(".shoucang").remove();
	});

});
