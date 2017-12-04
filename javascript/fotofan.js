
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

var galleryRAW = '{"images":[{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"}]}';
var gallery = JSON.parse (galleryRAW);
//alert(gallery.images[0].url);

$count = gallery.images.length;

$("#search").submit(refreshGallery);
function refreshGallery() {
	$count = $("#search-input").val();
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

		//$imageSlots[i].attr("src", "images/blockE.png");
	}
}

//refreshGallery();
