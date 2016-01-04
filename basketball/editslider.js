$(document).ready(function(){
	$(".slidertitle").click(function(){
		if($(this).next().css("display") != "none"){
			$(this).next().slideUp();
		}else{
			$(this).next().slideDown();
		}
	});
	$("#editslidercontent").sortable({

	  	stop: function( event, ui ) {
	  		var count = 0;
	  		$(".slideritem").each(function(key,value){
	  			$(value).children('.slidertitle').html('第'+(++count)+'張投影片<br>'+$(value).children(".slidercontent").children('.slidersetting').children('form').children('.field').children('input')[0].value);
	  		});
	  	}
	});
	$(".slideritem").mouseenter(function(){
		$(this).children('.deleteslider').stop();
		$(this).children('.deleteslider').animate({
			opacity:1
		},500);
	}).mouseleave(function(){
		$(this).children('.deleteslider').stop();
		$(this).children('.deleteslider').animate({
			opacity:0
		},500);
	});
	$(".deleteslider").click(function(){
		var par = $(this).parent('.slideritem');
		$( "#dialog-confirm" ).dialog({
	      resizable: false,
	      height:205,
	      modal: true,
	      buttons: {
	        "確定": function() {
	          $( this ).dialog( "close" );
				$.ajax({
			        url : "submitdeleteslider.php",
			        type : "POST",
			        data : {id:par.data('id')},
			        success : function(data) {
			        	console.log(data);
			    		if(data == "success"){
			    			par.animate({
			    				opacity:0
			    			},600,function(){
			    				par.remove();
			    				var count = 0;
			    				$(".slideritem").each(function(key,value){
						  			$(value).children('.slidertitle').html('第'+(++count)+'張投影片<br>'+$(value).children(".slidercontent").children('.slidersetting').children('form').children('.field').children('input')[0].value);
						  		});
			    			});
			    		}
			       	},
			        error : function(xhr,errmsg,err) {
			           	console.log(xhr.status + ": " + xhr.responseText);
			        } 
			    });
	        },
	        "取消": function() {
	          $( this ).dialog( "close" );
	        }
	      }
	    });
	});
	function checksuperlink(){
		for(var i = 0;i < $('.slideritem').length;i++){
			if($($('.slideritem')[i]).find('input')[1].value != "" && $($('.slideritem')[i]).find('input')[1].value.substr(0, 7) != "http://" && $($('.slideritem')[i]).find('input')[1].value.substr(0, 8) != "https://"){
				return false;
			}
		}
		return true;
	}
	$("#savebutton").click(function(){
		console.log(checksuperlink());
		if(checksuperlink()){
			$(this).attr('disabled','disabled');
			$(this).addClass('loading');
			var button = $(this);
			var ajaxtotal = $('.slideritem').length;
			$('.slideritem').each(function(key,value){
				$.ajax({
				    url : "submiteditslider.php",
				    type : "POST",
				    data : {id:$(value).data('id'),queue:key+1,title:$(value).find('input')[0].value,superlink:$(value).find('input')[1].value},
				    success : function(data) {
				    },
				    error : function(xhr,errmsg,err) {
				        console.log(xhr.status + ": " + xhr.responseText);
				    } 
				});
			});
			var ajaxcount = 0;
			$( document ).ajaxComplete(function(){
				ajaxcount++;
				if(ajaxtotal == ajaxcount){
					button.removeAttr('disabled');
					button.removeClass('loading primary button');
					button.addClass('green button');
					button.html('完成');
					button.unbind('mouseleave');
					button.unbind('mouseenter');
					button.mouseenter(function(){
						$(this).removeClass('green button');
						$(this).addClass('primary button');
						$(this).html('送出');
					}).mouseleave(function(){
						$(this).removeClass('primary button');
						$(this).addClass('green button');
						$(this).html('完成');
					});
					$(document).unbind('ajaxComplete');
				}
			});
		}else{
			$( "#dialog" ).dialog({
				modal: true,
			      buttons: {
			        "確認": function() {
			          $( this ).dialog( "close" );
			        }
			      }
			});
		}
	});
});