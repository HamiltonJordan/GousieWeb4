$("#search_button").click(function(){
    var url = "http://cs.wheatoncollege.edu/~jkydd/Project%204/javascript/gousiedb.json";
    $.getJSON( url, function( data ) {
        var databaseObj = data;
        alert("returned" + databaseObj.joedb);
        
        var search_term = $("#search_input").val();
        alert("search" + search_term);
        var photos = [];
        for (i = 0; i < databaseObj.joedb.length; i++) {
            if (databaseObj.joedb[i].year === search_term) {
                photos += databaseObj.joedb[i].link;
            }
        }
        refreshGallery(photos);
    });
});

$prt = $("#portal");
$(".thumb").hover(magnify);
function magnify() {
	$prt.attr("src", this.src);		
}

//var galleryRAW = '{"images":[{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"}]}';
//var gallery = JSON.parse (galleryRAW);
//alert(gallery.images[0].url);

//$count = gallery.images.length;

<<<<<<< HEAD
$("#search").submit(refreshGallery);
function refreshGallery() {
	//$count = $("#search-input").val();
=======
//$("#search").submit(refreshGallery);
function refreshGallery(photo_array) {
>>>>>>> 145aeea87cb26746218151cb9c8f283078a18ce7
	var imageSlots = document.getElementsByClassName('thumb');

	for (var i = 0; i <= imageSlots.length; i++) {
		if (i < photo_array.length) {
			$slot = imageSlots[i];
			$slot.src = photo_array[i];
		}else{
			$slot = imageSlots[i];
			$slot.src = "images/blockA.png";
		}
	}
}

//refreshGallery();
