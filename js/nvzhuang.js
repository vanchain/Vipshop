$(function(){
	// 跳转
	$(".item").find("a").attr("src","list01.html");
	$(".item").find("img").click(function(){
		window.location.href="list02.html";
	})
	
	//热门分类部分动画
	var $sort = $(".display .container>.item>ul>li");
	$sort.hover(function() {
		$(this).find("a").eq(0).css("color", "#fd628d");
	}, function() {
		$(this).find("a").eq(0).css("color", "#4d4d4d");
	});
	
	
	var $sort = $(".floor04 .container>.sort>.left li");
	$sort.hover(function() {
		$(this).find("span").eq(0).css("color", "#fd628d");
	}, function() {
		$(this).find("span").eq(0).css("color", "#4d4d4d");
	});
	
	
	$sort.click(function() {
		$(this).parent().siblings().find("li").removeClass("clicked");
		$(this).addClass("clicked");
		$(this).find(".pp").removeClass("pp");
		$(this).parent().siblings().find("div").addClass("pp");
		var idx = $(this).parent().index();
		// console.log(idx);
	
		for (i = 0; i < 8; i++) {
			$(".floor04 .container>.sort>.right").hide();
			$(".floor04 .container>.sort>.right").eq(i).show();
			if(i==idx)
			break;
		}
	
		
	});
	
	$(".ZhuanChang_display .item").hover(function() {
	
			//鼠标移入透明度变化
			$(this).find("div>img").eq(0).css("opacity", "0.7");
			//过一定时间透明度变回来
			setTimeout(function() {
				$(".ZhuanChang_display .item").find("div>img").css("opacity", "1.0");
			}, 500);
	
			var $shoucang = $("<div>");
			$shoucang.addClass("shoucang");
			$shoucang.append("<img src='img/muying/xin.png'/>");
			$shoucang.append("<span>收藏品牌</span>");
			$(this).find("a").eq(0).append($shoucang);
	
			//收藏商品
			$(".ZhuanChang_display .item .shoucang").hover(function() {
				$(".ZhuanChang_display .item .shoucang").find("img").attr('src', 'img/muying/xin2.png');
			}, function() {
				$(".ZhuanChang_display .item .shoucang").find("img").attr('src', 'img/muying/xin.png');
			});
	
		}, function() {
			$(this).find(".shoucang").remove();
		});
});



