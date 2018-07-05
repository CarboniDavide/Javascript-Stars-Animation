/*
Davide Carboni 2017 All Right Reserved
jquery javascript function for Animation
*/	
	
	
/*****************************************************************************************************/
/**************************** Resize Main Title*******************************************************/
/*****************************************************************************************************/
		
	function ResizeTitle()
	{
		var big_div = $(".big");
		var thin_div = $(".thin");
		
		var big_ofs = big_div.offset();		
		var thin_ofs = thin_div.offset();
		
		var height = window.innerHeight;
		
		if (big_ofs.top != thin_ofs.top)
		{			
			$(".big").css("width",$(".thin").width() + 26);
			$(".big").css("margin-right","0px");
		}
		if (big_ofs.top == thin_ofs.top)
		{
			big_div.css("width","");
			$(".big").css("margin-right","");
		}		
		
		$(".main-title").css("top",height/2 + $(".navbar").height()/2);
	};

	window.addEventListener("resize", ResizeTitle);
	window.addEventListener("load", ResizeTitle);
	window.addEventListener("reload", ResizeTitle);
