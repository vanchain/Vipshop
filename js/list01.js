$(function() {
	// a跳转
	$(".floor03").find("a").attr("href","list02.html");
	$(".floor04").find("a").attr("href","xiangqingye2.html");
	$(".floor05 .item").find("a").attr("href","xiangqingye.html");
	
	//右侧导航条
	//设定一个点击的显示效果的函数
	var click = function(p){
		var $click = $(".gps a");
		$click.eq(p).find("img").attr('src', 'img/liebiao001/gps2.png');
		$click.eq(p).find("span").css("color", "#f48b9a");
		$click.eq(p).siblings().find("img").attr('src', 'img/liebiao001/gps1.png');
		$click.eq(p).siblings().find("span").css("color", "#fff");
		$click.eq(p).addClass("clicked");
		$click.eq(p).siblings().removeClass("clicked");
	}
	//点击跳转效果
	var clickP = function(p){
		switch (p){
			case 0:
				$("html").animate({
					scrollTop: 1300
				}, 50, "linear");
				break;
			case 1:
				$("html").animate({
					scrollTop: 1800
				}, 50, "linear");
				break;
			case 2:
				$("html").animate({
					scrollTop: 3300
				}, 50, "linear");
				break;
			case 3:
				$("html").animate({
					scrollTop: 4500
				}, 50, "linear");
				break;
			case 4:
				$("html").animate({
					scrollTop: 5600
				}, 50, "linear");
				break;
			case 5:
				$("html").animate({
					scrollTop: 6750
				}, 50, "linear");
				break;
			case 6:
				$("html").animate({
					scrollTop: 7840
				}, 50, "linear");
				break;
			case 7:
				$("html").animate({
					scrollTop: 8950
				}, 50, "linear");
				break;
			case 8:
				$("html").animate({
					scrollTop: 10100
				}, 50, "linear");
				break;
			case 9:
				$("html").animate({
					scrollTop: 11200
				}, 50, "linear");
				break;
			case 10:
				$("html").animate({
					scrollTop: 12400
				}, 50, "linear");
				break;
			case 11://回到顶部
				$("html").animate({
					scrollTop: 0
				}, 50, "linear");
				$(this).removeClass("clicked");
				$(this).find("img").attr('src', 'img/liebiao001/gps1.png');
				$(this).find("span").css("color", "#fff");
				break;
			default:
				break;
			};
	};
	$(".gps a").click(function() {
		var idx = $(this).index();
		// console.log(idx);
		click(idx);
		clickP(idx);
	});
	$(".gps a").hover(function() {
		$(this).find("img").attr('src', 'img/liebiao001/gps2.png');
		$(this).find("span").css("color", "#f48b9a");
	}, function() {
		if ($(this).hasClass("clicked") == false) {
			$(this).find("img").attr('src', 'img/liebiao001/gps1.png');
			$(this).find("span").css("color", "#fff");
		}
	});
	//滑动到一定位置导航条出现
	$(window).scroll(function() {
		var height = $(document).scrollTop();
		// console.log(height);
		if (height > 1300) {
			$(".gps").css("display", "block");
			var h=0;
			if(height > 1300 && height < 1800){
				click(h);
			}else if(height>1800&&height<3300){
				h=1;
				click(h);
			}else if(height>3300&&height<4500){
				h=2;
				click(h);
			}else if(height>4500&&height<5600){
				h=3;
				click(h);
			}else if(height>5600&&height<6750){
				h=4;
				click(h);
			}else if(height>6750&&height<7840){
				h=5;
				click(h);
			}else if(height>7840&&height<8950){
				h=6;
				click(h);
			}else if(height>8950&&height<10100){
				h=7;
				click(h);
			}else if(height>10100&&height<11200){
				h=8;
				click(h);
			}else if(height>11200&&height<12400){
				h=9;
				click(h);
			}else if(height>12400&&height<13428){
				h=10;
				click(h);
			}
		} else {
			$(".gps").css("display", "none");
		}
	});
	
	
	//商品抢购动画
	$(".item a").hover(function(){
		$(this).find(".qianggou").css("background-color","#f10180");
		$(this).children(".qianggou").find("span").css("color","#fff");
	},function(){
		$(this).find(".qianggou").css("background-color","#fff");
		$(this).children(".qianggou").find("span").css("color","#f10180");
	})
	
	
	// //点击更多
	$(".floor05 .more").click(function(){
		$(this).parents(".container").find(".item").eq(2).css("display","block");
	});
})
