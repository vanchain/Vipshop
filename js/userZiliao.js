$(function() {

	//提交按钮事件
	$("#sub").click(function() {
		
		var username = $(".username").text();
		var nicheng = $("#nicheng").val();
		var sex = $(":radio[name=sex]:checked").val();

		var birthYear = $("#nian").val();
		var birthMonth = $("#yue").val();
		var birthDate = $("#ri").val();
		
		var cell01 = $("#cell01").val();
		var cell02 = $("#cell02").val();
		
		var province = $("#province").val();
		var city = $("#city").val();
		var area = $("#area").val();
		var town = $("#town").val();
		
		var adr = $("#adr").val();
		
		var email = $("#email").val();
		//创建一个用户对象
		var user = {
			username: username,
			nicheng: nicheng,
			sex: sex,
			birthday: {
				year: birthYear,
				month: birthMonth,
				day: birthDate
			},
			cell01:cell01,
			cell02:cell02,
			
			province: province,
			city: city,
			area: area,
			town: town,
			
			adr:adr,
			email:email
		};

		var str = JSON.stringify(user);
		localStorage.setItem("userInfo", str);
	});
	
	//获取用户信息
	var userInfo = localStorage.getItem("userInfo");
	if (userInfo != undefined) {
		//解析
		var storeUser = JSON.parse(userInfo);
		//设置表单元素的值
		$("#nicheng").val(storeUser.nicheng);
	
		if (storeUser.sex == "男") {
			$(":radio#sexMale").prop("checked", true);
		} else {
			$(":radio#sexFemale").prop("checked", true);
		}
		
		$("#nian").val(storeUser.birthday.year);
		$("#yue").val(storeUser.birthday.month);
		//触发一下月份改变事件
		$("#yue").trigger("change");
		$("#ri").val(storeUser.birthday.day);
		
		$("#cell01").val(storeUser.cell01);
		$("#cell02").val(storeUser.cell02);
		
		$("#province").val(storeUser.province);
		$("#city").val(storeUser.city);
		$("#area").val(storeUser.area);
		$("#town").val(storeUser.town);
		$("#adr").val(storeUser.adr);
		
		$("#email").val(storeUser.email);
	}
});
