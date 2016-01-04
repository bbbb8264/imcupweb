$(document).ready(function(){
	function submit(){
		var button = $(this);
		if($("input")[1].value == ''){
			$("#dialog").html('<p>學校欄位不可為空白</p>');
			$( "#dialog" ).dialog({
				modal: true,
			      buttons: {
			        "確認": function() {
			          $( this ).dialog( "close" );
			        }
			      }
			});
		}else if($("input")[2].value == ''){
			$("#dialog").html('<p>科系欄位不可為空白</p>');
			$( "#dialog" ).dialog({
				modal: true,
			      buttons: {
			        "確認": function() {
			          $( this ).dialog( "close" );
			        }
			      }
			});
		}else{
			$(this).html(
	            '<div class="ui active mini inline loader" style="'+
	                'margin-left: -12px;'+
	                'margin-top: -9px;'+
	            '"></div>'
	        );
	        $(this).removeClass('active');
	        $(this).unbind();
			$.ajax({
				url : "checkschooldepartment.php",
				type : "POST",
				data : {school:$("input")[1].value,department:$("input")[2].value},
				success : function(data) {
					if(data == "exist"){
						button.html('送出');
						button.addClass('active');
						button.click(submit);
						$("#dialog").html('<p>資料庫已有該隊伍，若要報名兩隊請在科系那欄做出分別(EX:資管系B隊)</p>');
						$( "#dialog" ).dialog({
							modal: true,
						      buttons: {
						        "確認": function() {
						          $( this ).dialog( "close" );
						        }
						      }
						});
					}else if(data == "not exist"){
						$.ajax({
							url : "submitaddteam.php",
							type : "POST",
							data : {school:$("input")[1].value,department:$("input")[2].value},
							success : function(data) {
								if(data == "success"){
									button.html('送出');
									button.addClass('active');
									button.click(submit);
									$("#dialog").html('<p>隊伍新增完成</p>');
									$( "#dialog" ).dialog({
										modal: true,
									      buttons: {
									        "確認": function() {
									          $( this ).dialog( "close" );
									        }
									      }
									});
									$("input")[1].value = "";
									$("input")[2].value = "";
								}
							},
							error : function(xhr,errmsg,err) {
								console.log(xhr.status + ": " + xhr.responseText);
							} 
						});
					}
				},
				error : function(xhr,errmsg,err) {
					console.log(xhr.status + ": " + xhr.responseText);
				} 
			});
		}
	}
	$("#submitbutton").click(submit);
});