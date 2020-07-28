$(function(){
	$("#tijiaodingdan").click(function(){
		//存储数据
		var dingdan01 = localStorage.getItem("cart");
		if(dingdan01!=null){
			dingdan01 = JSON.parse(dingdan01);
		}
		localStorage.setItem("dingdan01",JSON.stringify(dingdan01));
	})
	
	// 从购物车中去数据
	var cart = localStorage.getItem("cart");
	// localStorage.clear();
	if (cart != null) {
		cart = JSON.parse(cart);
	
		for (var i = 0; i < cart.items.length; i++) {
			//购物车中的商品
			var productItem = cart.items[i];
	
			var $newTr = $(".jingxuan .tbl tr:eq(0)").clone();
	
			$newTr.children("td:eq(1)").children("a:eq(1)").text(productItem.name);
			$newTr.find("a:eq(3) span").text(productItem.price);
			$newTr.find("td:eq(3) span").text(productItem.amount);
			$newTr.find("a:eq(2) span").text(productItem.chima);
			$newTr.find("img:first").attr("src", productItem.img);
	
			$(".jingxuan .tbl tr:last").after($newTr);
		}
	}
	
	// 访问价格
	var priceAll = localStorage.getItem("zongJia");
	$(".peisong .tijiao span:first").text(priceAll);
})