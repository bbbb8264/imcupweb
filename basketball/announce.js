$(document).ready(function(){
	$(".announceitem").click(function(){
		window.location.href = "index.php?current=announce&&announceid="+$(this).data("id");
	});
	$(".announceitem:odd").attr("style","background-color:#F5F5F5");
});