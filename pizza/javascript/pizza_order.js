$(document).ready(function() {
	updateAddress();
	$("#cheese").click(setCart);
	$("#pepperoni").click(setCart);
	$("#meat").click(setCart);
	$("#clear").click(clearCart);
	$("#submit").click(setAddress);
});

function setAddress() {
	var values = $("#inputAddress").val();
	//alert("first" + values);
	$addressCookie = getCookie("address");
	if($addressCookie === ""){
		input = ($("#inputAddress").val() +"/");
		input += ($("#inputCity").val() +"/");
		input += ($("#inputState").val() +"/");
		input += ($("#inputZip").val() +"/");
		//alert("input" + input);
		setCookie ("address", input, 365);
		createCookie("username", $addressCookie, 1);
	}
	else {
		input = ($("#inputAddress").val() +"/");
		input += ($("#inputCity").val() +"/");
		input += ($("#inputState").val() +"/");
		input += ($("#inputZip").val() +"/");
		//alert("input" + input);
		setCookie ("address", input, 365);
	}
	
}

function updateAddress(){
	$addressCookie = getCookie("address");
	//alert($addressCookie);
	var barray = $addressCookie.split("/");
	//alert ("b" + barray);
	if($addressCookie !== ""){
		$("#inputAddress").val(barray[0]);
		$("#inputCity").val(barray[1]);
		$("#inputState").val(barray[2]);
		$("#inputZip").val(barray[3]);
	}
}
var createCookie = function(name, value, days) {
	var expires;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	else {
		expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
};

var numInCart = 0;
function setCart () {
	numInCart ++;
	setCookie ("item"+numInCart, this.id, 365);
	cart();
}
function clearCart () {
	for (var i = 1; i <= numInCart; i++) {
		delCookie("item"+i);
	}
	numInCart = 0;
	cart();
}

function cart () {
	var new_html = "";
	if (numInCart) {
		var i;
		var itemNum;
		var item = "JORDAN";
		var amount = "1";
		var price = 0;
		var total = 0;
		for (i = 1; i <= numInCart; i++) {
			item = getCookie ("item"+i);
			if(item === "cheese"){
				item = "Cheese Pizza";
				price = 9.0;
			}
			else if(item === "pepperoni"){
				item = "Pepperoni Pizza";
				price = 9.5;
			}
			else if(item === "meat"){
				item = "Meatlover's Pizza";
				price = 10.0;
			}
			total += price;
			new_html += 
			"<div class=\"cart_item\"><div class=\"row\"><div class=\"col\">"
			+ item + 
			"</div><div class=\"col\">" 
			+ amount +
			"</div><div class=\"col\">"
			+ price.toFixed(2) + 
			"</div></div>";
		}
	} else {
		var total = 0;
	}
	total = total.toFixed(2);
	$("#in_cart").html (new_html);
	$("#total_price").html ("$" + total);
}


function setCookie (name, value, numDays) {
	var date = new Date();
	// getTime() gets today's date in milliseconds as of 01/01/1970
	date.setTime (date.getTime() + (1000 * 60 * 60 * 24 * numDays));
	//                              milli  sec  min  hr   days
	// converted to total milliseconds to add to today
	var expires = "expires=" + date.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie (name) {
	// return value of cookie with specified name
	var searchName = name + "=";				
	var decodedCookie = decodeURIComponent (document.cookie);	
	var carray = decodedCookie.split(";");			
	var i, oneCookie;

	for (i = 0; i < carray.length; i++) {		
		oneCookie = carray[i];				
		while (oneCookie.charAt(0) == " ") {		
			oneCookie = oneCookie.substring(1);
		}
		if (oneCookie.indexOf(searchName) == 0) {
			return oneCookie.substring (searchName.length, oneCookie.length);
		}
	}
	return "";   // fail
}

function delCookie (name) {
	// delete a cookie with given name
	// either of these works
	// document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	document.cookie = name + "=; expires=; path=/";
}

function printer(){
    cStr = "";
    pCOOKIES = new Array();
    pCOOKIES = document.cookie.split('; ');
    for(bb = 0; bb < pCOOKIES.length; bb++){
        NmeVal  = new Array();
        NmeVal  = pCOOKIES[bb].split('=');
        if(NmeVal[0]){
            cStr += NmeVal[0] + '=' + unescape(NmeVal[1]) + '; ';
        }
    }
    return cStr;
}
function printCookies(){
    alert(printer());
}