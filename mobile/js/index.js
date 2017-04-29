$(function(){
	/*
	 * 左侧菜单弹出事件
	 */
	var con = $(".container");
	var caidan =$(".caidan");
	var left = $(".left-nav");
	var main = $(".main");
	
	var fontSize = parseFloat($('html').css("font-size"));
	//是否弹出的标志
	var tanchu = false;
	
	var hheight = $('html').height();
	   		
	var jjtop = $('.jianjie').offset().top;
	//这是招聘距离网页顶端的距离
	var zptop = $('.zhaopin').offset().top;
	//这是合作距离网页顶端的距离
	var hztop = $('.hezuo').offset().top;
	//这是招商距离网页顶端的距离
	var zstop = $('.zhaoshang').offset().top;
	//这是导航条底部距离网页顶端的距离
	var navBot = ((hheight * 0.2) + (fontSize * 1.2));
	
	
	function jvli(){
		 hheight = $('html').height();
	   		
	   	jjtop = $('.jianjie').offset().top;
   		//这是招聘距离网页顶端的距离
   		 zptop = $('.zhaopin').offset().top;
   		//这是合作距离网页顶端的距离
   		hztop = $('.hezuo').offset().top;
   		//这是招商距离网页顶端的距离
   		zstop = $('.zhaoshang').offset().top;
   		//这是导航条底部距离网页顶端的距离
		navBot = ((hheight * 0.2) + (fontSize * 1.2));
	}
	
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
	   		
	   	}
   	},false);//禁止页面滑动
   	
   	
   	function gaoliang(){
   		//导航条高亮        网页长*20%+html.fontsize * 0.8
	   		
	   		jvli();
			
			if(zptop>navBot){
				$(".nav1,.nav2,.nav3,.nav4").removeClass("navgaoliang");
				$('.nav1').addClass("navgaoliang");
			}
			if(zptop<=navBot){
				$(".nav1,.nav2,.nav3,.nav4").removeClass("navgaoliang");
				$('.nav2').addClass("navgaoliang");
			}
			if(hztop<=navBot){
				$(".nav1,.nav2,.nav3,.nav4").removeClass("navgaoliang");
				$('.nav3').addClass("navgaoliang");
			}
			if(zstop<=navBot){
				$(".nav1,.nav2,.nav3,.nav4").removeClass("navgaoliang");
				$('.nav4').addClass("navgaoliang");
			}
   	}
   	
   	/*
   	 * 导航条锚点链接事件
   	 */
   
    main.scroll( function() { 
	   gaoliang();  
	   jvli();
	});
	
	var mheight = parseFloat($(".con").height());
	 
 
	 
	$(".nav1").click(function(event) {
		if(jjtop>navBot){
			var tingzhi = false;
			main.animate({scrollTop:mheight}, 2000); // 滚动条的动画过渡跳转
			main.scroll( function() { 
				if(!tingzhi){
				    if(jjtop<navBot){
						main.stop(true);
						tingzhi = true;
					}
				}
			});
		}else{
			if(jjtop>=navBot-20){return}
			var tingzhi2 = false;
			main.animate({scrollTop:0}, 1000); // 滚动条的动画过渡跳转
			main.scroll( function() { 
				if(!tingzhi2){
				    if(jjtop>=navBot-20){
						main.stop(true);
						tingzhi2 = true;
					}
				}
			});
		}
		return false;//阻止默认行为
	});
	
	$(".nav2").click(function(event) {
		if(zptop>navBot){
			var tingzhi = false;
			main.animate({scrollTop:mheight}, 2000); // 滚动条的动画过渡跳转
			main.scroll( function() { 
				if(!tingzhi){
				    if(zptop<navBot){
						main.stop(true);
						tingzhi = true;
					}
				}
			});
		}else{
			if(zptop>=navBot-20){return}
			var tingzhi2 = false;
			main.animate({scrollTop:0}, 1000); // 滚动条的动画过渡跳转
			main.scroll( function() { 
				if(!tingzhi2){
				    if(zptop>=navBot-20){
						main.stop(true);
						tingzhi2 = true;
					}
				}
			});
		}
		return false;//阻止默认行为
	});
	
	
	$(".nav3").click(function(event) {
		if(hztop>navBot){
			var tingzhi = false;
			main.animate({scrollTop:mheight}, 2000); // 滚动条的动画过渡跳转
			main.scroll( function() { 
				if(!tingzhi){
				    if(hztop<navBot){
						main.stop(true);
						tingzhi = true;
					}
				}
			});
		}else{
			if(hztop>=navBot-20){return}
			var tingzhi2 = false;
			main.animate({scrollTop:0}, 1000); // 滚动条的动画过渡跳转
			main.scroll( function() { 
				if(!tingzhi2){
				    if(hztop>=navBot-20){
						main.stop(true);
						tingzhi2 = true;
					}
				}
			});
		}
		return false;//阻止默认行为
	});
	
	$(".nav4").click(function(event) {
		if(zstop>navBot){
			var tingzhi = false;
			main.animate({scrollTop:mheight}, 2000); // 滚动条的动画过渡跳转
			main.scroll( function() { 
				if(!tingzhi){
				    if(zstop<navBot){
						main.stop(true);
						tingzhi = true;
					}
				}
			});
		}else{
			if(zstop>=navBot-20){return}
			var tingzhi2 = false;
			main.animate({scrollTop:0}, 1000); // 滚动条的动画过渡跳转
			main.scroll( function() { 
				if(!tingzhi2){
				    if(zstop>=navBot-20){
						main.stop(true);
						tingzhi2 = true;
					}
				}
			});
		}
		return false;//阻止默认行为
	});
	
   		
   	
});
