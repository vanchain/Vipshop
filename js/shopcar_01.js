$(function() {
	// $(".header").load("header/header_wudaohang.html");
	// $(".footer").load("footer/footer_1000.html");


	// 从购物车中去数据
	var cart = localStorage.getItem("cart");
	//清除购物车里的数据
	// localStorage.clear();
	if (cart != null) {
		cart = JSON.parse(cart);

		for (var i = 0; i < cart.items.length; i++) {
			//购物车中的商品
			var productItem = cart.items[i];

			var $newTr = $(".jingxuan .tbl tr:eq(1)").clone();

			$newTr.children("td:eq(1)").children("a:eq(1)").text(productItem.name);
			$newTr.find("a:eq(3) span").text(productItem.price);
			$newTr.find("td:eq(3) span").text(productItem.amount);
			$newTr.find("a:eq(2) span").text(productItem.chima);
			$newTr.find("img:first").attr("src", productItem.img);

			$(".jingxuan .tbl tr:eq(1)").after($newTr);
		}
	}

	// 计算总价
	var price = jiSuan();
	$(".bottom .right tr span").text(price);
	// 存储总价
	localStorage.setItem("zongJia", price);

	// 删除
	$(".jingxuan .tbl .trItem td:last-child a").click(function() {
		localStorage.removeItem("cart");
		$(this).parents(".trItem").remove();
		var price = jiSuan();
		$(".bottom .right tr span").text(price);
		localStorage.setItem("zongJia", price);
	})
	
})

function jiSuan() {
	// 计算价格
	var price = 0;
	for (var i = 0; i < $(".trItem").length; i++) {
		var shuLiang = parseInt($(".trItem").eq(i).find("td:eq(3) span").text());
		var danJia = parseInt($(".trItem").eq(i).find("td:eq(2) span").text());
		price += shuLiang * danJia;
	}
	return price;
}
