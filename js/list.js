$(function() {
	// 跳转
	$(".floor3 .top").find("a").attr('href', 'list02.html');
	$(".floor3 .ctr").find('a').attr('href', 'xiangqingye.html');
	$(".floor4").find('a').attr('href', 'xiangqingye2.html');

	// 立即抢购
	$(".ctr a").hover(function() {
		$(this).find(".kuang").css("background-color", "#f10180");
		$(this).children(".kuang").find("span").css("color", "#fff");
	}, function() {
		$(this).find(".kuang").css("background-color", "#fff");
		$(this).children(".kuang").find("span").css("color", "#f10180");
	});


	// 点击更多
	$(".floor3 .more").click(function() {
		$(this).parent().css("display", "none");
		var temp = $(this).parents(".container").find(".ctr>.item3").eq(0).html();
		$(".floor3 .container .ctr:last").append(temp);
	});
})
