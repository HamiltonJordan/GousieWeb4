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
	alert("submitted");
	// Get the ZIP code from the text field
	var username = $("#username").val();
	var password = $("#password").val();
	//alert("credentials: " + username + ", " + password);
	//alert (zip);
	// Make an Ajax request to weather.php with the entered ZIP code
	var notNeeded;
	$.get("php/login.php?username="+username+"&password="+password, notNeeded, function (response) {
		var PHPresponse = JSON.parse(response);
		alert("get response");
		alert("Status: " + PHPresponse);
	});
/*
	$.ajax({
		type: "POST",
		url: 'php/login.php',
		data: {user: 'apple'},
		success: function(data)
		{
			$('#resultDiv').html(data);
			alert("Successful");
		}
	});
*/
/*
   $.get("login.php?username="+username+"password="+password, notNeeded, function (response) {
      var myObj = JSON.parse (response);
      //alert (myObj.success);
      var html = "";
      if (myObj.success) {
         html += "<h3>Forecast</h3><ol>";
         myObj.forecast.forEach (function (day) {
            html += "<li>" + day.desc + ": High is " + day.high + ", low is " + day.low + "</li>";
         });

      } else {
         html += "<h3>Username or password is incorrect</h3>";
      }

   });
*/
});
//document.getElementById('JQTest').style.background-color = "black";