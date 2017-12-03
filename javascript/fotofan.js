
$("#search_button").click(function(){
    alert("search");
    $.getJSON( "http://cs.wheatoncollege.edu/~jkydd/Project%204/javascript/gousiedb.json", function( data ) {
        alert("inget");
        alert(data);
        var items = [];
        $.each( data.joedb, function( key, val ) {
            items.push(  key + " : " + val );
        });
        alert(items);
    });
});

$prt = $("#portal");
$(".thumb").hover(magnify);
function magnify() {
	$prt.attr("src", this.src);		
}

