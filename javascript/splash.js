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
});

$('#login_form').submit(function() {
	alert("submitted!!!");
	$.ajax({
		type: 'POST',
		url: 'http://cs.wheatoncollege.edu/~jhamilton/login.php',
		data: { username: $(this).username.value, 
				password: $(this).password.value }
		success: function(data)
		{
			alert(data);
		}
	});
});

/*
$.ajax({
    type: "GET",
    url: 'php/login.php',
    data: {user: 'jordan'},
    success: function(data){
        alert(data);
    }
});
*/

	/*
	// Make an Ajax request to login.php with the entered ZIP code
	var notNeeded;
	$.get("http://cs.wheatoncollege.edu/~jhamilton/login.php?user="+user, notNeeded, function (response) {
		alert(response);
	})
	*/



//document.getElementById('JQTest').style.background-color = "black";
//jshint multistr: true