$(function(){
	$(".floor02 .dingdan .p1").hover(function(){
		$(this).find("img").attr('src', 'img/user/hp1.png');
		$(this).find("a").css("color","#f10582");
	},function(){
		$(this).find("img").attr('src', 'img/user/p1.png');
		$(this).find("a").css("color","#333");
	});
	$(".floor02 .dingdan .p2").hover(function(){
		$(this).find("img").attr('src', 'img/user/hp2.png');
		$(this).find("a").css("color","#f10582");
	},function(){
		$(this).find("img").attr('src', 'img/user/p2.png');
		$(this).find("a").css("color","#333");
	});
	$(".floor02 .dingdan .p3").hover(function(){
		$(this).find("img").attr('src', 'img/user/hp3.png');
		$(this).find("a").css("color","#f10582");
	},function(){
		$(this).find("img").attr('src', 'img/user/p3.png');
		$(this).find("a").css("color","#333");
	});
	$(".floor02 .dingdan .p4").hover(function(){
		$(this).find("img").attr('src', 'img/user/hp4.png');
		$(this).find("a").css("color","#f10582");
	},function(){
		$(this).find("img").attr('src', 'img/user/p4.png');
		$(this).find("a").css("color","#333");
	});
});