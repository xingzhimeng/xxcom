$(function(){
	/*
	 * 左侧菜单弹出事件
	 */
	var con = $(".container");
	var caidan =$(".caidan");
	var left = $(".left-nav");
	
	
	//是否弹出的标志
	var tanchu = false;
	
	
	//用定时器防止刚弹出就被关闭
	caidan.on("tap",function(){
  		left.css("left","0rem");
  		con.css("left","4.3rem");
  		window.setTimeout(function(){
  			tanchu = true;
  		},1);
  		
	});
	
//	con.on("tap",function(){
//		if(tanchu){
//			left.css("left","-4.3rem");
//	  		con.css("left","0rem");
//	  		window.setTimeout(function(){
//				tanchu = false;
//			},1);
//		}
//	});
	
});
