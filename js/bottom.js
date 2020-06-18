function exit(){
	window.location.assign("../index.html");
}
function back(){
	window.location.assign("miku.html");
}
function random(){
	var i =Math.floor(Math.random()*6+1);
	if(i ==1){
		window.location.assign("yyzt.html");
	}else if(i == 2){
		window.location.assign("sy.html");
	}else if(i == 3){
		window.location.assign("ndmz.html");
	}else if(i == 4){
		window.location.assign("tqzz.html");
	}else if(i == 5){
		window.location.assign("zll.html");
	}else if(i == 6){
		window.location.assign("re.html");
	}
}