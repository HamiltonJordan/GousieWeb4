$(document).ready(function() {
	$("#cheese").click(setCart);
	$("#pepperoni").click(setCart);
	$("#meat").click(setCart);
});


var numInCart = 0;

function setCart () {
	numInCart ++;
	setCookie ("item"+numInCart, this.id, 365);
	cart();
}

function cart () {
	var new_html = "";
	if (numInCart) {
		var i;
		var itemNum;
		var item = "Pepperoni";
		var amount = "1";
		var price = 2.55;
		for (i = 1; i <= numInCart; i++) {
			//itemNum = getCookie ("item"+i);
			new_html += 
			"<div class=\"cart_item\"><div class=\"row\"><div class=\"col\">"
			+ item + 
			"</div><div class=\"col\">" 
			+ amount +
			"</div><div class=\"col\">"
			+ price + 
			"</div></div>";
		}
	} else {
		new_html += "<h3>Nothing in cart</h3>";
	}
        
	$("#in_cart").html (new_html);
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