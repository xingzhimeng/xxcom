$(function(){
	/*
	 * 左侧菜单弹出事件
	 */
	var con = $(".container");
	var caidan =$(".caidan");
	var left = $(".left-nav");
	var main = $(".main");
	
	//是否弹出的标志
	var tanchu = false;
	
	
	//用定时器防止刚弹出就被关闭
	caidan.on("click",function(){
		if(!tanchu){
	  		left.css("left","0rem");
	  		con.css("left","4.3rem");
	  		window.setTimeout(function(){
	  			tanchu = true;
	  		},1);
  		}
	});
	
	con.on("click",function(){
		if(tanchu){
			left.css("left","-4.3rem");
	  		con.css("left","0rem");
	  		window.setTimeout(function(){
				tanchu = false;
			},1);
		}
	});
	
	
   document.addEventListener("touchmove",function(e){
	   	if(tanchu){
	   		e.preventDefault();
	   	}else{
	   		gaoliang();
	   		
	   	}
   	},false);//禁止页面滑动
   	
   	
   	function gaoliang(){
   		//导航条高亮        网页长*20%+html.fontsize * 0.8
	   		var hheight = $('html').height();
	   		var fontSize = parseFloat($('html').css("font-size"));
	   		//这是招聘距离网页顶端的距离
	   		var zptop = $('.zhaopin').offset().top;
	   		//这是合作距离网页顶端的距离
	   		var hztop = $('.hezuo').offset().top;
	   		//这是招商距离网页顶端的距离
	   		var zstop = $('.zhaoshang').offset().top;
	   		//这是导航条底部距离网页顶端的距离
			var navBot = ((hheight * 0.2) + (fontSize * 1.2));
			
			if(zptop>navBot){
				$(".nav1,.nav2,.nav3,.nav4").removeClass("navgaoliang");
				$('.nav1').addClass("navgaoliang");
			}
			if(zptop<navBot){
				$(".nav1,.nav2,.nav3,.nav4").removeClass("navgaoliang");
				$('.nav2').addClass("navgaoliang");
			}
			if(hztop<navBot){
				$(".nav1,.nav2,.nav3,.nav4").removeClass("navgaoliang");
				$('.nav3').addClass("navgaoliang");
			}
			if(zstop<navBot){
				$(".nav1,.nav2,.nav3,.nav4").removeClass("navgaoliang");
				$('.nav4').addClass("navgaoliang");
			}
   	}
   	
   	/*
   	 * 导航条锚点链接事件
   	 */
   
   
   	main.click(function(){
   		
   	});
   		
   	
});
