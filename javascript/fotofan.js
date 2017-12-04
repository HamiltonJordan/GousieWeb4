$("#search_button").click(function(){
    var url = "http://cs.wheatoncollege.edu/~jkydd/Project%204/javascript/gousiedb.json";
    $.getJSON( url, function( data ) {
        var databaseObj = data;
        alert("returned" + databaseObj.joedb);
        
        var search_term = $("#search").val();
        alert("search" + search_term);
        $prt = $("#portal");
        for (i = 0; i < 40; i++) {
            if (databaseObj.joedb[i].year === search_term) {
                $prt.attr("src", databaseObj.joedb[i].link);
            }
        }	
    });
});

$prt = $("#portal");
$(".thumb").hover(magnify);
function magnify() {
	$prt.attr("src", this.src);		
}

