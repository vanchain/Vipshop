$(function() {
	//手机号
	var phonedom = document.querySelector("#phone");
	//密码
	var passdom = document.querySelector("#pass");
	//第二次输入的密码
	var pass1dom = document.querySelector("#pass1");
	// console.log(passdom);
	$(" .floor2 .login a input").click(function() {
		// localStorage.clear();
		// 获取到密码框的值
		var pass = $(passdom).val();
		var pass1 = $(pass1dom).val();
		var phone = $(phonedom).val();
		if (phone == "" || pass == "" || pass1 == "") {
			alert('请输入完整用户信息');
		} else {
			// 1开头,第二个是3-9,最后0-9结尾的十一位手机号
			var rage = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
			var text = rage.test(phone);
			if (text == false) {
				alert("请输入正确的手机号")
				phonedom.focus();
				// 变为空
				var nullAll = "";
				$(phonedom).val(nullAll);
			} else {
				var rag2 = /^\w{6,8}$/;
				var reset1 = rag2.test(pass);
				var rag3 = /[a-z]/;
				var reset2 = rag2.test(pass);
				var rag4 = /[A-Z]/;
				var reset3 = rag2.test(pass);
				if (reset1 == false || reset2 == false || reset3 == false) {
					passdom.focus();
					alert("请重新输入,密码由6-8位组成，包括大写，小写，数字组成")
					$(passdom).val(nullAll);
					$(pass1dom).val(nullAll);
				} else {
					//判断两次输入密码是否一致
					if (pass != pass1) {
						alert("两次输入的密码不一致");
					} else {
						alert("注册成功");
						var userInfo = {
							username: phone,
							password: pass
						};
						localStorage.setItem("user", JSON.stringify(userInfo));
					}
				}
			}
		}
	})
});
