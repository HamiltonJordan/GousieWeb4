$(window).on('load', checkCookie);
function checkCookie(){
    $user = getCookie("username");
    if($user === ""){
        $user = prompt("What is your name?");
        createCookie("username", $user, 1);
    }
    else {
        alert("Welcome Back " + $user);
    }
}

$(document).ready(function() {
    $("#link").click(function(){
        window.location.href = "pizza.html";
    });
});

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
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    //alert("blankkkk");
    return "";
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
function deleteCookie(c_name){
    createCookie(c_name, "", -1);
}