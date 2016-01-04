$(document).ready(function(){
	var intervalid;
	$(".sliderbutton").click(function(){		
		$("#sliderpics").css("margin-left",$(this).data('marginleft'));
		$(".sliderbutton").attr('style',"");
		$(this).attr('style',"color:#8E8E8E");
		clearInterval(intervalid);
		intervalid = setInterval(function(){
			$($(".sliderbutton")[(($("#sliderpics").css("margin-left").substr(0,$("#sliderpics").css("margin-left").length-2)/1000*(-1))+1)%$(".sliderbutton").length]).click();
		}, 10000);
	});
	$(".picitem").click(function(){
		if(typeof($(this).data('target')) != "undefined"){
			window.location.href = $(this).data('target');
		}
	});
	$("#slider").mouseenter(function(){
		$(".block").stop();
		$(".block").animate({
			opacity:0.3
		},500);
	}).mouseleave(function(){
		$(".block").stop();
		$(".block").animate({
			opacity:0
		},500);
	});
	intervalid = setInterval(function(){
		$($(".sliderbutton")[(($("#sliderpics").css("margin-left").substr(0,$("#sliderpics").css("margin-left").length-2)/1000*(-1))+1)%$(".sliderbutton").length]).click();
	}, 10000);
});