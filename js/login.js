window.onload = function() {
	// 扫码登录按钮
	var ma = document.querySelector('.floor2 .login .login-up .ma a');
	// 账户登录按钮
	var hu = document.querySelector('.floor2 .login .login-up .hu a');
	// 扫码显示
	var mad = document.querySelector('.floor2 .login .login-middle .ma');
	// 登录显示
	var hud = document.querySelector('.floor2 .login .login-middle .hu');

	ma.onclick = function() {
		mad.style.display = "block";
		hud.style.display = "none";
	};
	hu.onclick = function() {
		mad.style.display = "none";
		hud.style.display = "block";
	};


	//登录
	$("#login").click(function() {
		//取出localStorage中的数据
		var userInfo = localStorage.getItem("user");
		userInfo = JSON.parse(userInfo);

		//取出输入的手机号和密码的值
		var phone = $("#phone").val();
		var pass = $("#pass").val();

		//输入的值与localStorage中的值比较
		if (phone == userInfo.username && pass == userInfo.password) {
			window.location.replace("index.html");
		} else {
			alert("账号或密码输入错误");
		}
		console.log(userInfo);
	})

}


// 为登录按钮设置点击监听
// document.querySelector('.floor2 . login >.login-middle>.hu>form>input[type=button]').onclick = function() {
// 	var form = document.querySelector('form');
// 	var user = {
// 		username: form.user.value,
// 		password: form.pass.value,
// 	}
// 	sign(user);
// };

// 登录函数
// user是函数调用时传过来的参数
// users是用户的集合数组
// function sign(user) {
	// 再次获取form,为清除表单等操作准备
	// var form = document.querySelector('form');
	// 判断为空
	// if (user.username == '' || user.password == '') {
	// 	alert('账号与密码均不可为空');
	// 	return;
	// }
	// 若Cookie中有users则证明之前有注册过的新用户,此时更新users为Cookie中的users
	// if (Cookies.get('users')) users = JSON.parse(Cookies.get('users'));
	// 查询此账号
	// var trueUser = users.find(function(item) {
	// 	return item.username == user.username;
	// });
	// 无此账号
	// if (trueUser == undefined) {
	// 	alert('查无此人');
	// 	form.user.value = '';
	// 	form.pass.value = '';
	// 	return;
	// }

	// if (user.password === trueUser.password) {
		// 是否勾选自动登录,如果勾选自动登录,则在Cookie中开辟一个存储字段,存储输入的账号密码
		//此用户的账号和密码在Cookie中的保存时间,若勾选自动登录则保存7天,不勾选则不存入Cookie(在Cookie存储时间为0)
		// if (form.sign.checked) {
		// 	var userCookie = {
		// 		username: user.username,
		// 		password: user.password
		// 	};
		// 	Cookies.set('userCookies', JSON.stringify(userCookie), {
		// 		expires: 7
		// 	});
		// }
		// 无论哪种登录方式,都会在Cookie中留下username字段
		// var userDL = user.username;
		// Cookies.set('uName', user.username);
		// 跳转页面
		// 	if (Cookies.get('target')) target = Cookies.get('target');
		// } else {
		// 	alert('密码错误');
		// 	form.pass.value = '';
		// 	return;
	// }
// }

// cookieJudge();
// 函数:页面加载时就判断是否有已储存在Cookie的账号密码,有则登录
// function cookieJudge() {
// 	//自动登录要求:userCookies不为空且forbid为空
// 	if (Cookies.get('userCookies') && !Cookies.get('forbid')) {
// 		var cookieUser = JSON.parse(Cookies.get('userCookies'));
// 		sign(cookieUser);
// 	};
// }
