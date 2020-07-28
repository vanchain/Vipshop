$(function() {

	//设置地址
	$(".body .adr:eq(0)").hide();
	$("#but").click(function() {
		//已创建地址的个数
		var length = $(".body").children().length;
		$(".right04 .box span:eq(2)").text(length);
		if(length>10){
			alert("您不能再创建新的地址了！");
		}else{//地址数目少于10才会创建
			var $adr = $(".body div:eq(0)").html();
			$(".body").append($adr);
			//设置地址
			$(".body .adr").show();
			$(".body .adr:eq(0)").hide();
			var person = $("#person").val();
			var cell = $("#cell").val();
			var options = $("#demo3 option:selected"); //获取选中的项
			var address = options.text(); //拿到选中项的值
			//先清空复制的地址的内容
			$(".adr:last-child #person2").empty();
			$(".adr:last-child #cell2").empty();
			$(".adr:last-child #address2").empty();
			//设置新地址
			$(".adr:last-child #person2").append(person);
			$(".adr:last-child #cell2").append(cell);
			$(".adr:last-child #address2").append(address);
		}
		//删除地址
		$(".right04 .body .adr .cell button").click(function(){
			$(this).parents(".adr").remove();
			$(".right04 .box span:eq(2)").text($(".body").children().length-1);
		});
	});
	
	//滚动到地址创建位置
	$(".right04 .box a").click(function() {
		$("html").animate({
			scrollTop: 410
		}, 50, "linear");
	});

});
