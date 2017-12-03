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
	//$("#cover").show(2500);
});

$("#close").click(function() {
	$("#login_window").hide();
	$("#cover").hide();
});

//make login button and username + password fields
$("#submit").click(function() {
	$.get("login.php", function(data){
	  alert("Data: " + data);
	});
	//var username = $("#username").val();
	//var password = $("#password").val();

	// Make an Ajax request to weather.php with the entered ZIP code
	/*
	$.ajax({
		type: "GET",
		url: 'http://cs.wheatoncollege.edu/~jhamilton/GousieWeb4/login.php',
		data: {zip: '12345'},
		dataType: "text",
		success: function test(response) {
			alert(response);
		}

	});
	alert("but here!");
	*/
});


//document.getElementById('JQTest').style.background-color = "black";