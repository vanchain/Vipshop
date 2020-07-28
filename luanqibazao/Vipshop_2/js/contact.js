$(function() {
	$(".floor05 .box .item").hover(function(){
		$(this).find("img").attr('src','img/fuwuzhongxin/hp1.png');
		$(this).find("span").css("color","#fff")
	},function(){
		$(this).find("img").attr('src','img/fuwuzhongxin/p1.png');
		$(this).find("span").css("color","#333")
	});
})
