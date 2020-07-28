$(function() {
	// 商品分类---下拉列表
	$(".header_menu ul li:first").hover(function() {
		$(".fenlei").stop().slideDown("fast");
		$(".fenlei .left ul li").hover(function(){
			$(this).css({
				"color": "#f10180",
				"background-color": "#fff"
			})
			$(this).children(".mid").add($(this).children(".right")).css("display", "block");
			$(this).siblings().children(".mid").hide();
			$(this).siblings().css({
				"color": "#fff",
				"background-color": "#f10180"
			})
			$(this).siblings().children(".right").hide();
		})
	}, function() {
		$(".fenlei").hide();
	})
})

