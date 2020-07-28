$(function(){
	$(".floor02 .right .jiaRu").click(function() {
		// 数据存储
		// 判断购物车数据在localStorage中是否已经存在
		var cart = localStorage.getItem("cart");
		if (cart == null) {
			cart = {
				items: []
			};
		} else {
			cart = JSON.parse((cart));
		}
	
		//点击添加到购物车，将商品添加到购物车
		var product = {
			id: "01",
			img:"img/shopcar01/shopcar01_13.jpg",
			name: $(".floor02 .right>span:eq(0)").text(),
			amount: parseInt($(".floor02 .right>.tbl tr:eq(6) span").text()),
			chima : $(".floor02 .right .tbl tr ul .click").find(".chiMa").text(),
			price: parseFloat($(".floor02 .right>div:eq(0) ul li:eq(1) span").text())
		}
		
	
		//在购物车中添加一个新的商品项
		//判断，要添加到购物车中的商品，是否已经存在
		var flash = false; //购物车种是否已存在此商品
		for (var i = 0; i < cart.items.length; i++) {
			var item = cart.items[i];
			if (item.id == product.id) {
				flash = true;
				item.amount += product.amount;
				break;
			}
		}
	
		if (!flash) {
			cart.items.push(product);
		}
	
		localStorage.setItem("cart", JSON.stringify(cart));
	
	
	})
})