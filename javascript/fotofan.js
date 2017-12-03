
$("#search_button").click(function(){
    alert("search");
    $getJSON("json/gousiedb.js", function(data){
        var photodb = $parseJSON(data);
        alert(photodb);
    });
});

$prt = $("#portal");
$(".thumb").hover(magnify);
function magnify() {
	$prt.attr("src", this.src);		
}

