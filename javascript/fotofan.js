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

var galleryRAW = '{"images":[{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"}]}';
var gallery = JSON.parse (galleryRAW);
//alert(gallery.images[0].url);

$count = gallery.images.length;

$("#search").submit(refreshGallery);
function refreshGallery() {
	//$count = $("#search-input").val();
	var imageSlots = document.getElementsByClassName('thumb');

	for (var i = 0; i <= imageSlots.length; i++) {
		if (i < $count) {
			$slot = imageSlots[i];
			$slot.src = gallery.images[i].url;
		}
		else {
			$slot = imageSlots[i];
			$slot.src = "images/blockA.png";
		}
	}
}

//refreshGallery();
