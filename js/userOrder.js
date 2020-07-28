$(function() {
	//获取数据
	var dingdan01 = localStorage.getItem("dingdan01");
	var dingdan02 = localStorage.getItem("dingdan02");
	// localStorage.clear();
	if (dingdan01 != null) {
		dingdan01 = JSON.parse(dingdan01);
		for (var i = 0; i < dingdan01.items.length; i++) {

			var productItem = dingdan01.items[i];

			$("#p1").css("border-bottom", "2px solid #f10180");
			$(".right02>.item5").hide();

			//显示所有订单
			$(".dingdanX").show();

			//待付款

			$(".right02 .item3 .p").css("border-bottom", "0");
			$("#p1").css("border-bottom", "2px solid #f10180");
			var $dingdan = $("#dingdan").html();
			// console.log($dingdan);
			$("#daifukuan").append($dingdan);
			//修改内容
			$("#daifukuan .pp:last-child table tr td:eq(0) img").attr("src", productItem.img);
			$("#daifukuan .pp:last-child table tr td:eq(0) .detail span:eq(0)").text(productItem.name);
			$("#daifukuan .pp:last-child table tr td:eq(0) .detail span:last").text(productItem.chima);
			$("#daifukuan .pp:last-child table tr td:eq(0) span:nth-child(4)").text(productItem.amount);
			$("#daifukuan .pp:last-child table tr td:eq(1) span:eq(0)").text(productItem.price);

			$("#daifukuan .pp:last-child table tr td:eq(2) span").text("未支付");
			$("#daifukuan .pp:last-child table tr td:eq(3) a").text("支付");
			$("#daifukuan .pp:last-child table tr td:eq(4) a").text("取消");
			//为取消操作设置id
			$("#daifukuan .pp:last-child table tr td:eq(4) a").attr('id', 'quxiao');

			$(".dingdanX").hide();
			$("#daifukuan").show();
			
			//修改链接跳转到支付界面
			$("#daifukuan .pp:last-child table tr td:eq(3) a").attr('href','shopcar_03.html');
			
			//点击取消
			$("#quxiao").click(function() {
				
				// console.log("888");
				$("#yiquxiao").append($dingdan);
				$("#yiquxiao .pp:last-child table tr td:eq(4) a").text("已取消");
				$("#daifukuan .pp:last-child").remove();
				//已取消

				var $dingdan = $("#dingdan").html();
				// console.log($dingdan);
				$("#yiquxiao").append($dingdan);
				//修改内容
				$("#yiquxiao .pp:last-child table tr td:eq(0) img").attr("src", productItem.img);
				$("#yiquxiao .pp:last-child table tr td:eq(0) .detail span:eq(0)").text(productItem.name);
				$("#yiquxiao .pp:last-child table tr td:eq(0) .detail span:last").text(productItem.chima);
				$("#yiquxiao .pp:last-child table tr td:eq(0) span:nth-child(4)").text(productItem.amount);
				$("#yiquxiao .pp:last-child table tr td:eq(1) span:eq(0)").text(productItem.price);

				$("#yiquxiao .pp:last-child table tr td:eq(4) a").text("已取消");

				$(".dingdanX").hide();
				$("#yiquxiao").show();

			});

		}
	}

	if (dingdan02 != null) {
		dingdan02 = JSON.parse(dingdan02);
		for (var i = 0; i < dingdan02.items.length; i++) {

			var productItem = dingdan02.items[i];

			$("#p1").css("border-bottom", "2px solid #f10180");
			$(".right02>.item5").hide();

			//显示所有订单
			$(".dingdanX").show();

			//待收货

			$(".right02 .item3 .p").css("border-bottom", "0");
			$("#p1").css("border-bottom", "2px solid #f10180");
			var $dingdan = $("#dingdan").html();
			// console.log($dingdan);
			$("#daishouhuo").append($dingdan);
			//修改内容
			$("#daishouhuo .pp:last-child table tr td:eq(0) img").attr("src", productItem.img);
			$("#daishouhuo .pp:last-child table tr td:eq(0) .detail span:eq(0)").text(productItem.name);
			$("#daishouhuo .pp:last-child table tr td:eq(0) .detail span:last").text(productItem.chima);
			$("#daishouhuo .pp:last-child table tr td:eq(0) span:nth-child(4)").text(productItem.amount);
			$("#daishouhuo .pp:last-child table tr td:eq(1) span:eq(0)").text(productItem.price);

			$("#daishouhuo .pp:last-child table tr td:eq(2) span").text("待收货");
		}
	}

	//点击显示全部订单
	$("#p1").click(function() {
		$(".right02 .item3 .p").css("border-bottom", "0");
		$(this).css("border-bottom", "2px solid #f10180");
		//显示所有订单
		$(".dingdanX").show();
	});

	//待付款
	$("#p2").click(function() {
		$(".right02 .item3 .p").css("border-bottom", "0");
		$(this).css("border-bottom", "2px solid #f10180");

		$(".dingdanX").hide();
		$("#daifukuan").show();
	});

	//待收货
	$("#p3").click(function(){
		$(".right02 .item3 .p").css("border-bottom","0");
		$(this).css("border-bottom","2px solid #f10180");

		$(".dingdanX").hide();
		$("#daishouhuo").show();
	});
	
	//已取消
	$("#p5").click(function(){
		$(".right02 .item3 .p").css("border-bottom","0");
		$(this).css("border-bottom","2px solid #f10180");

		$(".dingdanX").hide();
		$("#yiquxiao").show();
	});
	
	//已完成部分无法模拟,点击"已完成"标题创建已完成订单
	//已完成
	$("#p4").click(function(){
		$(".right02 .item3 .p").css("border-bottom","0");
		$(this).css("border-bottom","2px solid #f10180");
		var $dingdan = $("#dingdan").html();
		// console.log($dingdan);
		$("#yiwancheng").append($dingdan);
		//修改内容
		$("#yiwancheng .pp:last-child table tr td:eq(0) img").attr("src", productItem.img);
		$("#yiwancheng .pp:last-child table tr td:eq(0) .detail span:eq(0)").text(productItem.name);
		$("#yiwancheng .pp:last-child table tr td:eq(0) .detail span:last").text(productItem.chima);
		$("#yiwancheng .pp:last-child table tr td:eq(0) span:nth-child(4)").text(productItem.amount);
		$("#yiwancheng .pp:last-child table tr td:eq(1) span:eq(0)").text(productItem.price);
		
		$("#yiwancheng .pp:last-child table tr td:eq(2) span").text("已签收");
		// $("#yiwancheng .pp:last-child table tr td:eq(3) a").text("支付");
		$("#yiwancheng .pp:last-child table tr td:eq(4) a").text("申请退换");
		//修改链接跳转到退换货界面
		$("#yiwancheng .pp:last-child table tr td:eq(4) a").attr('href','userShouhou.html');
	
		$(".dingdanX").hide();
		$("#yiwancheng").show();
	});

});
