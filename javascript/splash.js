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

$("#login").click(function() {
	$("#cover").show(1);
	$("#cover").animate({
		opacity: '0.8'
	})
	//$("#cover").show(2500);
});

//make login button and username + password fields
$("login_button").click(function() {
   // Get the ZIP code from the text field
	var username = $("#username").val();
	var password = $("#password").val();

   //alert (zip);
   // Make an Ajax request to weather.php with the entered ZIP code
   var notNeeded;
   $.get("login.php?username="+username+"password="+password, notNeeded, function (response) {
      var myObj = JSON.parse (response);
      //alert (myObj.success);
      var html = "";
      if (myObj.success) {
         html += "<h3>Forecast</h3><ol>"
         myObj.forecast.forEach (function (day) {
            html += "<li>" + day.desc + ": High is " + day.high + ", low is " + day.low + "</li>";
         });

      } else {
         html += "<h3>Username of password is incorrect</h3>";
      }
      $("#forecast").html(html);
   });
});
//document.getElementById('JQTest').style.background-color = "black";