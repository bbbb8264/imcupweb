$(document).ready(function(){
	$("#addfilebutton").click(function(){
		var x = document.createElement("input");
    	x.setAttribute("type", "file");
    	x.onchange = function(e){
    		var d = document.createElement("div");
    		d.setAttribute("class","fileitem");
            var di = document.createElement("div");
            di.style.flex = 1;
            var dt = document.createElement("div");
            dt.setAttribute("class","filetype");


            var filename = x.value.split('\\')[x.value.split('\\').length-1];
            var filetype = filename.split('.')[filename.split('.').length-1];
            filetype = filetype.toLowerCase();
            if(filetype == "rar" || filetype == "zip" || filetype == "7z"){
                dt.innerHTML = '<i class="file archive outline icon"></i>';
            }else if(filetype == "png" || filetype == "jpg" || filetype == "bmp" || filetype == "jpeg" ){
                dt.innerHTML = '<i class="file image outline icon"></i>';
            }else if(filetype == "pdf"){
                dt.innerHTML = '<i class="file pdf outline icon"></i>';
            }else if(filetype == "pptx" || filetype == "ppt"){
                dt.innerHTML = '<i class="file powerpoint outline icon"></i>';
            }else if(filetype == "docx" || filetype == "doc"){
                dt.innerHTML = '<i class="file word outline icon"></i>';
            }else if(filetype == "wmv" || filetype == "mp4" || filetype == "avi" || filetype == "rmvb" || filetype == "mov"){
                dt.innerHTML = '<i class="file video outline icon"></i>';
            }else if(filetype == "xlsx" || filetype == "xls"){
                dt.innerHTML = '<i class="file excel outline icon"></i>';
            }else if(filetype == "mp3" || filetype == "wma"){
                dt.innerHTML = '<i class="file audio outline icon"></i>';
            }else{
                dt.innerHTML = '<i class="file outline icon"></i>';
            }


    		var dn = document.createElement("div");
    		dn.setAttribute("class","filename");

    		x.setAttribute("name","file"+(document.forms[0].elements.length-1));
    		dn.innerHTML = filename;
    		var de = document.createElement("div");
    		de.setAttribute("class","deletebutton");
            de.innerHTML = '<img src="../delete.png">';
            d.appendChild(di);
            d.appendChild(dt);
    		d.appendChild(dn);
    		d.appendChild(de);
    		d.appendChild(x);
    		$("#filelist").append(d);
    		$(de).click(function(){
    			$(d).remove();
    			$.each($(".fileitem"), function( index, value ) {
					$(value).children("input:file").attr("name","file"+(index+1));
				});
    		});
    	}
    	x.click();
    });
    function fileupload(id,now){
        var request = new XMLHttpRequest();
        var formData = new FormData();
        formData.append('id',id);
        formData.append('file',document.forms[0].elements[now+2].files[0]);
        $(document.forms[0].elements[now+2]).parent('.fileitem').after(
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
                        if(document.forms[0].elements.length > now+3){
                            $('.progress.success').animate(
                                {opacity:0},1500,function(){
                                    $(this).remove();
                                }
                            );
                            $('.progress.success').removeClass('success');
                            fileupload(id,now+1);
                        }else{
                            $('.progress.success').animate(
                                {opacity:0},1500,function(){
                                    $(this).remove();
                                }
                            );
                            $('.progress.success').removeClass('success');
                            $("#submitbutton").html('已完成');
                        }
                    }
                }else{
                    console.log("Error", request.statusText);  
                }
            }
        };
        request.open('post','addannouncefile.php');
        request.send(formData);
    }
    $("#submitbutton").click(function(){
        $(this).unbind();
        $(this).removeClass('active');
        $(this).html(
            '<div class="ui active mini inline loader" style="'+
                'margin-left: -12px;'+
                'margin-top: -9px;'+
            '"></div>'
        );
        function updateProgress (e) {
            console.log(e.loaded/e.total);
        }
        var formData = new FormData();
        formData.append('title',document.forms[0].elements[0].value);
        formData.append('content',document.forms[0].elements[1].value);

        var request = new XMLHttpRequest();
        request.upload.onprogress=function(e){
            console.log("onprogress");
            console.log(e);
        };
        request.upload.onloadstart=function(e){
            console.log("onloadstart");
            console.log(e);
        };
        request.upload.onabort=function(e){
            console.log("onabort");
            console.log(e);
        };
        request.upload.onerror=function(e){
            console.log("onerror");
            console.log(e);
        };
        request.upload.ontimeout=function(e){
            console.log("ontimeout");
            console.log(e);
        };
        request.upload.onloadend=function(e){
            console.log("onloadend");
            console.log(e);
        };
        request.onreadystatechange = function() {
            console.log(request.readyState);
            if (request.readyState == 4) {
                if(request.status == 200){
                    console.log(request.responseText);
                    if($.isNumeric( request.responseText )){
                        var fileamount = document.forms[0].elements.length-2;
                        if(fileamount > 0){
                            fileupload(request.responseText,0);
                        }else{
                            $("#submitbutton").html('已完成');
                        }
                    }
                }else{
                    console.log("Error", request.statusText);  
                }
            }
          };
        request.open('post','addannounce.php');
        request.send(formData);
    });
});