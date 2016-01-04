$(document).ready(function(){
	$(".deletebutton").click(function(){
		var formData = new FormData();
        var request = new XMLHttpRequest();
        formData.append('id',$(this).data('id'));
        var parent = $(this).parent('.announceitem');
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if(request.status == 200){
                    if(request.responseText == 'success'){
                        parent.remove();
                    }
                }else{
                    console.log("Error", request.statusText);  
                }
            }
        };
        request.open('post','deleteannounce.php');
        request.send(formData);
	});
});