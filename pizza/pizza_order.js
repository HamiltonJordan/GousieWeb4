$(document).ready(function() {
	$("#cheese").click(setCart);
	$("#pepperoni").click(setCart);
	$("#meat").click(setCart);
});

var numInCart = 0;

function setCart () {
	numInCart ++;
	setCookie ("item"+numInCart, this.id, 365);
}

function cart () {
	var html = "";
	if (numInCart) {
        var i;
        var itemNum;
		for (i = 1; i <= numInCart; i++) {
			itemNum = getCookie ("item"+i);
			html += "<h3>Item " + itemNum + " is in cart</h3>";
		}
	} else {
		html += "<h3>Nothing in cart</h3>";
	}
        
	$("#in_cart").html (html);
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