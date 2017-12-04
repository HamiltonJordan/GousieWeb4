$("#search").submit(function(){
    var url = "http://cs.wheatoncollege.edu/~jkydd/Project%204/javascript/gousiedb.json";
    $.getJSON( url, function( data ) {
        var databaseObj = data;
        var search_term = $("#search_input").val();
        var photos = [];
        for (i = 0; i < databaseObj.joedb.length; i++) {
            if (databaseObj.joedb[i].year === search_term) {
                photos.push(databaseObj.joedb[i].link);
            }
        }
        for (i = 0; i < databaseObj.joedb.length; i++) {
            if (databaseObj.joedb[i].country === search_term) {
                photos.push(databaseObj.joedb[i].link);
            }
        }
        for (i = 0; i < databaseObj.joedb.length; i++) {
            if (databaseObj.joedb[i].state === search_term) {
                photos.push(databaseObj.joedb[i].link);
            }
        }
        for (i = 0; i < databaseObj.joedb.length; i++) {
            if (databaseObj.joedb[i].location === search_term) {
                photos.push(databaseObj.joedb[i].link);
            }
        }
        refreshGallery(photos);
        $prt = $("#portal");
        $prt.attr("src", photos[0]);	
    });
});
//$("#next").click(function() {
  //  $prt = $("#portal");
    //    $prt.attr("src", photos[0]);	
//});

$prt = $("#portal");
$(".thumb").hover(magnify);
function magnify() {
	$prt.attr("src", this.src);		
}

function refreshGallery(photo_array) {
	var imageSlots = document.getElementsByClassName('thumb');
    alert(photo_array);
	for (var i = 0; i < imageSlots.length; i++) {
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
