//splash.js
//alert("Alert works");

$(".bubble").hover(
	function(){
		$(this).animate({
			color: '#00ff00',
			width: '110%'
		}); 
	},  
	function(){
		$(this).animate({
			width: '100%'
		}); 
	}
);
$(".bubble").click(function() {
	window.location = $(this).find("a").attr("href"); 
	return false;
});

$("#login_button").click(function() {
	$("#cover").show(1);
	$("#cover").animate({
		opacity: '0.6'
	});
	var x = document.getElementById("login_window");
    x.style.display = "block";
});

$("#close").click(function() {
	$("#cover").hide();
	$("#cover").animate({
		opacity: '0'
	});
	var x = document.getElementById("login_window");
	x.style.display = "none";
});

$("#close").click(function() {
	$("#login_window").hide();
	$("#cover").hide();
});
var session_user = 0;
//make login button and username + password fields
$("#submit").click(function() {
	var user = $("#username").val();
	var pass = $("#password").val();
	$.get("login.php?username="+user+"&password="+pass, function(response){
		var package = JSON.parse(response);
		alert("User ID: " + package.id);
		$("#responseDiv").html(package.comment);
		document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
		if (package.id === 1) {
			session_user = package.id;
			document.cookie = "user=joe";
		}
		else if (package.id === 2) {
			session_user = package.id;
			document.cookie = "user=jane"
		}
	});
	$("#login_window").hide();
	$("#cover").hide();
});
