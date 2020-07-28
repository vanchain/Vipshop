$(function() {
	// 跳转
	$(".nav").find("a").attr("href","list02.html");
	$(".floor3").find("a").attr("href","xiangqingye.html");
	$(".floor4").find("a").attr("href","xiangqingye2.html");

	//商品动画
	$(".floor4 .btm .item1").hover(function() {

		//鼠标移入透明化
		$(this).find("a>img").eq(0).css("opacity", "0.8");

		setTimeout(function() {
			$(".floor4 .btm .item1").find("a>img").css("opacity", "1");
		}, 500);

	var $shoucang = $("<div>");
		$shoucang.addClass("shoucang");
		$shoucang.append("<span>收藏品牌</span>");
		// $shoucang.append("<img src='img/meizhuang-图片素材/xin.png'/>");
		$(this).find("a").eq(0).append($shoucang);
		
		//收藏商品
		$(".ZhuanChang_display .item .shoucang").hover(function() {
			$(".ZhuanChang_display .item .shoucang").find("img").attr('src', 'img/meizhuang-图片素材/xin2.png');
		}, function() {
			$(".ZhuanChang_display .item .shoucang").find("img").attr('src', 'img/meizhuang-图片素材/xin.png');
		});
		
	}, function() {
		$(this).find(".shoucang").remove();
	});

});
