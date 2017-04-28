$(function(){
	/*
	 * 左侧菜单弹出事件
	 */
	var footer = $(".footer-nav");
	var caidan =$(".caidan");
	
	footer.on('click','.geren',function(e) {
				alert(222);
			});
			
	caidan.on("tap",function(){
  		alert(11);
	});
	
});
