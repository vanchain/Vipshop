$(function() {
	$(".zhifuchenggong").click(function() {
		//存储数据
		var dingdan02 = localStorage.getItem("cart");
		if (dingdan02 != null) {
			dingdan02 = JSON.parse(dingdan02);
		}
		localStorage.setItem("dingdan02", JSON.stringify(dingdan02));
		localStorage.removeItem("dingdan01")
	});
});
