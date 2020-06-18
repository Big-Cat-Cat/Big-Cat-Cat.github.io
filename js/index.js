function jump(){
	var admin =document.getElementById("admin").value;
	var password = document.getElementById("password").value;
	if(admin == 'admin' && password == '123')
	{
		alert("登录成功")
		window.location.assign("web/miku.html");
	}else{
		alert("用户名或密码错误,请使用测试账户登录");
	}
	
}