// 先判断去过主页吗？没去过就跳到主页
if(!Cookies.get('init')) window.location.replace('../index/index.html');
// 从cookie中得到需要的uName,然后找到需要的购物车列表和产品数据

// 这里先自己在cookies中创建cart和uName

// 第一次引入cookie，第二次在226行
var cart = JSON.parse(Cookies.get('cart'));
var uName = Cookies.get('uName');
var userCart = null;

if(uName) {
	document.querySelector('.cart-wrapper').style.display = 'block';
	userCart = cart.filter(function(item) {	return item.uName === uName; });
	console.log(userCart);
	// 调用显示购物车列表的函数（23）
	categoryCart();
} else {
	// 没有登录时跳转到登录页
	// window.location.replace(../login/index.html);
	Cookies.set('target', window.location.href);
	document.querySelector('.cart-wrapper').style.display = 'none';
	document.querySelector('.unlogin').style.display = 'block';
}
// 显示购物车列表中的东西
var pId = null, cartProduct = null,tBody = null, tr = null, td = null, 
input = null, img = null, a = null;
function categoryCart() {
	if(userCart.length !== 0) {
		// 用户的购物车中有，创建购物车列表
		for(var i = 0; i < userCart.length; i++) {
			pId = userCart[i].pid;
			cartProduct = product.find(function(item) {
				return item.id === pId;
			});
			//创建新的tr行
			tBody = document.querySelector('tbody');
			
			tr = document.createElement('tr');
			tr.dataset.id = userCart[i].id;
			
			tr.innerHTML = `
				<td>
					<input type="checkbox" class="checkbox-goods" checked="checked" />
				</td>
				<td>
					<img src="${cartProduct.avatar}" alt="" />
				</td>
				<td><a href="">${cartProduct.name}</a></td>
				<td>${cartProduct.color}</td>
				<td class="price-td">${cartProduct.price}</td>
				<td class="goods-count">
					<a href="javascript: void(0)" class='count-sub${userCart[i].count === 1 ? ' disabled' : '' }'>-</a>
					<input readonly="readonly" type="text" value="${userCart[i].count}" readonly="true"/>
					<a href="javascript: void(0)" class='count-add${userCart[i].count === 10 ? ' disabled' : '' }'>+</a>
				</td>
				<td></td>
				<td class="account-td">${userCart[i].count * cartProduct.price}</td>
				<td class="operate">
					<a href="javascript: void(0)" class="delete-tr">删除</a>
					<a href="">加入收藏夹</a>
					<a href="">定制包装</a>
				</td>
			`;
			tBody.appendChild(tr);
		}
	} else {
		// 用户的购物车中没有商品
		document.querySelector('.price-total-info').style.display = 'none';
		document.querySelector('.cart-empty').style.display = 'block';
	}
}
// 全选所有checkbox
var checkBoxes = document.querySelectorAll('input[type=checkbox]');
for(var i = 0; i < checkBoxes.length; i++) {
	checkBoxes[i].checked = true;
}

// 为table添加一系列的函数
var cartWrapper = document.querySelector('.cart-wrapper');
var checkboxAll1 = document.querySelector('table input.all');
var checkboxAll2 = document.querySelector('.check-info input.all');
var tbodyCheckboxes = document.querySelectorAll('tbody input.checkbox-goods');
cartWrapper.onclick = function(e) {
	// 全选联动单选
	if(e.target === checkboxAll1 || e.target === checkboxAll2) 
	checkAllControl(e.target);
	// 单选联动多选
	if(e.target.className.indexOf('checkbox-goods') !== -1 ) 
	tbodyCheckboxesControl(e.target);
	// 控制数量按钮
	if(e.target.className === 'count-sub' || e.target.className === 'count-add') 
	accountTdControl(e.target);
	// 删除tr操作
	if(e.target.className === 'delete-tr') 
	deleteTr(e.target);
	// 清空回收站操作
	if(e.target.className === 'clear-all') deleteAll();	
	// 点击结算按钮
	if(e.target.className === 'list-buy') listBuy();
	cartCountAndAccount();
};

// 全选联动单选
function checkAllControl(item) {
	if(item.checked === true) {
		// 单选按钮全部选中
		checkboxAll1.checked = true;
		checkboxAll2.checked = true;
		for(var i = 0; i < tbodyCheckboxes.length; i++){
			tbodyCheckboxes[i].checked = true; 
		}
	} else {
		checkboxAll1.checked = false;
		checkboxAll2.checked = false;
		for(var i = 0; i < tbodyCheckboxes.length; i++){
			tbodyCheckboxes[i].checked = false; 
		}
	}
}
// 单选联动多选
function tbodyCheckboxesControl(item) {
	if(item.checked === false) {
		// 单选按钮全部选中
		checkboxAll1.checked = false;
		checkboxAll2.checked = false;
	} else {
		var judge = true;
		for(var j = 0; j < tbodyCheckboxes.length; j++) {
			if(tbodyCheckboxes[j].checked === false) judge = false;
		}
		checkboxAll1.checked = judge;
		checkboxAll2.checked = judge;
	}
}
// 控制TD中的价格和数量
var countTd = null, priceTd = null, accountTd = null;
function accountTdControl(item) {
	if(item.className.indexOf('disabled') !== -1) return;
	tr = item.parentNode.parentNode;
	// 更改cookies中的产品数量
	var id = parseInt(tr.dataset.id);
	var cart = JSON.parse(Cookies.get('cart'));
	var target = userCart.find(function(item) { return item.id === id });
	var count = 0; 
	if(item.className === 'count-sub') {
		tr.querySelector('td.goods-count>a.count-add').className = 'count-add';
		target.count -= 1;
		if(target.count === 1) tr.querySelector('td.goods-count>a.count-sub').className = 'count-sub disabled';
	}
	if(item.className === 'count-add') {
		tr.querySelector('td.goods-count>a.count-sub').className = 'count-sub';
		target.count += 1;
		if(target.count === 10) tr.querySelector('td.goods-count>a.count-add').className = 'count-add disabled';
	}
	countTd = target.count;
	tr.querySelector('td.goods-count>input').value = countTd;
	priceTd = parseInt(tr.querySelector('td.price-td').innerText);
	accountTd = priceTd * countTd;
	tr.querySelector('td.account-td').innerText = accountTd;
	// console.log(userCart);
}
// 控制总金额和总数量
function cartCountAndAccount() {
	var countCart = 0, accountCart = 0;
	tr = document.querySelectorAll('tbody tr');
	for(var i = 0; i < tr.length; i++){
		var isCount = tr[i].querySelector('input.checkbox-goods').checked;
		if(isCount === true) {
			accountTd = parseInt(tr[i].querySelector('td.account-td').innerText);
			countTd = parseInt(tr[i].querySelector('td.goods-count>input').value);
			accountCart += accountTd;
			countCart += countTd;
		}
	}
	document.querySelector('.btn-price-area>span>i').innerText = countCart;
	document.querySelector('.btn-price-area>strong').innerText = '￥' + accountCart;
	
}
// 删除tr操作
function deleteTr(item) {
	if(!confirm('真的删除')) return;
	// 获取当前的删除的购物记录的id值
	var removeTr = item.parentNode.parentNode;
	var id = parseInt(removeTr.dataset.id);
	// 从cookie中拿出所有的购物记录，删除要删除的，更新cookie记录
	var index = cart.findIndex(function (item) { return item.id === id; })
	cart.splice('index', 1);
	Cookies.set('cart', JSON.stringify(cart));
	index = userCart.findIndex(function (item) { return item.id === id; })
	userCart.splice('index', 1);
	console.log(cart);
	console.log(userCart);
	// 删除tr
	removeTr.parentNode.removeChild(removeTr);
	alert('删除成功');
	if(document.querySelectorAll('.cart-wrapper tbody tr').length === 0) {
		document.querySelector('.cart-wrapper table').style.display = 'none';
		document.querySelector('.price-total-info').style.display = 'none';
		document.querySelector('.cart-empty').style.display = 'block';
	}
}

// 清空购物车按钮
function deleteAll() {
	if(!confirm('是否执行该操作?')) return;
	alert('清空完成!');
	var allTr = document.querySelectorAll('tbody>tr');
	for(var i = 0; i < allTr.length; i++){
		var body = document.querySelector('tbody');
		body.removeChild(allTr[i]);
	}
	cart = cart.filter(function(item) {
		return item.uName !== uName;
	});
	Cookies.set('cart', JSON.stringify(cart));
	userCart = cart.filter(function(item) {
		return item.uName === uName;
	});
	if(userCart.length === 0) {
		document.querySelector('.price-total-info').style.display = 'none';
		document.querySelector('.cart-empty').style.display = 'block';
	}
}
//	点击结算按钮
var order = JSON.parse(Cookies.get('order'));
var orderDetail = JSON.parse(Cookies.get('orderDetail'));
console.log(order);
console.log(orderDetail);
function listBuy() {
	// 找到tbody中所有是checked状态的i
		var allCheckedEls = document.querySelectorAll('tbody input.checkbox-goods');
		var ids = [];
		console.log(ids);
		allCheckedEls.forEach(function(item) {
			if(item.checked === true) {
				ids.push(parseInt(item.parentNode.parentNode.dataset.id));
			}
		});
		if(ids.length === 0) {
			alert('傻了？一个都不选？');
			return;
		} else {
			window.location.href = `../orderconfirm/orderconfirm.html?ids=${JSON.stringify(ids)}`;
		}	
	// // 订单提交
	// // 1. 向订单数组中加入新的订单相关数据，并跟新order
	// var date = new Date();
	// var orderId = '5lux' + date.getTime();											// 订单的编号
	// var uName = uName;												// 订单相关用户的名字
	// var addressId = 1;	// 订单相关地址的编号
	// var account = parseInt(accountTd);		// 订单总金额
	// var isPay = false;																// 订单是否付款
	// var expireTime = date.getTime() + 60 * 60 * 1000;								// 订单最后付款时间（毫秒数）
	// var time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	// order.push({																	// 更新order数组
	// 	id: orderId, uName: uName, addressId: addressId, account: account, isPay: isPay, time: time, expireTime: expireTime
	// });
	// Cookies.set('order', JSON.stringify(order));									// 将更新后的order放回COOKIE中
	// // 2. 向订单详情数组中加入新的订单相关数据 更新ordeDetail数组
	// // 2.1 选择出购物车中选中的产品，然后在购物车中删除，并加入到订单页中。
	// tr = document.querySelectorAll('tbody tr');
	// tr.forEach(function(item) {
	// 	// 找到被选中的产品项
	// 	if(item.querySelector('input.checkbox-goods').checked === true) {
	// 		console.log(item.dataset.id);
	// 		// 加入到orderDetail
	// 		orderDetail.push({ 
	// 			id: orderDetail[orderDetail.length - 1].id + 1,
	// 			orderId: orderId,
	// 			productId: item.dataset.id,
	// 			count: parseInt(item.querySelector('td.goods-count input').value)
	// 		});
			
	// 	}
	// });
	// // 更新orderDetail和cart
	// Cookies.set('orderDetail', orderDetail);
	// console.log(orderDetail);
	// // 3. 跳转至付款页面(传订单编号到下一个页面)
	// console.log(Cookies.get('order'));
	// alert('购买完成，即将跳转到订单确认页面');
	// window.location.replace(`../orderconfirm/orderconfirm.html?addressId=${orderId}`);
}
 
// 初次运行输出数量价格
cartCountAndAccount();
