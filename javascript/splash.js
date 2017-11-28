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
//document.getElementById('JQTest').style.background-color = "black";