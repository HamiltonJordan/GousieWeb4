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
		opacity: '0.8'
	})
	$("#login_window").show(700);

	//$("#cover").show(2500);
});

$("#close").click(function() {
	$("#login_window").hide();
	$("#cover").hide();
})

$('input').keyup(function(e){
	if(e.keyCode == 13){
		$(this).trigger("enterKey");
	}
});

//Function performed on keypress
$('input').bind("enterKey",function(e){
	//alert("Enter");
	// Get the username from the text field
	var user = $("#username").val();
	alert("Username is " + user);

JavaScript

$.ajax({
    type: "GET",
    url: 'php/login.php',
    data: {user: 'jordan'},
    success: function(data){
        alert(data);
    }
});

	/*
	// Make an Ajax request to login.php with the entered ZIP code
	var notNeeded;
	$.get("http://cs.wheatoncollege.edu/~jhamilton/login.php?user="+user, notNeeded, function (response) {
		alert(response);
	})
	*/
});


//document.getElementById('JQTest').style.background-color = "black";
//jshint multistr: true