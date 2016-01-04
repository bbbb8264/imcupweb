$(document).ready(function(){
	var x = $("#addfilebutton").children('input')[0];
	x.onchange = function(e){
		$("#addfilebutton").unbind();
		$("#addfilebutton").click(function(){
			x.click();
		});
		$("#addfilebutton").mouseenter(function(){
			$("#addfilebutton").children('.addfiledescription').html('點擊更換圖片');
		}).mouseleave(function(){
			$("#addfilebutton").children('.addfiledescription').html(x.files[0].name);
		});
		var reader = new FileReader();
		reader.onload = function (e) {
		    $("#addfilebutton").children('img').attr('src', e.target.result).attr('class','previewimg');
		    $("#addfilebutton").children('img').css('display','block');
		};
		reader.readAsDataURL(x.files[0]);
	};
	$("#addfilebutton").click(function(){
		x.click();
	});
	$("#submitbutton").click(function(){
		if($('input')[1].value != "" && $('input')[1].value.substr(0, 7) != "http://" && $('input')[1].value.substr(0, 8) != "https://"){
			$("#dialog").html('<p>超連結的開頭必須為http://</p>');
			$( "#dialog" ).dialog({
				modal: true,
			      buttons: {
			        "確認": function() {
			          $( this ).dialog( "close" );
			        }
			      }
			});
		}else if(x.files.length != 0){
			$(this).unbind();
			$(this).removeClass('active');
			$(this).html(
	            '<div class="ui active mini inline loader" style="'+
	                'margin-left: -12px;'+
	                'margin-top: -9px;'+
	            '"></div>'
	        );
			var request = new XMLHttpRequest();
	        var formData = new FormData();
	        formData.append('title',$('input')[0].value);
	        formData.append('superlink',$('input')[1].value);
	        formData.append('file',x.files[0]);
	        $("#submitbutton").before(
	            '<div class="ui indicating progress active">'+
	                '<div class="bar"></div>'+
	                '<div class="label">檔案準備上傳</div>'+
	            '</div>'
	        );
	        request.upload.onprogress=function(e){
	            $('.progress.active').progress({
	                percent: e.loaded/e.total*100
	            });
	            $('.progress.active .label').html('已完成'+Math.round(e.loaded/e.total)+'%');
	        };
	        request.upload.onloadend=function(e){
	            $('.progress.active').progress({
	                percent: e.loaded/e.total*100
	            });
	            $('.progress.success .label').html('檔案上傳已完成');
	        };
	        request.onreadystatechange = function() {
	            if (request.readyState == 4) {
	                if(request.status == 200){
	                    if(request.responseText == 'success'){
	                        $('.progress.success').animate(
		                        {opacity:0},1500,function(){
		                            $(this).remove();
		                        }
		                    );
		                    $('.progress.success').removeClass('success');
		                    $("#submitbutton").html('已完成');
	                    }
	                }else{
	                    console.log("Error", request.statusText);  
	                }
	            }
	        };
	        request.open('post','addslider.php');
	        request.send(formData);
		}else{
			$("#dialog").html('<p>必須上傳檔案才可以製作投影片</p>');
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