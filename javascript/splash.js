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

//make login button and username + password fields
$("#submit").click(function() {
	$.get("login_test.php?username=" + username, function(data){
	  alert("Data: " + data);
	});

});


//document.getElementById('JQTest').style.background-color = "black";